"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/shared/footer";
import { University, Search, GraduationCap } from "lucide-react";
import Link from "next/link";
import Loader from "@/components/shared/Loader/Loader";
import axios from "axios";
import { usePathname } from "next/navigation";

type University = {
    country: string;
    name: string;
    city: string;
};

// Items per page constant
const ITEMS_PER_PAGE = 24;

const UniversityList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">("");
    const pathname = usePathname();
    const query = pathname.split("/").filter(Boolean).pop();
    const [universityData, setUniversityData] = useState<University[]>([]);

    useEffect(() => {
        fetchUniversitiesByCountry();
    }, [query]); // Dependency array to avoid infinite loops

    const fetchUniversitiesByCountry = async () => {
        console.log("Fetching universities for country:", query);
        setLoading(true);
        try {
            const universityResponse = await axios.get(`/api/universities`, {
                params: { query }
            });
            console.log("API Response:", universityResponse);
            if (universityResponse.data.success) {
                setUniversityData(universityResponse.data.data);
                setMessage(universityResponse.data.message);
                setMessageType("success");
            }
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "An error occurred");
            setMessageType("error");
        }
        setLoading(false);

        // Clear messages after 3 seconds
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 3000);
    };

    // Filter universities based on search query
    const filteredUniversities = universityData.filter((uni) =>
        uni.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate total pages correctly
    const totalPages = Math.ceil((filteredUniversities.length || 0) / ITEMS_PER_PAGE);

    // Pagination logic
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUniversities = filteredUniversities.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gradient-to-b from-base-200/50 to-base-100 py-16"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center justify-center gap-3 mb-4">
                            <GraduationCap className="w-10 h-10 text-primary" />
                            <h1 className="text-4xl font-bold">Explore Top Universities</h1>
                        </div>
                        <p className="text-xl text-gray-600">Discover your perfect educational journey</p>
                    </motion.div>

                    {/* Search Input */}
                    <div className="max-w-2xl mx-auto mb-12 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for your dream university..."
                            className="w-full p-4 pl-12 bg-white border border-gray-200 rounded-2xl
                                       shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent
                                       transition-all duration-300"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>

                    {loading ? (
                        <div className="flex justify-center mt-[2rem]">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {/* University Cards */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {paginatedUniversities.length > 0 ? (
                                    paginatedUniversities.map((uni, index) => (
                                        // Update the card design
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            className="group"
                                        >
                                            <div className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-xl
                                                  transition-all duration-300 border border-base-200 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 bg-primary/10 w-24 h-24 rounded-bl-full -z-0" />

                                                <div className="relative z-10">
                                                    <div className="flex items-start gap-4 mb-6">
                                                        <div className="p-3 bg-primary/10 rounded-xl">
                                                            <University className="w-8 h-8 text-primary" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h2 className="text-lg font-semibold line-clamp-2">
                                                                {uni.name}
                                                            </h2>
                                                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                                                <span className="px-3 py-1 bg-base-200 rounded-full">
                                                                    {uni.city}
                                                                </span>
                                                                <span className="px-3 py-1 bg-base-200 rounded-full">
                                                                    {uni.country}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        href={`/courses/${uni.name.replace(/\s/g, "-").toLowerCase()}`}
                                                        className="mt-4 inline-flex items-center justify-center w-full
                                                         bg-primary text-primary-content px-6 py-3 rounded-xl
                                                         font-medium hover:bg-primary-focus transition-colors
                                                         shadow-md hover:shadow-lg"
                                                    >
                                                        Explore Programs
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center text-gray-600 col-span-full text-lg"
                                    >
                                        No universities found.
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Pagination Section */}
                            {totalPages > 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center mt-12 gap-4"
                                >
                                    <div className="flex gap-4">
                                        <button
                                            className="btn btn-primary"
                                            disabled={currentPage === 1}
                                            onClick={() => {
                                                setCurrentPage(prev => Math.max(prev - 1, 1));
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }}
                                        >
                                            Previous
                                        </button>
                                        <button
                                            className="btn btn-primary"
                                            disabled={currentPage === totalPages || totalPages === 0}
                                            onClick={() => {
                                                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </>
                    )}
                </div>

                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="toast toast-end"
                    >
                        <div className={`alert ${messageType === "success" ? "alert-success" : "alert-error"}`}>
                            <span>{message}</span>
                        </div>
                    </motion.div>
                )}
            </motion.div>
            <Footer />
        </>
    );
};

export default UniversityList;
