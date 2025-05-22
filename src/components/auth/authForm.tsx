"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AnimatePresence, motion } from "framer-motion";
import { signIn } from "next-auth/react";
import axios from "axios";

interface AuthFormProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    authType: "login" | "signup";
    setAuthType: React.Dispatch<React.SetStateAction<"login" | "signup">>;
}

const AuthForm: React.FC<AuthFormProps> = ({ showModal, setShowModal, authType, setAuthType }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLogin, setLogin] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone_number: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        phone_number: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">("");

    const togglePassword = () => setShowPassword(!showPassword);

    const validateField = (name: string, value: string) => {
        let error = "";
        switch (name) {
            case "username":
                if (authType === "signup" && value.trim().length < 3) error = "Username must be at least 3 characters long.";
                break;
            case "email":
                if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(value)) error = "Invalid email address.";
                break;
            case "phone_number":
                if (authType === "signup" && value.replace(/\D/g, "").length < 10) error = "Invalid phone number.";
                break;
            case "password":
                if (value.length < 6) error = "Password must be at least 6 characters long.";
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: error }));
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({ ...prev, phone_number: value }));
        validateField("phone_number", value);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLogin(true);

        const newErrors = {
            username: '',
            email: '',
            phone_number: '',
            password: ''
        };

        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) newErrors[key as keyof typeof newErrors] = error;
        });

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error !== "")) {
            setMessage("Please fix validation errors before submitting.");
            setMessageType("error");
            setLogin(false);
            return;
        }

        if (authType === "signup") {
            try {
                const response = await axios.post("http://localhost:5000/api/auth/userCreate", formData);
                if (response.data.success) {
                    setMessage("Signup successful! Please log in.");
                    setMessageType("success");
                    setFormData({ username: "", email: "", phone_number: "", password: "" });

                    // Optional: auto-switch to login after delay
                    setTimeout(() => {
                        setAuthType("login");
                    }, 2000);
                }
            } catch (err) {
                const errorMessage =
                    (err as Error & { response?: { data?: { message?: string } } }).response?.data?.message ||
                    "An unexpected error occurred. Please try again.";
                setMessage(errorMessage);
                setMessageType("error");
            } finally {
                setLogin(false);
            }
        } else {
            const result = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                setMessage(result.error);
                setMessageType("error");
            } else {
                setShowModal(false);
            }

            setLogin(false);
        }

        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 3000);
    };

    const handleGoogleSignIn = async () => {
        const result = await signIn("google", { callbackUrl: "/userdashboard" });
        if (result?.error) {
            setMessage("Google Sign-In failed. Try again.");
            setMessageType("error");
        }
    };

    const handleSwitchAuthType = () => {
        setAuthType(authType === "login" ? "signup" : "login");
        setMessage("");
        setMessageType("");
    };

    if (!showModal) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative bg-base-100 rounded-2xl shadow-2xl max-w-md w-full"
                >
                    <button
                        onClick={() => setShowModal(false)}
                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                    >
                        ✕
                    </button>

                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-center">
                            {authType === "login" ? "Welcome Back" : "Create Account"}
                        </h2>

                        <form onSubmit={onSubmit} className="space-y-4">
                            {authType === "signup" && (
                                <div>
                                    <input
                                        className="input input-bordered w-full focus:input-primary transition-all"
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                    />
                                    {errors.username && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-error text-sm block mt-1"
                                        >
                                            {errors.username}
                                        </motion.span>
                                    )}
                                </div>
                            )}

                            <div>
                                <input className="input input-bordered w-full" type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>

                            {authType === "signup" && (
                                <div>
                                    <PhoneInput
                                        country={"us"}
                                        value={formData.phone_number}
                                        onChange={handlePhoneChange}
                                    />
                                    {errors.phone_number && <span className="text-red-500 text-sm">{errors.phone_number}</span>}
                                </div>
                            )}

                            <div className="relative">
                                <input className="input input-bordered w-full" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} placeholder="Password" />
                                <span className="absolute right-3 top-2.5 cursor-pointer" onClick={togglePassword}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={isLogin}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isLogin ? (
                                    <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                    authType === "login" ? "Sign In" : "Create Account"
                                )}
                            </motion.button>
                        </form>

                        <div className="divider my-6">OR</div>

                        <div className="space-y-3">
                            <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogleSignIn}>
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </div>

                        <div className="text-center mt-6">
                            <p className="text-sm">
                                {authType === "login" ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    className="text-primary hover:underline font-medium"
                                    onClick={handleSwitchAuthType}
                                >
                                    {authType === "login" ? "Sign Up" : "Sign In"}
                                </button>
                            </p>
                        </div>
                    </div>

                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="toast toast-start"
                        >
                            <div className={`alert ${messageType === "success" ? "alert-success" : "alert-error"}`}>
                                <span>{message}</span>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AuthForm;
