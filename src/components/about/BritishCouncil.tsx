"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const certifications = {
    britishCouncil: [
        {
            name: "Prashant Kumar",
            role: "Agent",
            organization: "Prashant Kumar LTD",
            certificateCode: "1037",
            image: "/certificates/british-council-1.png"
        },
        {
            name: "Laxmi Kumari",
            role: "Agent",
            organization: "Prashant Kumar LTD",
            certificateCode: "1138",
            image: "/certificates/british-council-2.png"
        }
    ],
    agile: [
        {
            title: "Certified Agile Leadership Essentials®",
            image: "/certificates/cal-e.png"
        },
        {
            title: "Certified Agile Leadership for Teams®",
            image: "/certificates/cal-t.png"
        },
        {
            title: "Certified Agile Leadership for Organizations®",
            image: "/certificates/cal-o.png"
        }
    ]
};

export default function Certifications() {
    return (
        <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-6">British Council Certified</h1>
                    <p className="text-xl text-gray-600">
                        All our Counsellors are British Council Certified! And we are Agile too!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* British Council Swiper */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-semibold mb-8">British Council Certificates</h2>
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            slidesPerView={1}
                            slidesPerGroup={1}
                            className="rounded-xl"
                        >
                            {certifications.britishCouncil.map((cert, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
                                    >
                                        <Image
                                            src={cert.image}
                                            alt={`${cert.name}'s British Council Certificate`}
                                            width={400}
                                            height={300}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>

                    {/* Agile Swiper */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-semibold mb-8">Agile Certifications</h2>
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            slidesPerView={1}
                            slidesPerGroup={1}
                            className="rounded-xl"
                        >
                            {certifications.agile.map((cert, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center"
                                    >
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            width={150}
                                            height={150}
                                            className="w-32 h-32 object-contain mb-4"
                                        />
                                        <p className="text-sm font-medium">{cert.title}</p>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
