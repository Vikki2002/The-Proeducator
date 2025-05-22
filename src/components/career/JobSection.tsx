"use client";

import React, { useState, JSX } from "react";
import { FaCode, FaPenNib, FaBriefcase, FaBullhorn, FaPaintBrush, FaDatabase, FaUserTie } from "react-icons/fa";

const JobSection = () => {
    const [category, setCategory] = useState("All Categories");
    const [location, setLocation] = useState("All Locations");
    const [jobType, setJobType] = useState("All Job Types");
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 16;

    const jobs: Job[] = [
        { id: 1, category: "Content", title: "Content Writer", level: "Junior", location: "Noida", type: "Full Time" },
        { id: 2, category: "Engineering", title: "Software Engineer", level: "Senior", location: "Bangalore", type: "Full Time" },
        { id: 3, category: "Marketing", title: "Digital Marketer", level: "Mid", location: "Mumbai", type: "Part Time" },
        { id: 4, category: "Design", title: "UI/UX Designer", level: "Senior", location: "Pune", type: "Full Time" },
        { id: 5, category: "Data Science", title: "Data Analyst", level: "Junior", location: "Delhi", type: "Internship" },
        { id: 6, category: "HR", title: "HR Manager", level: "Mid", location: "Hyderabad", type: "Full Time" },
        { id: 7, category: "HR", title: "HR Manager", level: "Mid", location: "Hyderabad", type: "Full Time" },
        { id: 8, category: "HR", title: "HR Manager", level: "Mid", location: "Hyderabad", type: "Full Time" },
        { id: 9, category: "HR", title: "HR Manager", level: "Mid", location: "Hyderabad", type: "Full Time" },
        { id: 10, category: "HR", title: "HR Manager", level: "Mid", location: "Hyderabad", type: "Full Time" },
        { id: 11, category: "HR", title: "HR Manager", level: "Mid", location: "Hyderabad", type: "Full Time" }
    ];

    interface Job {
        id: number;
        category: string;
        title: string;
        level: string;
        location: string;
        type: string;
    }

    const getJobIcon = (category: string): JSX.Element => {
        if (category.toLowerCase().includes("content")) return <FaPenNib className="text-blue-500 text-2xl" />;
        if (category.toLowerCase().includes("engineering")) return <FaCode className="text-green-500 text-2xl" />;
        if (category.toLowerCase().includes("marketing")) return <FaBullhorn className="text-red-500 text-2xl" />;
        if (category.toLowerCase().includes("design")) return <FaPaintBrush className="text-purple-500 text-2xl" />;
        if (category.toLowerCase().includes("data")) return <FaDatabase className="text-yellow-500 text-2xl" />;
        if (category.toLowerCase().includes("hr")) return <FaUserTie className="text-gray-500 text-2xl" />;
        return <FaBriefcase className="text-gray-500 text-2xl" />;
    };

    const filteredJobs = jobs.filter(
        (job) =>
            (category === "All Categories" || job.category === category) &&
            (location === "All Locations" || job.location === location) &&
            (jobType === "All Job Types" || job.type === jobType)
    );

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const currentJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto lg:mt-[2rem] md:mt[3.5rem] mt-[4rem]">
                <h1 className="text-3xl font-bold text-center mb-8">Join Our Team</h1>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <select className="border border-gray-300 p-2 rounded" value={category} onChange={(e) => { setCategory(e.target.value); setCurrentPage(1); }}>
                        <option>All Categories</option>
                        <option>Content</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Design</option>
                        <option>Data Science</option>
                        <option>HR</option>
                    </select>
                    <select className="border border-gray-300 p-2 rounded" value={location} onChange={(e) => { setLocation(e.target.value); setCurrentPage(1); }}>
                        <option>All Locations</option>
                        <option>Noida</option>
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                    </select>
                    <select className="border border-gray-300 p-2 rounded" value={jobType} onChange={(e) => { setJobType(e.target.value); setCurrentPage(1); }}>
                        <option>All Job Types</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentJobs.map((job) => (
                        <div key={job.id} className="bg-white p-4 rounded-lg shadow">
                            <div className="flex items-center mb-4">
                                <div className="mr-4">{getJobIcon(job.category)}</div>
                                <h2 className="text-xl font-bold">{job.category}</h2>
                            </div>
                            <div className="bg-gray-100 p-4 rounded mb-4 flex flex-col">
                                <span className="text-neutral font-bold">{job.title}</span>
                                <span>{job.level}</span>
                                <span>{job.location}</span>
                                <span>{job.type}</span>
                                <button onClick={() => { setSelectedJob(job); setShowModal(true); }} className="bg-primary text-secondary-content px-4 py-2 rounded mt-2">Apply</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-4 py-2 bg-gray-300 text-black rounded mr-2">Previous</button>
                    <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-4 py-2 bg-gray-300 text-black rounded ml-2">Next</button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Apply for {selectedJob?.title}</h2>
                        <form className="flex flex-col justify-center items-center gap-3 px-2">
                            <label className="floating-label w-full">
                                <span>Full Name</span>
                                <input className="input validator focus:outline-none" type="text" required placeholder="Type your name" />
                                <div className="validator-hint">Enter your name</div>
                            </label>
                            <div className="w-full">
                                <label className="floating-label">
                                    <span>Email</span>
                                    <input className="input validator focus:outline-none" type="email" required placeholder="mail@site.com" />
                                    <div className="validator-hint">Enter valid email address</div>
                                </label>
                            </div>
                            <input type="file" className="file-input w-full" />
                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobSection;
