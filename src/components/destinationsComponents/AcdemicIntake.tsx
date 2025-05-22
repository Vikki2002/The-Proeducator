'use client'
import { motion } from 'framer-motion';
import { BookOpen, Clock, Wallet, Building } from 'lucide-react';

const AcademicIntake = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-base-200 py-16 px-4"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="text-5xl font-bold text-center text-primary mb-12"
                >
                    Academic Intake
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Intake Schedule Card */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen className="text-primary w-8 h-8" />
                                <h2 className="text-2xl font-bold">Intake Schedule</h2>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="table table-zebra w-full">
                                    <thead>
                                        <tr>
                                            <th>Program</th>
                                            <th>Intake</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Undergraduate & Postgraduate</td>
                                            <td>Autumn</td>
                                            <td>September - October</td>
                                        </tr>
                                        <tr>
                                            <td>Undergraduate & Postgraduate</td>
                                            <td>Spring</td>
                                            <td>January - February</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Deadline Card */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="text-error w-8 h-8" />
                                <h2 className="text-2xl font-bold">Application Deadline</h2>
                            </div>
                            <div className="alert alert-error shadow-lg">
                                <div className='text-base-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>Start preparing 8-9 months before program commencement</span>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Example: For Sep&apos;23 intake, start application process in Dec&apos;22 or Jan&apos;23
                            </p>
                        </div>
                    </div>

                    {/* Fee Structure Card */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-6">
                                <Wallet className="text-success w-8 h-8" />
                                <h2 className="text-2xl font-bold">Fee Structure</h2>
                            </div>
                            <div className="stats stats-vertical lg:stats-horizontal shadow">
                                <div className="stat">
                                    <div className="stat-title">Tuition Fees (Annual)</div>
                                    <div className="stat-value">£10,000 - £26,000</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Living Costs (Monthly)</div>
                                    <div className="stat-value">£800 - £1,300</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Living Cost Card */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-6">
                                <Building className="text-error w-8 h-8" />
                                <h2 className="text-2xl font-bold">Living Cost</h2>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="alert alert-success">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Inner London: £1334 per month (up to 9 months)</span>
                                    </div>
                                </div>
                                <div className="alert alert-success">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Outside London: £1023 per month (up to 9 months)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AcademicIntake;