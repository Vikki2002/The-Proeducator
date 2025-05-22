'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, CreditCard, BookOpen, Building2 } from 'lucide-react';

type Category = 'AFTER_12TH' | 'MASTERS' | 'MBA';

const AdmissionTimeline: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('AFTER_12TH');
    const categoryContent = {
        AFTER_12TH: {
            howToApply: 'All UG Applications are submitted through UCAS.',
            costEstimate: '£9,000 - £30,000 (₹9,00,000 - ₹30,00,000) per year',
            programs: ['Business', 'Engineering and Technology', 'Law', 'Natural Sciences', 'Medicine', 'Social Sciences'],
            universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'LSE', 'Durham University', 'University of St. Andrews'],
        },
        MASTERS: {
            howToApply: 'Applications are submitted through the respective university portals.',
            costEstimate: '£15,000 - £40,000 (₹15,00,000 - ₹40,00,000) per year',
            programs: ['MBA', 'Computer Science', 'Data Science', 'Engineering', 'Management'],
            universities: ['Harvard', 'Stanford', 'MIT', 'LSE'],
        },
        MBA: {
            howToApply: 'Applications are submitted via GMAT or GRE scores with interviews.',
            costEstimate: '£25,000 - £60,000 (₹25,00,000 - ₹60,00,000) per year',
            programs: ['Leadership', 'Entrepreneurship', 'Management'],
            universities: ['INSEAD', 'Harvard Business School', 'Wharton', 'LBS'],
        },
    };
    const currentContent = categoryContent[activeCategory];

    return (
        <div className="">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center text-neutral mb-8"
                >
                    Admission Timeline
                </motion.h1>

                {/* Category Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(['AFTER_12TH', 'MASTERS', 'MBA'] as Category[]).map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
                                }`}
                        >
                            {category.replace('_', ' ')}
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* How to Apply Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                // Remove hover handler since setHoveredCard is not defined
                                // onHoverEnd={() => setHoveredCard(null)}
                                className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <School className="w-6 h-6 text-neutral" />
                                    </div>
                                    <h2 className="text-xl font-bold ml-4 text-gray-800">How to Apply</h2>
                                </div>
                                <p className="text-gray-600">{currentContent.howToApply}</p>
                            </motion.div>

                            {/* Cost Estimate Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                // onHoverStart={() => setHoveredCard('cost')}
                                // onHoverEnd={() => setHoveredCard(null)}
                                className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <CreditCard className="w-6 h-6 text-neutral" />
                                    </div>
                                    <h2 className="text-xl font-bold ml-4 text-gray-800">Cost Estimate</h2>
                                </div>
                                <p className="text-gray-600">{currentContent.costEstimate}</p>
                            </motion.div>
                        </div>

                        {/* Programs & Universities */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Programs Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <BookOpen className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h2 className="text-xl font-bold ml-4 text-gray-800">Popular Programs</h2>
                                </div>
                                <ul className="space-y-2">
                                    {currentContent.programs.map((program) => (
                                        <motion.li
                                            key={program}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center text-gray-600 hover:text-primary transition-colors"
                                        >
                                            <span className="mr-2">•</span>
                                            {program}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Universities Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-white shadow-xl border-2 border-primary/20 hover:border-primary transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Building2 className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h2 className="text-xl font-bold ml-4 text-gray-800">Popular Universities</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {currentContent.universities.map((university) => (
                                        <motion.div
                                            key={university}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center text-gray-600 hover:text-primary transition-colors"
                                        >
                                            <span className="mr-2">•</span>
                                            {university}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AdmissionTimeline;
