"use client";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/shared/footer";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaExclamationTriangle, FaInfoCircle, FaUniversity, FaGlobe, FaUserAlt, FaBrain, FaHandshake, FaLifeRing, FaChevronDown, FaChevronUp, FaCalendarAlt } from "react-icons/fa";

const challenges = [
    { name: "Costliness", description: "High tuition fees, expensive consultancy services.", icon: <FaMoneyBillWave className="text-red-500 text-3xl" /> },
    { name: "Mistrust", description: "Students often receive misleading or incomplete information.", icon: <FaExclamationTriangle className="text-yellow-500 text-3xl" /> },
    { name: "Misinformation", description: "Lack of transparency in admission and scholarship details.", icon: <FaInfoCircle className="text-blue-500 text-3xl" /> },
    { name: "Complexity", description: "Complicated visa, financial aid, and admission procedures.", icon: <FaUniversity className="text-green-500 text-3xl" /> },
    { name: "Accessibility", description: "Not all students have equal access to global education opportunities.", icon: <FaGlobe className="text-purple-500 text-3xl" /> },
    { name: "Isolation", description: "Students struggle with cultural differences and lack of guidance.", icon: <FaUserAlt className="text-gray-500 text-3xl" /> },
];

const solutions = [
    { name: "AI-Powered Personalization", description: "Smart university recommendations, course matching, and scholarship assistance.", icon: <FaBrain className="text-blue-500 text-3xl" /> },
    { name: "Comprehensive Student Support", description: "Real-time AI guidance, cultural adaptation resources, and mental health support.", icon: <FaLifeRing className="text-green-500 text-3xl" /> },
    { name: "End-to-End Assistance", description: "From university selection to travel arrangements, ensuring a seamless journey.", icon: <FaHandshake className="text-orange-500 text-3xl" /> },
];

const services = [
    {
        id: 1,
        name: "Test Preparation",
        icon: "/about/exam-preparation.png",
        description: "Expert guidance for IELTS, TOEFL, GRE, GMAT, and other standardized tests with personalized study plans and practice sessions.",
        features: ["Personalized study plans", "Mock tests with feedback", "One-on-one coaching", "Study materials"]
    },
    {
        id: 2,
        name: "Expert Counselling",
        icon: "/about/conversation.png",
        description: "Personalized guidance from experienced counselors who understand your academic goals and career aspirations.",
        features: ["Career path assessment", "Academic profile evaluation", "Course selection guidance", "Personalized roadmap"]
    },
    {
        id: 3,
        name: "Country Selection",
        icon: "/about/countries.png",
        description: "Find the perfect study destination based on your academic interests, budget, career goals, and personal preferences.",
        features: ["Country comparison tools", "Cost of living analysis", "Cultural fit assessment", "Post-graduation opportunities"]
    },
    {
        id: 4,
        name: "University Selection",
        icon: "/about/unit.png",
        description: "Identify universities that align with your academic profile, career goals, and budget constraints.",
        features: ["University rankings analysis", "Admission requirements review", "Scholarship opportunities", "Alumni network insights"]
    },
    {
        id: 5,
        name: "Admission Formalities",
        icon: "/about/application.png",
        description: "Complete assistance with application forms, documentation, and submission processes for your target universities.",
        features: ["Application form guidance", "Document verification", "Statement of purpose review", "Application tracking"]
    },
    {
        id: 6,
        name: "Scholarship Guidance",
        icon: "/about/scholarship.png",
        description: "Discover and apply for scholarships, grants, and financial aid opportunities to fund your education abroad.",
        features: ["Scholarship eligibility assessment", "Application assistance", "Essay review", "Interview preparation"]
    },
    {
        id: 7,
        name: "Financial Assistance",
        icon: "/about/financial.png",
        description: "Get help with budgeting, education loans, and financial planning for your international education journey.",
        features: ["Education loan guidance", "Budget planning", "Financial documentation", "Cost optimization strategies"]
    },
    {
        id: 8,
        name: "Interview Preparation",
        icon: "/about/interview.png",
        description: "Comprehensive preparation for university and visa interviews with mock sessions and expert feedback.",
        features: ["Mock interview sessions", "Question preparation", "Body language coaching", "Confidence building"]
    },
    {
        id: 9,
        name: "Visa Assistance",
        icon: "/about/passport.png",
        description: "End-to-end support for student visa applications, including documentation, form filling, and interview preparation.",
        features: ["Document checklist", "Application review", "Visa interview coaching", "Follow-up assistance"]
    },
    {
        id: 10,
        name: "Forex Assistance",
        icon: "/about/forex.png",
        description: "Guidance on foreign exchange, international money transfers, and opening bank accounts abroad.",
        features: ["Currency exchange guidance", "International banking", "Money transfer options", "Financial planning"]
    },
    {
        id: 11,
        name: "Air Ticket",
        icon: "/about/airplane-ticket.png",
        description: "Help with booking affordable flights, understanding baggage allowances, and planning your journey.",
        features: ["Flight comparison", "Baggage planning", "Travel insurance", "Airport assistance"]
    },
    {
        id: 12,
        name: "Travel",
        icon: "/about/assistance.png",
        description: "Comprehensive pre-departure guidance, accommodation assistance, and arrival support in your destination country.",
        features: ["Pre-departure checklist", "Accommodation options", "Local transportation guidance", "Essential services information"]
    },
];

