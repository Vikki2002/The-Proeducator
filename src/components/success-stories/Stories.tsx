import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Building, Award, BookOpen, Globe, Trophy } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface SuccessStory {
    name: string;
    university: string;
    course: string;
    achievement: string;
    icon: React.ReactNode;
}

const stories: SuccessStory[] = [
    {
        name: "Sarah Johnson",
        university: "University of Oxford",
        course: "MSc Computer Science",
        achievement: "Full Scholarship Recipient",
        icon: <GraduationCap className="w-6 h-6" />,
    },
    {
        name: "Michael Chen",
        university: "Imperial College London",
        course: "MEng Mechanical Engineering",
        achievement: "Research Fellowship",
        icon: <Building className="w-6 h-6" />,
    },
    {
        name: "Emma Williams",
        university: "University of Cambridge",
        course: "MBA",
        achievement: "Dean's List Honor",
        icon: <Award className="w-6 h-6" />,
    },
    {
        name: "James Anderson",
        university: "Stanford University",
        course: "PhD in AI",
        achievement: "Innovation Award",
        icon: <BookOpen className="w-6 h-6" />,
    },
    {
        name: "Sofia Rodriguez",
        university: "MIT",
        course: "MSc Data Science",
        achievement: "Global Excellence",
        icon: <Globe className="w-6 h-6" />,
    },
    {
        name: "David Kim",
        university: "Harvard University",
        course: "JD Law",
        achievement: "Merit Scholarship",
        icon: <Trophy className="w-6 h-6" />,
    }
];

const StoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full"
    >
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                {story.icon}
            </div>
            <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">{story.name}</h4>
                <p className="text-yellow-600 font-medium mt-1">{story.university}</p>
                <p className="text-gray-600 mt-2">{story.course}</p>
                <div className="mt-4 inline-block bg-yellow-50 px-3 py-1 rounded-full">
                    <span className="text-yellow-600 text-sm font-medium">{story.achievement}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const SuccessStories: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-yellow-50 to-white py-20"
        >
            <div className="relative w-full max-w-6xl mx-auto px-4">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-yellow-100/50 blur-3xl rounded-full" />
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-yellow-50/30 blur-3xl rounded-full" />
                </div>

                <div className="relative">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-600">
                            From <span className="text-yellow-600 font-semibold">The Pro Educator</span> to Global Achievers
                        </p>
                    </motion.div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: 'swiper-pagination-bullet-active bg-yellow-500',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {stories.map((story) => (
                            <SwiperSlide key={story.name}>
                                <StoryCard story={story} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="text-center mt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 font-medium transition-colors"
                        >
                            View More Stories
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default SuccessStories;