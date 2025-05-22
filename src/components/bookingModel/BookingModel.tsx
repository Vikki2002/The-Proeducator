"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { format, addMonths, subMonths } from 'date-fns';
import PhoneInput from "react-phone-input-2";


interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [step, setStep] = useState(1);

    const timeSlots = [
        "11:30 am",
        "11:45 am",
        "12:00 pm",
        "12:15 pm",
        "12:30 pm",
        "12:45 pm",
        "1:00 pm"
    ];

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold">Talk to an expert</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-base font-medium text-gray-700">Meeting duration</h3>
                                        <div className="bg-slate-50 p-3 text-center rounded-lg mt-2 text-gray-600">
                                            20 mins
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-medium text-gray-700">What time works best?</h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Showing times for {format(selectedDate, 'MMMM d, yyyy')}
                                        </p>

                                        <div className="mt-4 flex gap-6">
                                            <div className="w-1/2 bg-slate-700 text-white p-4 rounded-lg">
                                                <div className="text-center space-y-3">
                                                    <div className="flex items-center justify-between px-2">
                                                        <button
                                                            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                                                            className="hover:bg-slate-600 p-1 rounded"
                                                        >
                                                            ‹
                                                        </button>
                                                        <span className="text-sm font-medium">
                                                            {format(currentMonth, 'MMMM yyyy')}
                                                        </span>
                                                        <button
                                                            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                                                            className="hover:bg-slate-600 p-1 rounded"
                                                        >
                                                            ›
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-7 text-center text-xs mt-4">
                                                    {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(day => (
                                                        <div key={day} className="p-1">{day[0].toUpperCase()}</div>
                                                    ))}
                                                </div>

                                                <div className="grid grid-cols-7 gap-1 text-center mt-1">
                                                    {[...Array(getFirstDayOfMonth(currentMonth))].map((_, i) => (
                                                        <div key={`empty-${i}`} className="p-2" />
                                                    ))}
                                                    {[...Array(getDaysInMonth(currentMonth))].map((_, i) => (
                                                        <button
                                                            key={i + 1}
                                                            className={`p-2 text-sm rounded-full hover:bg-slate-600 transition-colors
                                                                ${selectedDate.getDate() === i + 1 ? 'bg-white text-slate-800' : ''}
                                                            `}
                                                            onClick={() => {
                                                                const newDate = new Date(currentMonth);
                                                                newDate.setDate(i + 1);
                                                                setSelectedDate(newDate);
                                                            }}
                                                        >
                                                            {i + 1}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-1/2">
                                                <div className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    UTC +05:30 New Delhi, Mumbai, Calcutta
                                                </div>
                                                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                                                    {timeSlots.map((time) => (
                                                        <button
                                                            key={time}
                                                            className={`w-full p-3 text-sm text-center rounded-lg border transition-colors
                                                                ${selectedTime === time
                                                                    ? 'border-primary bg-primary/5 text-primary'
                                                                    : 'border-gray-200 hover:border-primary text-gray-700'}
                                                            `}
                                                            onClick={() => setSelectedTime(time)}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => selectedTime && setStep(2)}
                                        disabled={!selectedTime}
                                        className="w-full btn btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800">Your information</h3>
                                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                            <span>Sunday, {format(selectedDate, 'MMMM d, yyyy')} {selectedTime}</span>
                                            <button className="text-blue-500 hover:text-blue-600">Edit</button>
                                        </div>
                                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z" />
                                            </svg>
                                            Zoom
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                First name <span className="text-red-500">*</span>
                                            </label>
                                            <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Last name <span className="text-red-500">*</span>
                                            </label>
                                            <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Your email address <span className="text-red-500">*</span>
                                        </label>
                                        <input type="email" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                                    </div>

                                    <div>
                                        <PhoneInput
                                            country={"us"}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Study Destination
                                        </label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                                            <option value="">Select Destination</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Australia">Australia</option>
                                            {/* Add more destinations as needed */}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Study Level
                                        </label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                                            <option value="">Select Level</option>
                                            <option value="Undergraduate">Undergraduate</option>
                                            <option value="Postgraduate">Postgraduate</option>
                                            <option value="PhD">PhD</option>
                                            {/* Add more levels as needed */}
                                        </select>
                                    </div>

                                    <div className="flex gap-4 pt-2">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                        >
                                            <span className="mr-2">←</span> Back
                                        </button>
                                        <button className="flex-1 bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200">
                                            Request
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;