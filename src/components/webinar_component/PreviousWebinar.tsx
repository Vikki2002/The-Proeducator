import React from 'react';
import SliderCard from '../shared/SliderCard';

export default function PreviousWebinar() {
    return (
        <div className="min-h-screen p-6 bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="container mx-auto">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Previous Webinars 🎥
                </h2>

                {/* Webinar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Product Launch Webinar", date: "May 15, 2023 • 2:00 PM", presenter: "Sarah Johnson", status: "125 Registrants" },
                        { title: "Q2 Marketing Strategy", date: "May 18, 2023 • 11:00 AM", presenter: "Michael Chen", status: "87 Registrants" },
                        { title: "Customer Success Stories", date: "May 22, 2023 • 3:30 PM", presenter: "David Wilson", status: "103 Registrants" },
                        { title: "Industry Trends 2023", date: "May 25, 2023 • 1:00 PM", presenter: "Emily Rodriguez", status: "94 Registrants" },
                    ].map((webinar, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{webinar.title}</h3>
                            <p className="text-gray-600 mt-1">{webinar.date}</p>
                            <p className="text-gray-700 font-medium mt-2">🎤 Presenter: {webinar.presenter}</p>
                            <p className="text-gray-500 mt-2">👥 {webinar.status}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative w-full max-w-6xl mx-auto my-10 px-4">
                <h1 className="text-3xl font-bold text-center text-primary">Success webinar</h1>
                <h3 className="text-lg mt-2 text-center">
                    From <span className="text-info text-3xl font-semibold">The Pro Educator</span> to Achievers
                </h3>
                <SliderCard />
            </div>
        </div>
    );
}
