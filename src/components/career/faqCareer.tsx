"use client"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "Application Submission",
        answer: " Submit your resume and cover letter through our online portal."
    },
    {
        question: "Initial Screening",
        answer: "Our HR team reviews applications and conducts initial phone interviews."
    },
    {
        question: "Skills Assessment",
        answer: "Complete a role-specific assessment to demonstrate your expertise."
    },
    {
        question: "Team Interview",
        answer: "Meet with potential team members and discuss your experience and approach."
    },
    {
        question: "Final Decision",
        answer: "Receive our decision and discuss next steps for joining our team."
    }
];

const FAQCareer = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="w-full max-w-4xl px-6 mx-auto mt-12 relative">
            <h1 className="text-3xl font-bold text-center text-gray-800">Application Process</h1>
            <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center px-5 py-4 text-lg font-medium text-accent-content hover:bg-gray-100 focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <FaChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openIndex === index && (
                            <div className="px-5 pb-4 text-gray-600 border-t border-gray-200 text-justify">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default FAQCareer;
