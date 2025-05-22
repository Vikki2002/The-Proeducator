import React from 'react';
import { CalendarDays, CheckCircle2, Clock } from 'lucide-react';
import SliderCard from '../shared/SliderCard';

export default function UpcomingWebinar() {
    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <div className="container mx-auto space-y-12">
                {/* Webinar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Product Launch Webinar", date: "May 15, 2023 • 2:00 PM", presenter: "Sarah Johnson", status: "125 Registrants" },
                        { title: "Q2 Marketing Strategy", date: "May 18, 2023 • 11:00 AM", presenter: "Michael Chen", status: "87 Registrants" },
                        { title: "Customer Success Stories", date: "May 22, 2023 • 3:30 PM", presenter: "David Wilson", status: "103 Registrants" },
                        { title: "Industry Trends 2023", date: "May 25, 2023 • 1:00 PM", presenter: "Emily Rodriguez", status: "94 Registrants" },
                    ].map((webinar, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition">
                            <h2 className="text-xl font-semibold text-gray-800">{webinar.title}</h2>
                            <p className="text-gray-600 flex items-center gap-2 mt-2"><CalendarDays size={16} /> {webinar.date}</p>
                            <p className="text-gray-700 font-medium mt-2">Presenter: {webinar.presenter}</p>
                            <p className="text-gray-500 mt-1">{webinar.status}</p>
                            <div className="mt-4">
                                <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-md py-2">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative w-full max-w-6xl mx-auto my-10 px-4">
                    <h1 className="text-3xl font-bold text-center text-primary">Success webinar</h1>
                    <h3 className="text-lg mt-2 text-center">
                        From <span className="text-info text-3xl font-semibold">The Pro Educator</span> to Achievers
                    </h3>
                    <SliderCard />
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: CalendarDays, title: "Total Webinars", count: "24 webinars created" },
                        { icon: CheckCircle2, title: "Completed", count: "16 webinars finished" },
                        { icon: CalendarDays, title: "Upcoming", count: "8 webinars scheduled" },
                        { icon: Clock, title: "Average Duration", count: "52 minutes per webinar" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center border border-gray-200">
                            <stat.icon size={28} className='text-blue-600' />
                            <h3 className="text-lg font-semibold mt-2">{stat.title}</h3>
                            <p className="text-gray-600 mt-1">{stat.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
