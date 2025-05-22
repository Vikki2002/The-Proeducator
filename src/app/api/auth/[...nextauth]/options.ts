import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import connectDB from "../../../../lib/dbConnect";
import UserModel from "../../../../models/user";

// Extend the structure of the user object to include 'id'
interface User {
    id: string; // This is required by next-auth
    _id: string;
    email: string;
    username: string;
    phone: string;
    isVerified: boolean;
    password: string; // Include password if needed for comparison, but avoid sending it in the session
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<User | null> {
                if (!credentials) {
                    throw new Error("No credentials provided");
                }

                await connectDB();
                try {
                    const user = await UserModel.findOne({ email: credentials.email }) as User | null;
                    if (!user) {
                        throw new Error("No user with this email");
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if (!isPasswordCorrect) {
                        throw new Error("Incorrect password");
                    }
                    return user
                } catch (err) {
                    throw new Error(err instanceof Error ? err.message : "An error occurred");
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id; // Use 'id' instead of '_id'
                token.username = user.username;
                token.phone = user.phone;
                token.isVerified = user.isVerified;
            }
            // Handle Google sign-in
            if (account && account.provider === "google") {
                await connectDB();
                let existingUser = await UserModel.findOne({ email: token.email });
                if (!existingUser) {
                    existingUser = await UserModel.create({
                        username: token.name,
                        email: token.email,
                        phone_number: "",
                        password: "",
                        verifyCode: "",
                        isVerified: true, // Google emails are verified by default
                        authType: "google",
                    });
                    // Store user details in token
                    token.id = existingUser._id;
                    token.username = existingUser.username;
                    token.phone = existingUser.phone_number;
                    token.isVerified = existingUser.isVerified;
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token.id as string; // Use 'id' instead of '_id'
                session.user.username = token.username;
                session.user.phone = token.phone;
                session.user.isVerified = token.isVerified;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
}