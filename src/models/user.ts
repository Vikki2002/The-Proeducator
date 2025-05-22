import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
    username?: string;
    email?: string;
    phone_number?: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    authType: 'email' | 'google';
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<User> = new Schema(
    {
        username: { type: String, trim: true },

        email: {
            type: String,
            trim: true,
            unique: true,
            sparse: true,
            match: [/.+\@.+\..+/, "Please use a valid email address"],
        },

        phone_number: {
            type: String,
            unique: true,
            sparse: true,
        },

        password: {
            type: String,
        },

        verifyCode: { type: String },
        verifyCodeExpiry: { type: Date},

        isVerified: { type: Boolean, default: false },

        authType: {
            type: String,
            enum: ["email", "phone", "google", "facebook", "linkedin"],
            required: true,
            default: "email",
        },
    },
    { timestamps: true }
);


const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema);
export default UserModel;
