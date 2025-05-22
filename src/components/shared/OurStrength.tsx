"use client";
import { motion } from "framer-motion";
import { PhoneCall, Plane, Telescope, Users } from "lucide-react";

const stats = [
    {
        icon: <Users className="text-base-300" size={48} />,
        title: "Students",
        value: "45,000+",
        desc: "received offers from top universities in UK, US, Australia, Canada & more"
    },
    {
        icon: <Plane className="text-base-300" size={48} />,
        title: "University Partners",
        value: "850+",
        desc: "abroad for seamless application submission and student experience"
    },
    {
        icon: <PhoneCall className="text-base-300" size={48} />,
        title: "Counsellings",
        value: "2 Million+",
        desc: "in the last 8 years of our existence, growing at 150,000+ every month"
    },
    {
        icon: <Telescope className="text-base-300" size={48} />,
        title: "Users",
        value: "120 Million+",
        desc: "who browsed the platform last year across our wide range of products"
    }
];

const OurStrength: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-base-200/50 to-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Impact</h2>
                    <h3 className="text-4xl font-bold">Our Strength in Numbers</h3>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Transforming education access globally with proven results and growing impact
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full
                                         border border-primary/10 hover:border-primary/30">
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="p-4 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                                        {stat.icon}
                                    </div>

                                    <h4 className="text-xl font-semibold text-gray-900">
                                        {stat.title}
                                    </h4>

                                    <div className="text-3xl font-bold text-primary">
                                        {stat.value}
                                    </div>

                                    <p className="text-gray-600 leading-relaxed">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStrength;
