"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Globe, Building } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/shared/footer";

const ContactPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gradient-to-b from-base-200/50 to-base-100"
            >
                {/* Hero Section */}
                <div className="bg-primary/5 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Get in Touch
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            We&apos;re here to help you achieve your educational dreams. Reach out to our expert counselors today.
                        </motion.p>
                    </div>
                </div>

                {/* Contact Methods Grid */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: Phone, title: "Call Us", content: "+44 7435773972", subtext: "Mon-Sat, 9AM-5:30PM" },
                            { icon: Mail, title: "Email Us", content: "contact@theproeducator.com", subtext: "24/7 Support" },
                            { icon: MessageSquare, title: "Live Chat", content: "Chat with an Expert", subtext: "Instant Response" },
                            { icon: Globe, title: "Virtual Meeting", content: "Schedule a Call", subtext: "Book Your Slot" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                    <item.icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-neutral font-medium mb-1">{item.content}</p>
                                <p className="text-sm text-gray-500">{item.subtext}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Office Locations */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold mb-8">Address</h2>

                            {/* Pune Office */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="flex items-start gap-4 mb-4">
                                    <Building className="w-6 h-6 text-primary" />
                                    <div>

                                    </div>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2752.1948923218433!2d-0.3512695306076902!3d51.58628400361943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4876136825e1810f%3A0x1d74c665d3b0c173!2s9A%20Apsley%20Close%2C%20Harrow%2C%20UK!3m2!1d51.5862748!2d-0.3536708!4m5!1s0x4876136fba8f1331%3A0x1f6051efb017fe9c!2sThe%20Laurels%2C%2041-43%20Salisbury%20Rd%2C%20Harrow%20HA1%201NU%2C%20United%20Kingdom!3m2!1d51.5857988!2d-0.3439753!5e1!3m2!1sen!2sin!4v1747460560447!5m2!1sen!2sin" width="600" height="450" ></iframe>
                            </div>

                            {/* Nagpur Office */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="flex items-start gap-4 mb-4">
                                    <Building className="w-6 h-6 text-primary" />
                                    <div>

                                        <h3 className="text-xl font-semibold mb-2">London Office</h3>
                                        <p className="text-gray-600">
                                            4 Eltham Lodge 9a Apsley Close, North Harrow, Harrow, Middlesex, United Kingdom, HA2 6DP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                                </div>
                                <button className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-focus transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-primary/5 py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "10K+", label: "Students Helped" },
                                { number: "31+", label: "Countries" },
                                { number: "95%", label: "Success Rate" },
                                { number: "24/7", label: "Support" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                                    <p className="text-gray-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default ContactPage;
