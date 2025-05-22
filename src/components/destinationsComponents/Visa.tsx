import React, { useState} from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, Check, Calendar, BookOpen, DollarSign, Award, User } from 'lucide-react';

const VisaFlowDiagram = () => {
    // Animation variants for nodes
    const nodeVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
        active: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)", borderColor: "#3b82f6" }
    };

    // Define the steps in the visa flow process
    const steps = React.useMemo(() => [
        { id: 1, title: "IELTS OR MOI", icon: <BookOpen size={20} className='text-neutral'/> },
        { id: 2, title: "Application in University / College", icon: <FileText size={20} className='text-neutral'/> },
        { id: 3, title: "Offer Letter Received (2-4 Weeks)", icon: <Award size={20} className='text-neutral'/> },
        { id: 4, title: "Pay Tuition Fees", icon: <CreditCard size={20} className='text-neutral'/> },
        { id: 5, title: "CAS Letter Received", icon: <FileText size={20} className='text-neutral'/> },
        { id: 6, title: "Arrange Finance (Fee + Living Expense)", icon: <DollarSign size={20} className='text-neutral'/> },
        { id: 7, title: "Application For VISA Online And Pay Fee Online", icon: <FileText size={20} className='text-neutral'/> },
        { id: 8, title: "Book Appointment For Biometric at VFS and DOC Submit", icon: <Calendar size={20} className='text-neutral'/> },
        { id: 9, title: "Complete VISA Application Form", icon: <FileText size={20} className='text-neutral'/> },
        { id: 10, title: "Academic Documents", icon: <BookOpen size={20} className='text-neutral'/> },
        { id: 11, title: "Financial Documents", icon: <DollarSign size={20} className='text-neutral'/> },
        { id: 12, title: "Language Certificate", icon: <Award size={20} className='text-neutral'/> },
        { id: 13, title: "Interview at VFS", icon: <User size={20} className='text-neutral'/> },
        { id: 14, title: "VISA Approval (Passport Stamped)", icon: <Check size={20} className='text-neutral'/> }
    ], [])
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="max-w-6xl mx-auto w-full p-2.5">
                {/* Header */}
                <header className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-t-2xl shadow-lg">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold text-white">Student Visa Process</h1>
                    </div>
                </header>

                {/* Main Content */}
                <motion.div
                    className="bg-white p-8 rounded-b-2xl shadow-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Timeline Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step) => (
                            <motion.div
                                key={step.id}
                                className={`p-4 rounded-xl transition-all duration-300 ${hoveredStep === step.id
                                        ? 'bg-amber-50 border-2 border-amber-500 shadow-lg'
                                        : 'bg-gray-50 border-2 border-gray-200 hover:border-amber-300'
                                    }`}
                                initial="initial"
                                whileHover="hover"
                                animate={hoveredStep === step.id ? "active" : "initial"}
                                variants={nodeVariants}
                                onMouseEnter={() => setHoveredStep(step.id)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-lg ${hoveredStep === step.id ? 'bg-amber-500' : 'bg-gray-200'
                                        }`}>
                                        <div className={`${hoveredStep === step.id ? 'text-white' : 'text-gray-600'
                                            }`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500">Step {step.id}</span>
                                        <h3 className="font-semibold text-gray-800 mt-1">{step.title}</h3>

                                        {/* Content on hover */}
                                        {hoveredStep === step.id && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                transition={{ duration: 0.2 }}
                                                className="text-sm text-gray-600 mt-2"
                                            >
                                                {step.id === 1 && "Take the IELTS exam or provide proof of Medium of Instruction (MOI) to demonstrate English language proficiency."}
                                                {step.id === 2 && "Submit your application to your chosen universities or colleges with all required documents."}
                                                {step.id === 3 && "Wait for universities to review your application and issue an offer letter (usually takes 2-4 weeks)."}
                                                {step.id === 4 && "Pay the initial tuition fee deposit as specified in your offer letter to secure your place."}
                                                {step.id === 5 && "Receive your Confirmation of Acceptance for Studies (CAS) letter from the institution."}
                                                {step.id === 6 && "Organize finances to cover both tuition fees and living expenses for the duration of your study."}
                                                {step.id === 7 && "Complete the online visa application form and pay the application fee and immigration health surcharge."}
                                                {step.id === 8 && "Schedule and attend an appointment at a Visa Application Centre for biometric data collection."}
                                                {step.id === 9 && "Fill out the complete visa application form with all personal and course details."}
                                                {step.id === 10 && "Prepare all academic documents including transcripts, certificates and degrees."}
                                                {step.id === 11 && "Gather financial proof showing you can support yourself during studies."}
                                                {step.id === 12 && "Include language proficiency certificates (IELTS/TOEFL) or MOI letter."}
                                                {step.id === 13 && "Attend the interview at the Visa Application Centre if requested."}
                                                {step.id === 14 && "Receive your passport with the visa stamp upon approval."}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Remove the separate Information Panel since content is now shown on hover */}
                </motion.div>
            </div>
        </div>
    );
};

export default VisaFlowDiagram;