"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import components to optimize loading
const Stories = dynamic(() => import("./Stories"), { ssr: false });
const AuthForm = dynamic(() => import("../auth/authForm"), { ssr: false });

const SuccessStories = () => {
    const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
    const [authType, setAuthType] = useState<"login" | "signup">("login");

    return (
        <>
            <main className="relative w-full overflow-x-hidden">
                <div
                    className="w-full h-[700px] flex flex-col justify-center items-center"
                    style={{
                        backgroundImage: "url(/testimonialsMap.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="card lg:card-side bg-base-100 p-2 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="card-body text-center lg:text-left flex flex-col items-center lg:items-start px-4"
                        >
                            <p
                                className="text-blue-600 font-semibold text-lg sm:text-xl uppercase"
                                style={{ fontFamily: "var(--font-geist-sans)" }}
                            >
                                Your Study Abroad Expert
                            </p>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                                45,000+ happy students studying at their dream university abroad
                            </h1>
                            <p className="text-gray-600 mt-6 text-base sm:text-lg">
                                Get end-to-end support from applications to visa and more
                            </p>
                            <div className="flex flex-wrap gap-2.5">
                                <div className="avatar-group -space-x-6">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="avatar">
                                            <div className="w-12 rounded-full">
                                                <Image
                                                    src="/why_we_exist.jpg"
                                                    alt={`User ${i}`}
                                                    width={48}
                                                    height={48}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[18px] text-gray-700">
                                    200,000+ monthly counsellings
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    setAuthType("login");
                                    setShowAuthModal(true);
                                }}
                                className="mt-6 px-6 py-3 bg-blue-600 text-white text-base sm:text-lg font-medium rounded hover:bg-blue-700 cursor-pointer"
                            >
                                Start your journey
                            </button>
                        </motion.div>

                        {/* 3D Animated Image */}
                        <motion.figure
                            className="w-full flex justify-center"
                            initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
                            whileHover={{ rotateX: 10, rotateY: -10, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            style={{ perspective: 1000 }}
                        >
                            <Image
                                src="/tourist-park-ferris-wheel.jpg"
                                width={800}
                                height={400}
                                alt="Album"
                                className="w-full h-auto rounded-lg shadow-xl"
                            />
                        </motion.figure>
                    </div>
                </div>
                <div className="w-full max-w-6xl mx-auto mb-3.5">
                    <Stories />
                </div>
            </main>
            {showAuthModal && (
                <AuthForm
                    showModal={showAuthModal}
                    setShowModal={setShowAuthModal}
                    authType={authType}
                    setAuthType={setAuthType}
                />
            )}
        </>
    );
};

export default SuccessStories;
