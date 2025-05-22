"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react";
import PrepTabs from "./prep-components/PrepTabs";
import Registration from "./prep-components/Registration";
import { registrationIelts } from "./prep-data/registrationData";
import Fees from "./prep-components/Fees";
import { eligiblity1, ieltsCityFees, ieltsExamFees, ieltsFee, overview } from "./prep-data/IeltsData";
import ReusableTable from "./prep-components/Table";

const IELTS = () => {
    const preptabs = useMemo(() => [
        { name: "OverView", id: "overview" },
        { name: "Eligibility", id: "eligibility" },
        { name: "Registration", id: "registration" },
        { name: "Fees", id: "fees-id" },
        { name: "IELTS Exam", id: "IELTS-exam" },
        { name: "IELTS Exam Pattern", id: "IELTS-exam-pattern" },
        { name: "Syllabus", id: "syllabus" },
        { name: "Tips", id: "tips" },
        { name: "IELTS Result", id: "IELTS-result" },
        { name: " Cut Off", id: " cut-Off" },

    ], []);

    const [activeTab, setActiveTab] = useState<string>("");
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    const activeTab = preptabs.find((tab) => tab.id === visibleSection.target.id)?.name;
                    if (activeTab) setActiveTab(activeTab);
                }
            },
            { threshold: 0.3 }
        );

        Object.values(sectionRefs.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [preptabs]);

    return (
    <section className="relative w-full">
        <div className="bg-accent p-8 lg:rounded-b-[20%] md:rounded-b-[15%] rounded-b-[0] h-[600px] shadow-lg w-full">
            <div className="relative z-10 mt-7">
                <div className="w-full lg:max-w-7xl flex lg:flex-row-reverse md:flex-row-reverse flex-col-reverse gap-5 text-secondary-content">
                    <div className="lg:w-[600px] md:w-[600px] w-full">
                        <div className="flex flex-row justify-start gap-1.5">
                            <Image
                                src="/IELTS.png"
                                alt="IELTS Logo"
                                width={200}
                                height={200} />
                            <h2 className="text-3xl font-bold mb-4 object-cover">
                                IELTS
                            </h2>
                        </div>
                        <p className="mb-4 text-justify">The IELTS Exam is one of the most popular and widely taken English proficiency tests for non-native English speakers who wish to study abroad. IELTS scores serve as a testament to an individual&apos;s English proficiency. Universities in English-speaking countries like the UK, Canada, and the US use these scores to assess a candidate&apos;s readiness for thriving in an academic environment abroad. The IELTS exam 2025 is conducted by IELTS India in the Indian subcontinent. Therefore, Indian students aspiring to take the IELTS can reach out to IELTS India in case of any queries</p>
                        <p className="mb-4 text-justify">
                            The International English Language Testing System (IELTS) is a standardized test designed to assess the English language proficiency of non-native speakers. It is widely used for study, work, and migration purposes in English-speaking countries such as the UK, Australia, Canada, and New Zealand.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full">
                        <Image
                            alt="Students studying in a classroom"
                            className="w-[600px] h-[300px] object-cover rounded-lg shadow-lg"
                            height={200}
                            src="/prepzone.jpg"
                            width={600}
                        />
                    </div>
                </div>
            </div>
        </div>

        <PrepTabs tabs={preptabs} activeTab={activeTab} setActiveTab={setActiveTab} sectionRefs={sectionRefs} />


        <div id="overview" className="mt-7 mb-3.5 max-w-6xl mx-auto w-full" ref={(el) => { sectionRefs.current["overview"] = el }}>
            {/* <h1 className="text-gray-600 text-4xl font-semibold">Overview</h1> */}
            <ReusableTable data={overview} headers={["Particular", "Detail"]} keyField="label" />
        </div>

        <div id="eligibility" ref={(el) => { sectionRefs.current["eligibility"] = el; }}>
            <div id="eligibility" className="w-full max-w-6xl mx-auto mt-2.5">
                <h1 className="mt-2.5 mb-2.5 text-gray-700 font-semibold text-[28px]">IELTS Eligibility</h1>
                <div className="flex flex-row gap-5 mb-5">
                    <div className="flex flex-col justify-start gap-2.5 bg-base-200 shadow rounded-[0.5rem] p-3.5">
                        <h1 className="text-neutral text-[20px]">Age Limit in IELTS Eligibility Criteria</h1>
                        <p>The IELTS exam welcomes everyone 16 and over! There&apos;s no upper age limit, so you can take the test at any stage in your life. This makes the IELTS accessible to a wide range of candidates, regardless of their age.</p>
                    </div>
                    <div className="flex flex-col justify-start gap-2.5 bg-base-200 shadow rounded-[0.5rem] p-3.5">
                        <h1 className="text-neutral text-[20px]">Minimum Qualifications in IELTS Eligibility Criteria</h1>
                        <p>The IELTS exam is open to all, regardless of education level. Whether you&apos;re aiming for studies or work abroad, the IELTS (Academic or General Training) can help you reach your goals. But remember to check the specific requirements of your chosen university or organization before you apply for the test.</p>
                    </div>
                    <div className="flex flex-col justify-start gap-2.5 bg-base-200 shadow rounded-[0.5rem] p-3.5">
                        <h1 className="text-neutral text-[20px]">IELTS Eligibility Criteria for Different Countries</h1>
                        <p>While each university has its admission requirements, many include an IELTS score. Check the specific criteria for your target schools to ensure you meet all eligibility needs.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5 mt-14">
                    <h1 className="text-base-300 text-[20px]">IELTS Eligibility Criteria for Canada</h1>
                    <p className="text-justify">To be eligible for a Canadian study visa, you must demonstrate an English proficiency equivalent to CLB (Canadian Language Benchmark) 7, which corresponds to an IELTS score of 6. Below are the leading Canadian universities that accept the IELTS score for admission:</p>
                    <ReusableTable data={eligiblity1} headers={["University", "IELTS for Undergraduate", "IELTS for Undergraduate"]} keyField="label" />
                </div>

                <div className="flex flex-col gap-2.5 mt-14">
                    <h1 className="text-base-300 text-[20px]">IELTS Eligibility Criteria for Canada</h1>
                    <p className="text-justify">To be eligible for a Canadian study visa, you must demonstrate an English proficiency equivalent to CLB (Canadian Language Benchmark) 7, which corresponds to an IELTS score of 6. Below are the leading Canadian universities that accept the IELTS score for admission:</p>
                    <ReusableTable data={eligiblity1} headers={["University", "IELTS for Undergraduate", "IELTS for Undergraduate"]} keyField="label" />
                </div>

                <div className="flex flex-col gap-2.5 mt-14">
                    <h1 className="text-base-300 text-[20px]">IELTS Eligibility Criteria for Canada</h1>
                    <p className="text-justify">To be eligible for a Canadian study visa, you must demonstrate an English proficiency equivalent to CLB (Canadian Language Benchmark) 7, which corresponds to an IELTS score of 6. Below are the leading Canadian universities that accept the IELTS score for admission:</p>
                    <ReusableTable data={eligiblity1} headers={["University", "IELTS for Undergraduate", "IELTS for Undergraduate"]} keyField="label" />

                </div>
            </div>
        </div>

        <div id="registration" className="w-full max-w-6xl mx-auto mt-14" ref={(el) => { sectionRefs.current["registration"] = el; }}>
            <h1 className="text-gray-500 text-4xl font-semibold TELTS">How to Apply for the</h1>
            <Registration registration_Data={registrationIelts} />
        </div>

        <div id="fees-id" className="max-w-6xl mx-auto mt-16" ref={(el) => { sectionRefs.current["fees-id"] = el; }}>
            <h2 className="text-3xl font-bold mb-4 text-gray-700">IELTS Exam Cancellation Policy</h2>
            <Fees fees={ieltsFee} />
            <div className="mt-12">
                <div className="flex flex-col gap-2.5 justify-start mb-6">
                    <h1 className="text-3xl text-gray-700 font-semibold">IELTS Exam Fees in India </h1>
                    <p>Indian aspirants who wish to take the IELTS exam in 2025 are required to pay an amount of INR 17,000. The IELTS test fee for both IELTS Academic and IELTS General is INR 17,000. However, it should be kept in mind that the IELTS test fee may vary in India depending on the type of test format you choose. Refer to the table below to go through IELTS test fees for different types of test formats.</p>
                </div>
                <ReusableTable headers={["IELTS Test Type", "Exam Fees for IELTS in India"]} keyField="fees-data" data={ieltsExamFees} />
            </div>

            <div className="mt-12">
                <div className="flex flex-col gap-2.5 justify-start mb-6">
                    <h1 className="text-3xl text-gray-700 font-semibold">City-Wise Exam Fees for IELTS in India</h1>
                    <p>IDP India adheres to a policy of standardised pricing throughout India. This ensures that the cost of the IELTS exam, regardless of whether it&lsquo;s paper-based or computer-delivered, remains uniform across all test centres within the country. That said, the IELTS test fee in India is the same for every city, i.e., INR 17,000. You can have a look at the table below to get a clear idea of the city-wise exam fees for IELTS in India. </p>
                </div>

            </div>
            <ReusableTable headers={["Name of the City", "IELTS Test Fees"]} keyField="cityWiseFee-data" data={ieltsCityFees} />
        </div>
    </section>)
}

export default IELTS