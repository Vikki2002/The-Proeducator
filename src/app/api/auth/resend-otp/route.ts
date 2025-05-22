import connectDB from "@/lib/dbConnect";
import { sendVerification } from "@/lib/mailer";
import UserModel from "@/models/user";
import moment from "moment";

export async function POST(request: Request) {
    await connectDB();
    try {
        const { email, username } = await request.json();
        const user = await UserModel.findOne({ email });

        if (!user) {
            return Response.json({
                success: false,
                message: "Account not found",
            }, { status: 404 });
        }

        // Generate a new OTP and expiry time
        const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
        const expiryTime = moment().add(5, "minutes").toDate(); // OTP expires in 5 minutes

        // Update user OTP and expiry in the database
        user.verifyCode = newOTP;
        user.verifyCodeExpiry = expiryTime;
        await user.save();

        // Send OTP via email
        const emailResponse = await sendVerification(email, username, newOTP);
        if (!emailResponse.success) {
            return Response.json({
                success: false,
                message: "Failed to send OTP. Please try again.",
            }, { status: 500 });
        }

        return Response.json({
            success: true,
            message: "OTP has been resent successfully!",
        }, { status: 200 });

    } catch (error) {
        console.error("Resend OTP Error:", error);
        return Response.json({
            success: false,
            message: "Internal Server Error",
        }, { status: 500 });
    }
}
