"use client";
import Image from "next/image";
import OurStrength from "./shared/OurStrength";
import FAQ from "./shared/faq";
import Feature from "./shared/feature";
import CommonBlog from "./shared/commonBlog";
import { motion } from "framer-motion";
import UniversityPartners from "./shared/UniversityPatners";
import Offerings from "./shared/offering";
import StudyDestinations from "./shared/StudyDestination";
import { useState } from "react";
import BookingModal from "./bookingModel/BookingModel";
import  SuccessStories from "./success-stories/Stories";






const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('students');


    return (
        <>
            <div className="w-full overflow-x-hidden bg-gradient-to-br from-base-100 to-base-200">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full px-4 sm:px-6 md:px-8 lg:px-9"
                >
                    <div
                        className="relative card lg:card-side px-6 sm:px-12 md:px-24 py-24 sm:py-32 lg:p-36 w-full min-h-[600px] overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url('/hero-section.jpg')` }}
                    >
                        {/* Shapes and Animations */}
                        <motion.div
                            className="hidden sm:block absolute top-24 right-80"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Image src="/shape-01.png" width={60} height={60} alt="shape-01" />
                        </motion.div>
                        <div className="hidden sm:block absolute top-44 right-12">
                            <Image src="/shape-02.png" width={60} height={60} alt="shape-02" />
                        </div>
                        <div className="hidden sm:block absolute top-[18rem] right-80">
                            <Image src="/pattern-shape.png" width={130} height={40} alt="Pattern shape" />
                        </div>
                        <div className="hidden sm:flex absolute top-[20rem] right-80 w-48 h-48 bg-gray-300 rounded-[0.5rem] shadow-2xl z-20 flex-col justify-center items-center gap-3.5">
                            <Image src="/shape-04.png" width={90} height={90} alt="shape 04" className="shadow-2xs z-30" />
                            <div className="flex flex-col gap-0.5 text-[20px] font-bold">
                                <span className="text-wrap">Top Rated</span>
                                <span>Counsellor</span>
                            </div>
                        </div>
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="hidden sm:flex absolute top-[20rem] right-12 w-56 h-24 px-3.5 py-3.5 bg-white rounded-[0.5rem] shadow-2xl z-20"
                        >
                            <span>
                                More than <span className="text-info">125+ Universities</span> in United Kingdom
                            </span>
                        </motion.div>

                        {/* Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/30 to-transparent" />

                        {/* Main Content */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="card-body relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start px-4 lg:max-w-[650px]"
                        >
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-info font-semibold text-lg sm:text-xl uppercase tracking-wider"
                            >
                                Your Study Abroad Expert
                            </motion.span>
                            <h1 className="relative text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-3 leading-tight">
                                Discover {" "}
                                <motion.span
                                    className="relative inline-block text-info"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="relative z-10">1k+</span>
                                    <motion.svg
                                        className="absolute -bottom-1 left-0 w-full"
                                        height="15"
                                        viewBox="0 0 100 15"
                                    >
                                        <motion.path
                                            d="M0,10 C25,15 75,5 100,10"
                                            fill="none"
                                            stroke="#f97316"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{
                                                pathLength: 1,
                                                opacity: [0, 1, 1, 0],
                                                transition: {
                                                    duration: 2,
                                                    ease: [0.64264, -0.095, 0.42142, 0.019],
                                                    repeat: Infinity,
                                                },
                                            }}
                                        />
                                    </motion.svg>
                                </motion.span>
                                <br className="hidden lg:block" />
                                <span className="text-2xl sm:text-3xl lg:text-5xl">Universities Around the World</span>
                            </h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-600 mt-2 text-lg sm:text-xl max-w-[500px] leading-relaxed"
                            >
                                British Council certified study Abroad Agent. We are obsessed with your success.
                            </motion.p>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg sm:text-xl font-serif italic text-gray-600 mt-2"
                            >
                                &quot;Education is the most powerful weapon which you can use to change the world&quot;
                            </motion.p>
                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="btn btn-primary btn-lg mt-10 gap-3 text-lg px-8"
                            >
                                Talk To An Expert
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>


                {/*discover section  */}

                <div className="w-full max-w-7xl mx-auto flex flex-wrap gap-6 px-4 md:px-10 lg:px-24 py-12">
                    {/* Box 1 */}
                    <div className="flex-1 min-w-[280px] bg-info p-6 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="text-xl font-bold text-white">Discover yourself</h3>
                            <p className="text-center text-white text-2xl md:text-3xl font-bold leading-snug">
                                Study abroad dreams realized through expert guidance
                            </p>
                            <button className="btn btn-primary px-6 py-2 text-white hover:bg-base-300">
                                Get Your Counsellor
                            </button>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="flex-1 min-w-[280px] bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-3xl">🎓</div>
                            <h3 className="text-xl font-bold text-gray-900">Counsellors</h3>
                            <p className="text-center text-gray-600 text-base">
                                We are British Council Certified Study Abroad Experts.
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="flex-1 min-w-[280px] bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-3xl">💬</div>
                            <h3 className="text-xl font-bold text-gray-900">Free Consultation</h3>
                            <p className="text-center text-gray-600 text-base">
                                You may avail free consultation to get admission in your dream university.
                            </p>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="flex-1 min-w-[280px] bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-3xl">📞</div>
                            <h3 className="text-xl font-bold text-gray-900">Chat With Us</h3>
                            <p className="text-center text-gray-600 text-base">
                                Chat with us to receive free expert advice from our friendly advisors.
                            </p>
                        </div>
                    </div>
                </div>


                {/* council certificate */}

                <div className="w-full px-4 md:px-10 lg:px-24 py-[5rem]">
                    {/* Title - one line, centered */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-secondary">
                            Welcome to The ProEducator
                        </h2>
                    </div>

                    {/* Row: Description + Image */}
                    <div className="flex flex-col lg:flex-row items-stretch gap-12">
                        {/* Left: Description */}
                        <div className="flex flex-col justify-center gap-4 lg:w-1/2 pl-8 md:pl-16 lg:pl-24">
                            <p className="text-justify text-[18px] md:text-[20px] leading-relaxed">
                                We believe in You! We hope that with right guidance you can do wonders in your life.
                                We help you make the right choices that resonates with your aspirations, dreams and potential.
                                Once that happens, your chances of realising your potential increases exponentially.
                                It’s you who controls your destiny. You can achieve whatever you wish in your life.
                            </p>
                            <span className="font-bold text-secondary-content text-2xl md:text-3xl">Mr. Prashant Kumar</span>
                            <span className="text-gray-400">Founder & Director</span>
                        </div>

                        {/* Right: Image */}
                        <div className="flex items-center justify-center lg:w-1/2">
                            <Image
                                src="/british-council.png"
                                alt="British Council Certified"
                                width={500}
                                height={400}
                                className="object-contain max-h-[400px] w-full"
                            />

                        </div>
                    </div>
                </div>




                {/* helps platfomr section */}

                <div className="w-full max-w-6xl mx-auto flex flex-wrap px-4 sm:px-6 md:px-8 lg:px-10">
                    <div className="w-full text-center py-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
                            A Platform That{" "}
                            <span className="relative inline-block">
                                Helps You
                                <div className="absolute bottom-1 left-0 w-full h-1 bg-primary opacity-50" />
                            </span>
                        </h2>
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">
                            Throughout The Entire Process
                        </h3>

                        <div className="flex flex-col items-center">
                            {/* Tab Buttons */}
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 border-b w-full">
                                {["students", "recruitment", "universities"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-medium ${activeTab === tab
                                                ? "text-primary border-b-2 border-primary"
                                                : "text-gray-500 hover:text-primary"
                                            }`}
                                    >
                                        {tab === "students"
                                            ? "Students"
                                            : tab === "recruitment"
                                                ? "Recruitment Partners"
                                                : "Partner Universities"}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="mt-10 sm:mt-12 w-full">
                                {activeTab === "students" && (
                                    <div className="flex flex-col lg:flex-row items-center gap-8">
                                        <div className="flex-1 w-full">
                                            <Image
                                                src="/step-journey-1.png"
                                                alt="Student"
                                                width={400}
                                                height={300}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="flex-1 w-full text-left">
                                            <h4 className="text-xl sm:text-2xl font-bold mb-4">
                                                We support your dreams, making them real
                                            </h4>
                                            <p className="text-gray-600 mb-6">
                                                Discover and apply to programs and schools that match your background, skills, and interests. Believe, achieve, and succeed with us!
                                            </p>
                                            <button className="btn btn-primary">Learn More</button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "recruitment" && (
                                    <div className="flex flex-col lg:flex-row items-center gap-8">
                                        <div className="flex-1 w-full">
                                            <Image
                                                src="/step-journey-2.png"
                                                alt="Recruitment"
                                                width={400}
                                                height={300}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="flex-1 w-full text-left">
                                            <h4 className="text-xl sm:text-2xl font-bold mb-4">
                                                Partner with us to expand your reach
                                            </h4>
                                            <p className="text-gray-600 mb-6">
                                                We&apos;re your trusted partner to help students achieve international education goals.
                                            </p>
                                            <button className="btn btn-primary">Partner With Us</button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "universities" && (
                                    <div className="flex flex-col lg:flex-row items-center gap-8">
                                        <div className="flex-1 w-full">
                                            <Image
                                                src="/step-journey-3.png"
                                                alt="University"
                                                width={400}
                                                height={300}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="flex-1 w-full text-left">
                                            <h4 className="text-xl sm:text-2xl font-bold mb-4">
                                                Connect with qualified students
                                            </h4>
                                            <p className="text-gray-600 mb-6">
                                                Expand your reach in the United Kingdom, attracting qualified students effortlessly with our trusted platform.
                                            </p>
                                            <button className="btn btn-primary">Explore Opportunities</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>





                {/* Why We Exist Section */}


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-12 py-24 px-4 mt-16"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full -z-10 blur-3xl opacity-60" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-50 rounded-full -z-10 blur-3xl opacity-40" />

                    {/* Image Section */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            <Image
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="Students collaborating"
                                width={800}
                                height={500}
                                className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                            />

                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-2xl -z-10" />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        className="lg:w-1/2 flex flex-col gap-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="space-y-4">
                            <motion.span
                                className="text-yellow-500 font-semibold tracking-wider uppercase"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Our Purpose
                            </motion.span>
                            <motion.h2
                                className="text-4xl font-bold text-gray-900"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                Why We Exist
                            </motion.h2>
                        </div>

                        <div className="h-1 w-20 bg-yellow-500 rounded-full" />

                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <span className="text-yellow-500 font-semibold">We believe in You! </span>
                                We hope that with <span className="text-yellow-500 font-semibold">right guidance</span> you can do
                                wonders in your life. We help you make the right choices that
                                resonates with your aspirations, dreams and potential.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                It&apos;s you who <span className="text-yellow-500 font-semibold">controls your destiny</span>.
                                You can achieve whatever you wish in your life.
                            </p>

                        </motion.div>

                        <motion.button
                            className="btn btn-primary w-fit mt-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>



                {/* success stories  */}
                <SuccessStories />





                {/* Rest of the sections with consistent spacing */}
                <div className="space-y-24 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-[85rem] mx-auto px-4"
                    >
                        <h2 className="text-4xl text-center font-bold text-primary mb-12">
                            Our Core Strengths
                        </h2>
                        <OurStrength />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto px-4"
                    >
                        <Offerings />
                    </motion.div>
                    <Feature />
                    <StudyDestinations />
                    <UniversityPartners />
                    <CommonBlog />
                    <FAQ />
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Home;