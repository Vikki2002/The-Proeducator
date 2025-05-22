"use client"
import { motion } from "framer-motion";
import Image from "next/image";

type Perk = {
    title: string;
    description: string;
    image: string;
    alt: string;
};

const perks: Perk[] = [
    {
        title: "Employee Wellness Programs",
        description: "We organize different activities to help employees improve their physical, mental & emotional health.",
        image: "https://storage.googleapis.com/a1aa/image/20V16d_Gm6pEVLpPdHdTtaRKuc06BWYzckycm_QgZBg.jpg",
        alt: "Icon representing Employee Wellness Programs",
    },
    {
        title: "Festival Celebrations",
        description: "We celebrate festivals at work to boost morale, foster fellowship & create a sense of belonging.",
        image: "https://storage.googleapis.com/a1aa/image/dNUPRgHvzduHMZ3AQq7gienAik0j789bjmWSD1V8fA4.jpg",
        alt: "Icon representing Festival Celebrations",
    },
    {
        title: "Annual Sports Meets",
        description: "We organize sports meets to help team members stay fit, reduce stress & improve team spirit.",
        image: "https://storage.googleapis.com/a1aa/image/xKoWIufVdnacN-TWvTfEcdsjv6ptw1Ky-TNCJ0o60kY.jpg",
        alt: "Icon representing Annual Sports Meets",
    },
    {
        title: "Reward & Recognition",
        description: "We have the culture of reward & recognition to appreciate team members for their caliber and contribution.",
        image: "https://storage.googleapis.com/a1aa/image/MS4E_8bclEmQ0mv23IMwXRP_MaMsnwTM60us52jvkuE.jpg",
        alt: "Icon representing Reward & Recognition",
    },
    {
        title: "Annual Retreat",
        description: "KC's annual retreat gives an excellent opportunity to employees to take a break from work, relax, rejuvenate & bond with their colleagues.",
        image: "https://storage.googleapis.com/a1aa/image/2j3uI61r1Yirv8vgbIG41GWD4j3S_ZFo43EKqFyyvsA.jpg",
        alt: "Icon representing Annual Retreat",
    },
    {
        title: "Medical Insurance",
        description: "We offer medical insurance to our employees which helps them take care of their health & well-being.",
        image: "https://storage.googleapis.com/a1aa/image/JCnC7Br02yGK5q4PbnM0nw1YjNb5TP0CO0WN8NHFWbQ.jpg",
        alt: "Icon representing Medical Insurance",
    }
];
const TheProAndPerks: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-base-200/50 to-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">Employee Benefits</span>
                    <h2 className="text-4xl font-bold mt-4">Perks at TheProEducator</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We believe in creating a positive work environment that promotes growth, well-being, and work-life balance
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {perks.map((perk, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
                                          border border-gray-100 hover:border-primary/20 h-full">
                                <div className="flex flex-col items-center text-center gap-6">
                                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={perk.image}
                                            alt={perk.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {perk.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {perk.description}
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

export default TheProAndPerks;
