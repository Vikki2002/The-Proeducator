"use client";
import Tabs from "@/components/destinationsComponents/tabs";
import Image from "next/image";
import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Award, MapPin } from 'lucide-react';
import Trending from "../../../components/destinationsComponents/trending";
import ReusableTable from "../../../components/prep-zone/prep-components/Table";
import AcademicIntake from "../../../components/destinationsComponents/AcdemicIntake";
import VisaTreeView from "../../../components/destinationsComponents/VisaTreeView";
import VisaWeatherCard from "../../../components/destinationsComponents/VisaWeatherCard";
import FAQ from "../../../components/shared/faq";
import AdmissionTimeline from "../../../components/destinationsComponents/admissionTimeline";
import CostOfLiving from "../../../components/destinationsComponents/costOfLiving";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/shared/footer";
import { usePathname } from "next/navigation";
import BookingModal from "../../../components/bookingModel/BookingModel";
import axios from "axios";
import { useCountryContext } from "../../../context/DestinationProvider";
import Flag from "react-world-flags";
import { getCountryCode } from "../../../helper/countryData";
import Link from "next/link";
import { setupSSE } from "../../../hooks/useSSE";
// import ComingSoon from "@/components/shared/ComingSoon";


interface WeatherData {
    city: string;
    min: number;
    max: number;
}

interface VisaType {
    title: string;
    cost: string;
    type: string;
    description: string;
}

const visaTypes: VisaType[] = [
    {
        title: "General Student - Tier 4",
        cost: "£ 339",
        type: "Type- Study",
        description: "This category is for students coming to the UK for post-16 education. A Tier 4 (General) Student must be at least 16 years old."
    },
    {
        title: "Child Student - Tier 4",
        cost: "£ 339",
        type: "Type- Study",
        description: "You can apply for the Tier 4 (Child) student visa if you are aged between 4 and 17 and you want to study at an independent school in the UK. However w..."
    }
    // Add more visa types as needed
];

const weatherData: WeatherData[] = [
    { city: "London", min: 6, max: 12 },
    { city: "Edinburgh", min: 2, max: 9 },
    { city: "Manchester", min: 4, max: 10 },
    { city: "Glasgow", min: 4, max: 9 },
    { city: "Coventry", min: 4, max: 10 },
    { city: "Nottingham", min: 3, max: 10 },
    { city: "Birmingham", min: 3, max: 10 },
    { city: "New Castle", min: 1, max: 12 },
    { city: "Aberdeen", min: 2, max: 9 },
    { city: "Brighton", min: 5, max: 8 }
];

const education_System = [
    {
        study: "Degrees (BA, B.Sc, BEng. .)",
        duration: "3 Years",
        PSWR: "2 Years",
    },
    {
        study: "Sandwich degrees",
        duration: "4 years with a year in industry",
        PSWR: "2 Years",
    },
    {
        study: "Master's degree (MA, M.Sc, LLM, MBA, MRes)",
        duration: "1 Years",
        PSWR: "2 Years",

    },
    {
        study: "Research Masters (such as MPhiL, PhD, Dphil)",
        duration: "2 - 3 Years",
        PSWR: "2 Years",
    },
]

const FastFacts = [
    "🏛️", "👨‍👩‍👧‍👦", "🌍", "🎓", "📈", "📞", "💷", "🏫"
]

interface University {
    country_id: string;
    university_name: string;
    country_name: string;
    city: string;
    state: string;
    address: string;
    logo: string;
    Rank: string;
    status: string;
}

