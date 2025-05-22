"use client"
import { usePathname } from "next/navigation";
import React from "react";

const CostOfLiving: React.FC = () => {
    const pathName = usePathname();
    const lastSegment = pathName.split("/").filter(Boolean).pop();
    
    return (
        <div className="w-full max-w-6xl mx-auto py-12 mt-11 px-4">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Cost of Living Gauge */}
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-3 text-center">Cost Of Living in {lastSegment}</h2>
                    <div className="relative w-40 h-20">
                        <svg viewBox="0 0 100 50" className="w-full">
                            <defs>
                                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4ade80" />
                                    <stop offset="50%" stopColor="#facc15" />
                                    <stop offset="100%" stopColor="#f87171" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M10,50 A40,40 0 0,1 90,50"
                                fill="none"
                                stroke="url(#gaugeGradient)"
                                strokeWidth="8"
                            />
                            <line
                                x1="50"
                                y1="50"
                                x2="65"
                                y2="20"
                                stroke="black"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div className="flex justify-between w-40 text-sm mt-2">
                        <span className="text-green-500">Low</span>
                        <span className="text-red-500">High</span>
                    </div>
                </div>

                {/* Monthly Expenses List */}
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-4 text-center md:text-left">Monthly Living Expenses in {lastSegment}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {expenses.map(({ icon, title, range }) => (
                            <div 
                                key={title} 
                                className="w-[230px] flex items-center space-x-3 bg-base-100 border border-info p-3 rounded-lg transition-transform duration-300 hover:scale-105"
                            >
                                <span className="text-2xl">{icon}</span>
                                <div>
                                    <h3 className="text-secondary font-semibold">{title}</h3>
                                    <p className="text-secondary-content text-sm">{range}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const expenses = [
    { icon: "🏠", title: "Rent", range: "€ 888 - € 1472" },
    { icon: "🍽️", title: "Food", range: "€ 610 - € 850" },
    { icon: "🚌", title: "Transport", range: "€ 82 - € 334" },
    { icon: "🎲", title: "Miscellaneous", range: "€ 102 - € 219" },
];

export default CostOfLiving;
