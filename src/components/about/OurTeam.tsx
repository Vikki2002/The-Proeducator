
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    email?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Prashant Kumar",
        role: "CEO",
        image: "/why_we_exist.jpg",
        bio: "Founder and visionary leader with over 15 years of experience in education consulting.",
        linkedin: "https://linkedin.com/in/prashantkumar",
        email: "prashant@proeducator.com"
    },
    {
        id: 2,
        name: "Laxmi Kumari",
        role: "COO",
        image: "/why_we_exist.jpg",
        bio: "Operations expert with a passion for streamlining processes and enhancing student experiences.",
        linkedin: "https://linkedin.com/in/laxmikumari",
        email: "laxmi@proeducator.com"
    },
    {
        id: 3,
        name: "John Smith",
        role: "CTO",
        image: "/why_we_exist.jpg",
        bio: "Technology leader driving innovation in educational platforms and digital solutions.",
        linkedin: "https://linkedin.com/in/johnsmith",
    },
    {
        id: 4,
        name: "Sarah Johnson",
        role: "CMO",
        image: "/why_we_exist.jpg",
        bio: "Marketing strategist with expertise in educational branding and student outreach.",
        email: "sarah@proeducator.com"
    },
    {
        id: 5,
        name: "Michael Chen",
        role: "CFO",
        image: "/why_we_exist.jpg",
        bio: "Financial expert ensuring sustainable growth and value for our students and partners.",
        linkedin: "https://linkedin.com/in/michaelchen",
    },
    {
        id: 6,
        name: "Emma Wilson",
        role: "CDO",
        image: "/why_we_exist.jpg",
        bio: "Development director focused on creating new opportunities and partnerships globally.",
        email: "emma@proeducator.com"
    },
];

// ... your teamMembers array here

const OurTeam = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-primary mb-4">Our Super Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The ProEducator&apos;s dedicated team fuels innovation and guarantees
                        technological excellence in education consulting.
                    </p>
                </motion.div>

                {/* ✅ Swiper Section */}
                <Swiper
                    modules={[Navigation]}
                    navigation
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card bg-base-100 border border-info h-[500px]"
                            >
                                <figure className="px-6 pt-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="rounded-xl aspect-square w-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/team/placeholder.jpg";
                                        }}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title text-2xl font-bold">{member.name}</h3>
                                    <div className="badge badge-primary font-medium">{member.role}</div>
                                    <p className="mt-2 text-gray-600">{member.bio}</p>
                                    <div className="card-actions justify-end mt-4">
                                        <div className="flex gap-2">
                                            {member.linkedin && (
                                                <SocialIcon url={member.linkedin} target="_blank" rel="noopener noreferrer" />
                                            )}
                                            {member.email && (
                                                <SocialIcon url={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-primary mb-4">Join Our Team</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        We&apos;re always looking for talented individuals passionate about education
                        and helping students achieve their dreams.
                    </p>
                    <a href="/careers" className="btn btn-primary btn-lg">
                        View Open Positions
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default OurTeam;
