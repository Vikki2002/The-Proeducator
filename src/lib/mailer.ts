import nodemailer from "nodemailer";

export async function sendVerification(email: string, username: string, verifyCode: string) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Your Gmail
                pass: process.env.EMAIL_PASS,  // Your App Password
            },
        });

        const mailOptions = {
            from: `"Your App Name" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Verify Your Account",
            html: `
                <h2>Hello ${username},</h2>
                <p>Your verification code is: <strong>${verifyCode}</strong></p>
                <p>This code will expire in 1 hour.</p>
                <p>If you did not request this, please ignore this email.</p>
                <br>
                <p>Best Regards,</p>
                <p>Your App Team</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Email sending failed:", error);
        return { success: false, message: "Failed to send email" };
    }
}
