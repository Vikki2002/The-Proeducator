import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Flag from "react-world-flags";

const countries = [
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Australia", code: "AU" },
    { name: "Canada", code: "CA" },
    { name: "Ireland", code: "IE" },
    { name: "China", code: "CN" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "Hungary", code: "HU" },
    { name: "Indonesia", code: "ID" },
    { name: "Italy", code: "IT" },
    { name: "Japan", code: "JP" },
    { name: "Lithuania", code: "LT" },
    { name: "Malaysia", code: "MY" },
    { name: "Malta", code: "MT" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Singapore", code: "SG" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "Vietnam", code: "VN" },
];

const StudyDestinations = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollAmount = 10; // Adjust speed of scroll
        const interval = setInterval(() => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollTo({ left: 0, behavior: "smooth" }); // Reset to start
            } else {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }, 50); // Adjust interval for smoother scroll

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 text-gray-900 mt-7"
        >
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">Top Study Destinations</h1>

            <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide space-x-4 p-2">
                {countries.map((country, index) => (
                    <motion.div
                        key={country.code}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex-shrink-0 w-[180px] border border-neutral rounded-lg py-4 px-4 flex flex-col items-center shadow-md hover:scale-[1.05] hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                        <Flag code={country.code} className="w-12 h-8 mb-2" />
                        <span className="text-lg font-medium text-center">{country.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.main>
    );
};

export default StudyDestinations;
