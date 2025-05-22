import connectDB from "@/lib/dbConnect";
// import { sendVerification } from "@/lib/mailer";
import UserModel from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    await connectDB();
    try {
        const { username, email, phone_number, password } = await request.json();
        console.log(username, email, phone_number, password);
        // Check if user already exists
        const existingUser = await UserModel.findOne({ $or: [{ email }, { phone_number }] });

        if (existingUser) {
            return Response.json({
                success: false,
                message: "User already exists with this email",
            }, { status: 409 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModel({
            username,
            email,
            phone_number,
            password: hashedPassword,
            verifyCode: "",
            isVerified: false,
            authType: "email",
        });

        await newUser.save();

        // Send verification email
        // const emailVerifyResponse = await sendVerification(email, username, verifyCode);
        // if (!emailVerifyResponse.success) {
        //     return Response.json({
        //         success: false,
        //         message: "Failed to send verification email",
        //     }, { status: 500 });
        // }

        return Response.json({
            success: true,
            message: "Account created , login now",
        }, { status: 200 });
    } catch (error) {
        console.error("Signup Error:", error);
        return Response.json({
            success: false,
            message: "Internal Server Error",
        }, { status: 500 });
    }
}
