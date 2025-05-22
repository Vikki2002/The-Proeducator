"use client";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/shared/footer";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaUniversity, FaDollarSign } from "react-icons/fa";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ApexOptions } from 'apexcharts'; // Import the ApexOptions type

// Dynamically import charts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const marketStats = [
    {
        icon: <FaGraduationCap className="text-4xl text-primary" />,
        value: "7.2M+",
        label: "International Students Worldwide",
        growth: "+23% since 2019"
    },
    {
        icon: <FaDollarSign className="text-4xl text-primary" />,
        value: "$350B",
        label: "Global Education Market Value",
        growth: "+15% annual growth"
    },
    {
        icon: <FaUniversity className="text-4xl text-primary" />,
        value: "25K+",
        label: "Partner Universities",
        growth: "Across 50 countries"
    },
    {
        icon: <FaUsers className="text-4xl text-primary" />,
        value: "89%",
        label: "Student Satisfaction Rate",
        growth: "Based on 10K+ reviews"
    }
];

const trends = [
    {
        title: "Digital Transformation",
        description: "AI-powered personalized guidance and virtual counseling solutions are revolutionizing study abroad services.",
        image: "/marketing/digital.jpg"
    },
    {
        title: "Emerging Destinations",
        description: "New study destinations are gaining popularity, offering diverse opportunities for international education.",
        image: "/marketing/destinations.jpg"
    },
    {
        title: "Hybrid Learning",
        description: "Blend of online and on-campus learning is becoming increasingly popular among international students.",
        image: "/marketing/hybrid.jpg"
    }
];

export default function MarketFit() {
    const growthChartOptions: ApexOptions = { // Define the type for growthChartOptions
        chart: {
            type: 'area', // This should be recognized as a valid type
            toolbar: { show: false },
            fontFamily: 'inherit'
        },
        colors: ['#3B82F6'],
        stroke: { curve: 'smooth', width: 2 },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: ['2019', '2020', '2021', '2022', '2023', '2024(P)', '2025(P)'],
        },
        tooltip: { theme: 'dark' }
    };

    const growthChartSeries = [{
        name: 'Market Size (Billion USD)',
        data: [250, 275, 300, 320, 350, 380, 420]
    }];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <h1 className="text-5xl font-bold text-primary mb-6">
                                Transforming Global Education Access
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                The ProEducator is strategically positioned to address the growing demand for international education services, backed by market trends and data-driven insights.
                            </p>
                            <div className="flex gap-4">
                                <button className="btn btn-primary btn-lg">Get Started</button>
                                <button className="btn btn-outline btn-lg">Learn More</button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <Image
                                src="/marketing/hero.jpg"
                                alt="Global Education Market"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Market Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Market Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {marketStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-xl border border-gray-100"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    {stat.icon}
                                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                                </div>
                                <p className="text-gray-600 mb-2">{stat.label}</p>
                                <p className="text-primary font-semibold">{stat.growth}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Market Growth Chart */}
            <section className="py-20 bg-base-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white p-8 rounded-xl shadow-xl">
                        <h2 className="text-3xl font-bold mb-8">Market Growth Trajectory</h2>
                        <Chart
                            options={growthChartOptions}
                            series={growthChartSeries}
                            type="area"
                            height={400}
                        />
                    </div>
                </div>
            </section>

            {/* Market Trends */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Global Education Trends</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trends.map((trend, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card bg-base-100 shadow-xl"
                            >
                                <figure>
                                    <Image
                                        src={trend.image}
                                        alt={trend.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title">{trend.title}</h3>
                                    <p className="text-gray-600">{trend.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Join the Future of Education?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Start your journey with The ProEducator and be part of the growing global education community.
                    </p>
                    <button className="btn btn-secondary btn-lg">Get Started Now</button>
                </div>
            </section>

            <Footer />
        </>
    );
}