const UK: React.FC = () => {
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const pathname = usePathname();
    const lastSegment = pathname.split("/").pop()?.replaceAll("-", " ").toUpperCase();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { countriesData, setCountriesData } = useCountryContext();
    const [university, setUniversity] = useState<University[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const countryCode = getCountryCode(lastSegment as string)


    const tabs = useMemo(() => [
        { name: "FAST FACTS", id: "fast-facts" },
        { name: "EDUCATION SYSTEM", id: "education-system" },
        { name: "TOP UNIVERSITIES", id: "universities" },
        { name: "ADMISSIONS", id: "admissions" },
        { name: "VISA", id: "visa" },
        { name: "COST OF LIVING", id: "costOfLiving" },
        { name: "FAQS", id: "faqs" },
    ], []);
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    const activeTab = tabs.find((tab) => tab.id === visibleSection.target.id)?.name;
                    if (activeTab) setActiveTab(activeTab);
                }
            },
            { threshold: 0.3 }
        );

        Object.values(sectionRefs.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [tabs]);

    useEffect(() => {
        async function fetchCountry() {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/country`, {
                    params: { query: lastSegment }
                });
                if (response.data.success) {
                    setCountriesData(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching country:", error);
            }
        }

        function fetchUniversity() {
            const { close } = setupSSE<{ data: University[]; timeStamp: string }>(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/stream`,
                (parsed) => {
                    console.log("📡 SSE Update:", parsed.timeStamp);
                    setUniversity(parsed.data || []);
                },
                (error) => {
                    console.error("❌ SSE Error:", error);
                }
            );

            // Cleanup on component unmount
            return () => {
                close(); // Close the SSE connection when the component is unmounted
            };
        }

        fetchCountry();
        fetchUniversity();
    }, [lastSegment, setCountriesData, setUniversity]);

    const activeUniversity = university.filter((univ) => univ.status === 'active')

    return (
        <>
            <Navbar />
            <main className="relative w-full h-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-full relative"
                >
                    <Image
                        src="/ukpage.jpg"
                        alt="UK Banner"
                        width={1920}
                        height={300}
                        className="w-full h-full sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                        priority
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute inset-0 flex flex-col items-center gap-1.5 text-center text-white px-4 py-6 sm:py-8 md:py-10 mt-[5rem]"
                    >
                        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
                            Study in <span>{lastSegment}</span>
                        </h1>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-base-300 px-4 sm:px-6 py-2 rounded text-xs hover:bg-accent transition text-black font-bold cursor-pointer"
                        >
                            Talk to an Expert Counsellor for FREE
                        </motion.button>
                    </motion.div>
                </motion.div>

                <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} sectionRefs={sectionRefs} />
                <div
                    id="fast-facts"
                    ref={(el) => { sectionRefs.current["fast-facts"] = el; }}
                    className="relative w-full max-w-7xl mx-auto mt-[1rem] bg-base-200 rounded-[0.5rem] p-[3rem]">
                    <div className='max-w-6xl mx-auto px-4'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                            {countriesData?.bentoItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full bg-gradient-to-br from-base-100 to-base-200 rounded-2xl
                                             shadow-lg hover:shadow-2xl transition-all duration-300 p-6
                                             border border-primary/10 backdrop-blur-md relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-tr-full -z-0" />

                                    <div className="relative z-10 flex items-start justify-between gap-4">
                                        <div className="flex-1 space-y-2">
                                            <h2 className="text-base sm:text-lg font-bold text-primary
                                                       tracking-tight">{item.title}</h2>
                                            <p className="text-sm sm:text-base text-gray-600
                                                      font-medium leading-relaxed">{item.value}</p>
                                        </div>
                                        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16
                                                    bg-primary/10 rounded-2xl flex items-center justify-center
                                                    text-2xl sm:text-3xl text-primary transform rotate-3">
                                            {FastFacts[index]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div ref={ref} className="w-full max-w-6xl mx-auto bg-base-100 p-6 md:p-8 rounded-lg border border-base-200 mt-6 mb-6">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                                Why Study in <span className="text-primary uppercase">{lastSegment}</span>
                            </h1>
                            <div className="flex justify-center">
                                <Flag
                                    code={countryCode as string}
                                    className="w-16 h-16 rounded-md shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {countriesData?.whyWeStudy.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-base-200 p-4 rounded-md"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="bg-base-300 p-1.5 rounded">
                                            <span className="text-lg">✨</span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Trending />
                <div
                    id="education-system"
                    ref={(el) => { sectionRefs.current["education-system"] = el; }}
                    className="relative w-full max-w-7xl mx-auto mt-[4rem] bg-base-200 rounded-[0.5rem] p-[3rem]">
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">UK’s Education system</h1>
                        <ReusableTable headers={["Qualification", "Duration", "PSWR"]} keyField="study" data={education_System} />
                    </div>
                    <div className="mt-[3rem]">
                        <AcademicIntake />
                    </div>
                </div>
                <div id="universities"
                    ref={(el) => { sectionRefs.current["universities"] = el }}
                    className="relative w-full max-w-7xl mx-auto mt-[4rem] bg-base-200 rounded-[0.5rem] p-2.5"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-6xl mx-auto rounded-[0.5rem] bg-base-200 py-16"
                    >
                        <section className="w-full max-w-7xl mx-auto px-4">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-4xl font-bold text-center text-primary mb-8"
                            >
                                Top Universities to Study in {lastSegment}
                            </motion.h2>

                            <div className="relative group">
                                {/* Left Arrow */}
                                <button
                                    onClick={() => document.getElementById('university-scroll')?.scrollBy(-300, 0)}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
                             bg-white/80 hover:bg-white p-2 rounded-full shadow-lg
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <ArrowLeft className="w-6 h-6 text-primary" />
                                </button>

                                {/* Scrollable Container */}
                                <div
                                    id="university-scroll"
                                    className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide py-4"
                                    style={{ scrollBehavior: 'smooth' }}
                                >
                                    {activeUniversity.map((univ, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex-none w-[300px] bg-gray-100 border-2 border-primary/10 
                                     rounded-xl shadow-xl hover:border-primary/30 
                                     transition-all duration-300 hover:shadow-2xl"
                                        >
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="px-3 py-1 bg-warning/10 text-warning 
                                                   rounded-full text-sm font-semibold flex items-center">
                                                        <Award className="w-4 h-4 mr-1" />
                                                        Rank #{univ.Rank}
                                                    </span>
                                                    <Image
                                                        src={univ.logo}
                                                        alt={univ.university_name}
                                                        width={80}
                                                        height={80}
                                                        className="w-[80px] h-[80px] object-cover rounded-full"
                                                    />
                                                </div>

                                                <div className="space-y-2 mb-6">
                                                    <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
                                                        {univ.university_name}
                                                    </h2>
                                                    <div className="flex items-center">
                                                        <MapPin className="w-4 h-4 mr-1 text-secondary" />
                                                        <span className="text-sm text-secondary line-clamp-1">
                                                            {univ.address}
                                                        </span>
                                                    </div>
                                                </div>

                                                <button className="btn btn-primary w-full flex items-center 
                                                 justify-center gap-2 hover:gap-4 transition-all duration-300">
                                                    Apply Now
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={() => document.getElementById('university-scroll')?.scrollBy(300, 0)}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 
                             bg-white/80 hover:bg-white p-2 rounded-full shadow-lg 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <ArrowRight className="w-6 h-6 text-primary" />
                                </button>
                            </div>
                        </section>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center mt-12"
                        >
                            <Link
                                href="/country"
                                className="btn btn-accent hover:btn-info gap-2 hover:gap-4 transition-all duration-300"
                            >
                                Find Your Dream University
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <div
                    id="admissions"
                    ref={(el) => { sectionRefs.current["admissions"] = el; }}
                    className="relative w-full max-w-6xl mx-auto mt-[4rem] bg-base-200 rounded-[0.5rem] p-2.5">
                    <div className="max-w-5xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3 text-neutral">
                                Admission Requirements for {lastSegment}
                            </h2>
                        </motion.div>
                        
                        <div className="mt-10">
                            <ul>
                                {countriesData?.admissionRequirements.map((requ, index) => (
                                    <li key={index}>
                                        <h1 className="text-black">{requ.requirement}</h1>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <AdmissionTimeline />
                    </div>
                </div>

                <div id="visa" ref={(el) => { sectionRefs.current["visa"] = el }} className="relative w-full max-w-6xl mx-auto mt-5">
                    <VisaTreeView />
                </div>

                <div id="costOfLiving" ref={(el) => { sectionRefs.current["costOfLiving"] = el; }}
                    className="relative w-full max-w-6xl mx-auto bg-base-200 rounded-[0.5rem]">
                    <VisaWeatherCard Weather={weatherData} VisaType={visaTypes} />
                    <CostOfLiving />
                </div>

                <div id="faqs" ref={(el) => { sectionRefs.current["faqs"] = el; }}>
                    <FAQ />
                </div>
            </main>

            <Footer />
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default UK;
