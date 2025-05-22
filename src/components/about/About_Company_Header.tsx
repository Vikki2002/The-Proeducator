"use client"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@mui/material";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CompanyFeature {
    icon: string;
    title: string;
    description: string;
}

const features: CompanyFeature[] = [
    {
        title: "Test Preparation",
        icon: "/about/exam-preparation.png",
        description: "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, and more"
    },
    {
        title: "Admission Formalities",
        icon: "/about/application.png",
        description: "Complete assistance with university applications and documentation"
    },
];

const allServices: CompanyFeature[] = [
    {
        title: "Test Preparation",
        icon: "/about/exam-preparation.png",
        description: "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, and more"
    },
    {
        title: "Admission Formalities",
        icon: "/about/application.png",
        description: "Complete assistance with university applications and documentation"
    },
    {
        title: "Financial Assistance",
        icon: "/about/financial.png",
        description: "Guidance on education loans, budgeting, and financial planning"
    },
    {
        title: "Expert Counselling",
        icon: "/about/conversation.png",
        description: "Personalized guidance from experienced education counselors"
    },
    {
        title: "Scholarship Guidance",
        icon: "/about/scholarship.png",
        description: "Help with scholarship applications and funding opportunities"
    },
    {
        title: "Visa Assistance",
        icon: "/about/passport.png",
        description: "Support with student visa applications and documentation"
    },
    {
        title: "University Selection",
        icon: "/about/unit.png",
        description: "Help choosing the right university based on your profile"
    },
    {
        title: "Interview Preparation",
        icon: "/about/interview.png",
        description: "Mock interviews and preparation guidance"
    },
    {
        title: "Travel Assistance",
        icon: "/about/assistance.png",
        description: "Support with travel arrangements and accommodation"
    },
];

export default function AboutCompanyHeader() {
    const [showModal, setShowModal] = useState(false);
    const route = useRouter();

    return (
        <>
            <section className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden border border-info"
                        >
                            <Image
                                src="/about/company-hero.jpg"
                                alt="ProEducator Team"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="stats stats-vertical lg:stats-horizontal shadow bg-neutral">
                                    <div className="stat">
                                        <div className="stat-title text-white text-2xl">Students Helped</div>
                                        <div className="stat-value text-white">10K+</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-title text-white text-2xl">Universities</div>
                                        <div className="stat-value text-white">125+</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className="text-6xl font-bold mb-6">
                                    About Our
                                    <span className="text-primary block mt-2">Company</span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    The ProEducator simplifies study abroad with AI-powered support,
                                    125+ UK university partners, personalized guidance, and scholarships,
                                    transforming global education access.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="card-body flex flex-row items-center gap-4">
                                            <div className="bg-primary p-3 rounded-xl">
                                                <Image
                                                    src={feature.icon}
                                                    alt={feature.title}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="card-title">{feature.title}</h3>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    variant="contained"
                                    size="large"
                                    endIcon={<FaArrowRight />}
                                    onClick={() => setShowModal(true)}
                                    sx={{
                                        backgroundColor: "orange",
                                        color: "white",
                                        fontWeight: "bold",
                                        "&:hover": { backgroundColor: "orange" }
                                    }}
                                >
                                    Learn More
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{borderColor: "orange", color: "orange", fontWeight: "bold"}}
                                    onClick={() => route.push("/contact")}
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >
            {/* Services Modal */}
            <AnimatePresence>
                {
                    showModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setShowModal(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-4xl p-8 max-h-[80vh] overflow-y-auto relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="btn btn-sm btn-circle absolute right-4 top-4"
                                    onClick={() => setShowModal(false)}
                                >
                                    <FaTimes />
                                </button>

                                <h2 className="text-3xl font-bold text-primary mb-8">Our Services</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {allServices.map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="card bg-base-200 hover:shadow-lg transition-shadow"
                                        >
                                            <div className="card-body">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="bg-primary p-3 rounded-xl">
                                                        <Image
                                                            src={service.icon}
                                                            alt={service.title}
                                                            width={32}
                                                            height={32}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <h3 className="card-title text-lg">{service.title}</h3>
                                                </div>
                                                <p className="text-gray-600 text-sm">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}