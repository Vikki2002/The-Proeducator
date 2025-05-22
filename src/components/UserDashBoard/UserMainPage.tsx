"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { Bell, Calendar, GraduationCap, BookOpen, Award, ArrowRight } from 'lucide-react';
import Navbar from '../navbar/navbar';
import Image from 'next/image';

const UserMainPage = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="w-full max-w-7xl mx-auto mt-[5rem] space-y-8 p-4">
                {/* Welcome Section */}
                <div className="flex items-center justify-between">
                    <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-4'>
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <Image 
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="User profile"
                                    width={128}
                                    height={128}
                                />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
                            <p className="text-gray-500">Track your study abroad journey and stay updated with your applications</p>
                        </div>
                    </div>

                    {/* Notification Button with Hover Modal */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowNotifications(true)}
                        onMouseLeave={() => setShowNotifications(false)}
                    >
                        <button className="btn btn-outline btn-circle">
                            <Bell className="h-5 w-5" />
                        </button>

                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-10">
                                <h3 className="font-semibold text-lg">Notifications</h3>
                                <ul className="mt-2 space-y-4">
                                    <li className="text-sm text-gray-700">🔔 Your application status has been updated.</li>
                                    <li className="text-sm text-gray-700">🎉 Congratulations! You got accepted at Stanford.</li>
                                    <li className="text-sm text-gray-700">⚠️ Upcoming deadline: Submit documents in 2 days.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: <GraduationCap className="h-8 w-8" />, title: "Browse Universities", desc: "Explore top universities worldwide" },
                        { icon: <BookOpen className="h-8 w-8" />, title: "Find Courses", desc: "Search courses by your interests" },
                        { icon: <Award className="h-8 w-8" />, title: "Scholarships", desc: "Discover funding opportunities" },
                        { icon: <Calendar className="h-8 w-8" />, title: "Track Deadlines", desc: "Stay on top of important dates" },
                    ].map((action, index) => (
                        <div key={index} className="p-4 bg-base-200 hover:bg-gray-300 transition rounded-lg cursor-pointer text-center border-[1px] border-inf">
                            {action.icon}
                            <h3 className="font-semibold mt-2">{action.title}</h3>
                            <p className="text-sm text-gray-500">{action.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Application Status */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="card bg-base-200 p-6 shadow">
                        <h2 className="text-xl font-semibold mb-4">Application Status</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">University of Cambridge</p>
                                    <p className="text-sm text-gray-500">MSc Computer Science</p>
                                </div>
                                <span className="badge badge-warning">In Review</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Stanford University</p>
                                    <p className="text-sm text-gray-500">MSc Data Science</p>
                                </div>
                                <span className="badge badge-success">Accepted</span>
                            </div>
                        </div>
                        <button className="btn btn-ghost w-full mt-4">
                            View All Applications <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>

                    <div className="card bg-base-200 p-6 shadow">
                        <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Document Submission</p>
                                    <p className="text-sm text-gray-500">University of Cambridge</p>
                                </div>
                                <p className="text-sm font-medium text-red-600">2 days left</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Application Fee</p>
                                    <p className="text-sm text-gray-500">Stanford University</p>
                                </div>
                                <p className="text-sm font-medium">5 days left</p>
                            </div>
                        </div>
                        <button className="btn btn-ghost w-full mt-4">
                            View All Deadlines <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserMainPage
