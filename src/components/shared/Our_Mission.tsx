"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
    return (
        <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="md:w-1/2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <h2 className="text-sm font-semibold text-neutral uppercase tracking-wider mb-2">Our Purpose</h2>
                            <h1 className="text-5xl font-bold bg-neutral bg-clip-text text-transparent">
                                Our Mission
                            </h1>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl font-medium leading-relaxed"
                            >
                                Our Mission is to make
                                <span className="text-primary font-semibold"> useful information </span>
                                easily accessible for all.  We are striving  <span className="text-primary font-semibold mx-1">hard to simplify</span>
                                the world of education through
                                <span className="text-primary font-semibold mx-1">technology</span>.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-600 text-lg leading-relaxed"
                            >
                                We&apos;re helping students make the best decisions based on their potential,
                                leveraging cutting-edge technology for personalized guidance.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <button className="btn btn-neutral">Learn More</button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
                            <Image
                                alt="A smiling man holding books and pointing towards the text"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
                                src="/about/mission.jpg"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}