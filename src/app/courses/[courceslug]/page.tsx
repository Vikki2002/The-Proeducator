"use client";
import { useEffect, useState } from "react";
import { BookOpen, Search, Clock, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/shared/footer";
import { usePathname } from "next/navigation";
import axios from "axios";

type Course = {
    course_name: string,
    gmat: string,
    gre: string,
    toefl: string,
    ielts: string,
    pte: string,
    university_slug: string,
    university_name: string,
    country_name: string,
    state_name: string
}

const ITEMS_PER_PAGE = 24;

const CoursesPage: React.FC = () => {
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [coursesData, setCoursesData] = useState<Course[]>([]);
    const query = pathname.split("/").filter(Boolean).pop();

    useEffect(() => {
        fetchCoursesByUniversityName()
    }, [query])

    const fetchCoursesByUniversityName = async () => {
        try {
            console.log("query", query)
            const coursesResponse = await axios.get(`/api/courses`, {
                params: { query }
            })
            console.log(coursesResponse)
            if (coursesResponse.data.success) {
                setCoursesData(coursesResponse.data.coursesByUniversities)
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    const filteredCourses = coursesData.filter((course) =>
        course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Calculate total pages correctly
    const totalPages = Math.ceil((filteredCourses.length || 0) / ITEMS_PER_PAGE);
    // Pagination logic
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCourses = filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gradient-to-b from-base-200/50 to-base-100 py-16"
            >
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover world-class programs designed to launch your career in technology
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-12 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for courses..."
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

                    {/* Course Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {currentCourses.length > 0 ? (
                            currentCourses.map((course, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl
                                                  transition-all duration-300 border border-gray-100">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-primary/10 rounded-xl">
                                                <BookOpen className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                {course.course_name}
                                            </h3>
                                        </div>

                                        {/* <p className="text-gray-600 mb-6">{course.description}</p> */}

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <span>3-4 Years</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Award className="w-4 h-4 text-primary" />
                                                <span>Accredited</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Users className="w-4 h-4 text-primary" />
                                                <span>24/7 Support</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button className="flex-1 bg-primary text-white px-4 py-2 rounded-xl
                                                           hover:bg-primary-focus transition-colors">
                                                View Details
                                            </button>
                                            <button className="px-4 py-2 rounded-xl border border-gray-200
                                                           hover:bg-gray-50 transition-colors">
                                                Save
                                            </button>
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
                                No courses found matching your search.
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Pagination */}
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
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default CoursesPage;
