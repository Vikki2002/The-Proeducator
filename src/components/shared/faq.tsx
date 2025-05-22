"use client"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How do I apply to universities?",
        answer: "To apply to universities, you need to research and shortlist institutions based on your interests and eligibility. Most universities have an online application portal where you can create an account, fill out the application form, upload required documents such as transcripts, recommendation letters, and personal statements, and pay the application fee. Make sure to check application deadlines and specific requirements for each university."
    },
    {
        question: "What documents are needed for a student visa?",
        answer: "A student visa application usually requires a valid passport, proof of acceptance from a recognized university (admission letter), financial statements proving you can cover tuition and living expenses, passport-sized photographs, a completed visa application form, proof of English proficiency (such as TOEFL or IELTS scores), and a medical examination report in some cases. Always check the specific requirements of the country you are applying to."
    },
    {
        question: "How to find scholarships for international students?",
        answer: "You can find scholarships by checking university websites, government scholarship programs, and private organizations offering financial aid. Websites like Scholarship.com, DAAD, Chevening, and Fulbright provide numerous opportunities. Additionally, you can reach out to university financial aid offices for institution-specific scholarships and grants. Some scholarships are merit-based, while others are need-based or awarded for specific fields of study."
    },
    {
        question: "What are application deadlines for top universities?",
        answer: "Application deadlines vary by university and country. Generally, for fall intake, applications open around August-September and close between December and January. Some universities also offer early decision deadlines around November. For spring intake, deadlines usually fall between July and October. It is best to check the university's official website for precise deadlines and start preparing your application well in advance."
    },
    {
        question: "How to write an effective personal statement?",
        answer: "An effective personal statement should be well-structured, engaging, and personalized. Start with a strong introduction that captures the reader’s attention, followed by body paragraphs that highlight your academic achievements, extracurricular activities, career aspirations, and reasons for choosing the specific university and program. Use real-life examples to showcase your skills and experiences. Conclude with a powerful closing statement that reinforces your enthusiasm and commitment. Proofread multiple times to avoid grammatical errors and ensure clarity."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-6xl px-6 mx-auto mt-12 relative bg-gradient-to-br from-base-100 to-base-200 p-8 rounded-2xl shadow-xl"
        >
            <h1 className="text-4xl font-bold text-center text-primary mb-6">FAQ Knowledge Base</h1>
            <p className="text-lg text-gray-600 text-center mt-2 mb-10 max-w-2xl mx-auto">
                Find answers to commonly asked questions about university applications, scholarships, visas, and more.
            </p>
            <div className="mt-8 space-y-6">
                <AnimatePresence>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border-2 border-primary/10 rounded-xl shadow-lg overflow-hidden hover:border-amber-500 transition-all duration-300"
                        >
                            <button
                                className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-gray-800 hover:bg-primary focus:outline-none focus:bg-primary transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaChevronDown className="text-neutral w-5 h-5" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-5 text-gray-600 border-t border-gray-100 leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.main>
    );
};

export default FAQ;
