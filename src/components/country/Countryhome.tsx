"use client";
import { motion } from "framer-motion";
import Flag from "react-world-flags";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Globe2 } from "lucide-react";

interface Country {
    id: number;
    name: string;
    code: string;
}

const Countries: Country[] = [
    { id: 1, name: "United Kingdom", code: "GB" },
    { id: 2, name: "USA", code: "US" },
    { id: 3, name: "Ireland", code: "IE" },
    { id: 4, name: "Canada", code: "CA" },
    { id: 5, name: "Germany", code: "DE" },
    { id: 6, name: "Dubai", code: "AE" },
    { id: 7, name: "France", code: "FR" },
    { id: 8, name: "Europe", code: "EU" },
    { id: 9, name: "Italy", code: "IT" },
    { id: 10, name: "Netherlands", code: "NL" },
    { id: 11, name: "Poland", code: "PL" },
    { id: 12, name: "Spain", code: "ES" },
    { id: 13, name: "Australia", code: "AU" },
    { id: 14, name: "New Zealand", code: "NZ" },
    { id: 15, name: "India", code: "IN" },
    { id: 16, name: "South Africa", code: "ZA" },
];

const ITEMS_PER_PAGE = 16;

const CountryHome: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const filterCountry = Countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filterCountry.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCountry = filterCountry.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <section className="py-16 bg-gradient-to-b from-base-200/50 to-base-100">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="container mx-auto px-4"
            >
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <Globe2 className="w-8 h-8 text-primary" />
                        <h1 className="text-4xl font-bold text-gray-900">Explore Universities by Country</h1>
                    </div>
                    <p className="text-xl text-gray-600">Discover top universities across the globe</p>
                </motion.div>

                {/* Search Input */}
                <div className="max-w-xl mx-auto mb-12 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search your desired country..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full p-4 pl-12 bg-white border border-gray-200 rounded-2xl 
                                 shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent
                                 transition-all duration-300"
                    />
                </div>

                {/* Country Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {currentCountry.length > 0 ? (
                        currentCountry.map((country, index) => (
                            <motion.div
                                key={country.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl 
                                              transition-all duration-300 border border-gray-100">
                                    <div className="aspect-square mb-6 relative overflow-hidden rounded-xl">
                                        <Flag
                                            code={country.code}
                                            className="w-full h-full object-cover transform 
                                                     group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{country.name}</h2>
                                    <p className="text-gray-600 mb-4">250+ universities</p>
                                    <Link
                                        href={`/university/${country.name.replace(/\s/g, "-").toLowerCase()}`}
                                        className="inline-flex items-center justify-center w-full
                                                 bg-primary text-white px-6 py-3 rounded-xl
                                                 hover:bg-primary-focus transition-colors duration-300
                                                 font-medium"
                                    >
                                        Explore Universities
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-gray-600 col-span-full text-lg"
                        >
                            No countries found matching your search.
                        </motion.p>
                    )}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center mt-12 gap-4"
                    >
                        <button
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                                      transition-all duration-300 ${currentPage === 1
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }`}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft size={20} />
                            Previous
                        </button>

                        <span className="text-lg font-medium text-gray-700">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                                      transition-all duration-300 ${currentPage === totalPages
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }`}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ChevronRight size={20} />
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default CountryHome;
