"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const offerings = [
    {
        title: "31+ Countries Training",
        description: "Application process and process Live training for 31+ Countries",
        bgColor: "bg-gradient-to-br from-teal-400 to-teal-600",
        icon: "/offering/contract-agreement.png",
    },
    {
        title: "50% Payout",
        description: "Highest payouts of 50% for study abroad partners",
        bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
        icon: "/offering/payout.png",
    },
    {
        title: "Tie-ups",
        description: "17004 Tie-ups across 31+ countries",
        bgColor: "bg-gradient-to-br from-amber-400 to-amber-600",
        icon: "/offering/letter.png",
    },
    {
        title: "Tech Platform Set up",
        description: "Next generation study abroad Platform set up with all essentials",
        bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
        icon: "/offering/search.png",
    },
    {
        title: "Dedicated Support Team",
        description: "Dedicated back end team for application and VISA process",
        bgColor: "bg-gradient-to-br from-rose-400 to-rose-600",
        icon: "/offering/light-bulb.png",
    },
    {
        title: "Certification",
        description: "Industry Certification, Empanelment and global recognition",
        bgColor: "bg-gradient-to-br from-slate-400 to-slate-600",
        icon: "/offering/certificate.png",
    },
];

const Offerings = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-base-200/50 to-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Offer</span>
                    <h2 className="text-4xl font-bold mt-4">
                        Study Abroad <span className="text-primary">with Us!</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Comprehensive support and resources for your international education journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full
                                          border border-gray-100 hover:border-primary/20">
                                <div className="flex flex-col items-center text-center gap-6">
                                    <div className={`${offering.bgColor} rounded-2xl w-20 h-20 p-5 
                                                    flex items-center justify-center shadow-lg
                                                    group-hover:scale-110 transition-transform duration-300`}>
                                        <Image
                                            src={offering.icon}
                                            alt={offering.title}
                                            width={40}
                                            height={40}
                                            className="object-contain brightness-[1.2] contrast-[1.2]"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                            {offering.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {offering.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