export default function Service() {
    const [expandedService, setExpandedService] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    const toggleService = (id: number) => {
        // If clicking the same service, close it
        // If clicking a different service, open the new one and close the previous one
        setExpandedService(expandedService === id ? null : id);
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16"
            >
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl font-bold text-primary mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-700 max-w-3xl mx-auto"
                    >
                        Comprehensive support for your entire study abroad journey, from test preparation to arrival assistance.
                    </motion.p>
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowModal(true)}
                        className="btn btn-primary btn-lg mt-8 gap-2"
                    >
                        <FaCalendarAlt /> Schedule Free Consultation
                    </motion.button>
                </div>
            </motion.div>

            <section className="max-w-7xl mx-auto w-full px-4 py-16">
                {/* Problems Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-4xl font-bold mb-6 text-primary">
                        Challenges in Study Abroad
                    </h2>
                    <p className="mb-8 text-xl text-gray-600">The study abroad process faces several challenges that create barriers for students.</p>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src="/problem.jpg"
                                alt="Study Abroad Challenges"
                                width={400}
                                height={500}
                                className="object-cover rounded-xl shadow-xl"
                            />
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                            {challenges.map((challenge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="card bg-base-100 shadow-lg border-l-4 border-error"
                                >
                                    <div className="card-body">
                                        <div className="flex items-center gap-3 mb-2">
                                            {challenge.icon}
                                            <h3 className="card-title text-lg">{challenge.name}</h3>
                                        </div>
                                        <p className="text-gray-600">{challenge.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Solutions Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-4xl font-bold mb-6 text-primary">
                        Our AI-Powered Solutions
                    </h2>
                    <p className="mb-8 text-xl text-gray-600">
                        <span className="text-primary font-semibold">The ProEducator</span> offers innovative solutions to overcome study abroad challenges.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="card bg-base-100 shadow-xl"
                            >
                                <div className="card-body items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        {solution.icon}
                                    </div>
                                    <h3 className="card-title text-xl">{solution.name}</h3>
                                    <p className="text-gray-600">{solution.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Services Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-primary text-center">
                        Comprehensive Services
                    </h2>
                    <p className="mb-12 text-xl text-gray-600 text-center max-w-3xl mx-auto">
                        From test preparation to arrival assistance, we provide end-to-end support for your international education journey.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (service.id % 6) * 0.1 }}
                                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-fit" // Added h-fit
                            >
                                <div className="card-body flex flex-col justify-between"> {/* Added flex and justify-between */}
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-primary/10 rounded-full">
                                                <img
                                                    src={service.icon}
                                                    alt={`Icon for ${service.name}`}
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                            <h3 className="card-title">{service.name}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                    </div>

                                    <div className="flex flex-col gap-4"> {/* Wrapper for button and expanded content */}
                                        <div className="card-actions justify-end">
                                            <button
                                                className="btn btn-sm btn-outline btn-primary"
                                                onClick={() => toggleService(service.id)}
                                            >
                                                {expandedService === service.id ? (
                                                    <>Less Details <FaChevronUp /></>
                                                ) : (
                                                    <>More Details <FaChevronDown /></>
                                                )}
                                            </button>
                                        </div>

                                        {expandedService === service.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pt-4 border-t"
                                            >
                                                <h4 className="font-semibold mb-2">Key Features:</h4>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="text-gray-600">{feature}</li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            {/* CTA Section */}
            <section className="bg-primary/10 py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-6 text-primary"
                    >
                        Ready to Start Your Study Abroad Journey?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
                    >
                        Schedule a free consultation with our expert advisors to discuss your goals and create a personalized plan for your international education.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowModal(true)}
                        className="btn btn-primary btn-lg gap-2"
                    >
                        <FaCalendarAlt /> Book Your Free Consultation
                    </motion.button>
                </div>
            </section>

            {/* Consultation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-xl p-8 relative border border-primary/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white p-4 rounded-full shadow-lg">
                            <FaCalendarAlt className="text-2xl" />
                        </div>

                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500 hover:text-primary"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold text-primary mb-2 text-center">Schedule Your Free Consultation</h3>
                        <p className="text-gray-600 text-center mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="John Doe" className="input input-bordered focus:input-primary" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Phone Number</span>
                                    </label>
                                    <input type="tel" placeholder="+1 (234) 567-8900" className="input input-bordered focus:input-primary" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email Address</span>
                                </label>
                                <input type="email" placeholder="john@example.com" className="input input-bordered focus:input-primary" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Interested Service</span>
                                </label>
                                <select className="select select-bordered focus:select-primary w-full" defaultValue="">
                                    <option value="" disabled>Choose a service</option>
                                    {services.map((service, idx) => (
                                        <option key={idx} value={service.name}>{service.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Preferred Date</span>
                                    </label>
                                    <input type="date" className="input input-bordered focus:input-primary" min={new Date().toISOString().split('T')[0]} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Preferred Time</span>
                                    </label>
                                    <select className="select select-bordered focus:select-primary" defaultValue="">
                                        <option value="" disabled>Select time</option>
                                        <option value="morning">Morning (9AM - 12PM)</option>
                                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                        <option value="evening">Evening (4PM - 8PM)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Message (Optional)</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered focus:textarea-primary h-24"
                                    placeholder="Tell us about your study abroad goals and any specific questions you have..."
                                ></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-2">
                                    <input type="checkbox" className="checkbox checkbox-primary" required />
                                    <span className="label-text">I agree to receive communications about my consultation</span>
                                </label>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="btn btn-primary w-full gap-2"
                            >
                                <FaCalendarAlt /> Schedule Consultation
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* Testimonials Section */}
            <section className="py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-12 text-primary text-center"
                    >
                        What Our Students Say
                    </motion.h2>

                    <motion.div
                        className="flex gap-8"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            x: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* First set of testimonials */}
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                className="card bg-base-100 shadow-xl min-w-[350px]"
                            >
                                {/* Existing card content */}
                                <div className="card-body">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={`/testimonials/student${item}.jpg`} alt="Student" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Student Name</h3>
                                            <p className="text-sm text-gray-500">University of Example, UK</p>
                                        </div>
                                    </div>
                                    {/* ... rest of the card content ... */}
                                </div>
                            </motion.div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={`duplicate-${item}`}
                                className="card bg-base-100 shadow-xl min-w-[350px]"
                            >
                                {/* Duplicate card content */}
                                <div className="card-body">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={`/testimonials/student${item}.jpg`} alt="Student" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Student Name</h3>
                                            <p className="text-sm text-gray-500">University of Example, UK</p>
                                        </div>
                                    </div>
                                    {/* ... rest of the card content ... */}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
};