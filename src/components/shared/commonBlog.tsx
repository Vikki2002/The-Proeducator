"use client"
import { motion } from "framer-motion";
import { LucideArrowBigRightDash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
    id: string;
    category: string;
    title: string;
    date: string;
    image: string;
    imageAlt: string;
}

const featuredBlogs: BlogPost[] = [
    {
        id: '1',
        category: 'STUDY ABROAD',
        title: 'Student Accommodation in Canada 2025: Everything You Should Know',
        date: 'Mar 07, 2025',
        image: 'https://storage.googleapis.com/a1aa/image/BCTU-7qZefzCbLEfaMnXXLEGU-17YDITaKZTIJPqIhA.jpg',
        imageAlt: 'A student using a laptop for research'
    },
    {
        id: '2',
        category: 'STUDENT TESTIMONIAL',
        title: 'From Nagpur to Queensland: How KC Made My Study Abroad Dream Come True',
        date: 'Dec 06, 2024',
        image: 'https://storage.googleapis.com/a1aa/image/pERQ_2c6tHNokyRK6XlLEGWdPWvvmP14b_Ktgo3bb3M.jpg',
        imageAlt: 'A student testimonial about studying abroad'
    },
    {
        id: '3',
        category: 'COACHING',
        title: 'GMAT Online Coaching: Benefits, Test Prep, Best Provider & More',
        date: 'Feb 03, 2025',
        image: 'https://storage.googleapis.com/a1aa/image/-dWITbRJdy3-jJtsH9EDU_D1U_hQiCNAxedBoVOPxmA.jpg',
        imageAlt: 'A comprehensive guide for GMAT online coaching'
    }
];

const BlogCard = ({ post, variant = "default" }: { post: BlogPost, variant?: "default" | "horizontal" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl
                ${variant === "horizontal" ? "flex flex-row h-[250px]" : "flex flex-col h-full"}`}
        >
            <div className={`relative overflow-hidden ${variant === "horizontal" ? "w-[200px]" : "h-[250px]"}`}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="h-full"
                >
                    <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <span className="text-primary text-sm font-semibold tracking-wider">
                    {post.category}
                </span>
                <h3 className="text-xl font-bold mt-2 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                </h3>
                <time className="text-gray-500 mt-auto text-sm">{post.date}</time>
            </div>
        </motion.div>
    );
};

const CommonBlog = () => {
    const [featured, ...otherPosts] = featuredBlogs;

    return (
        <section className="bg-base-200/50 py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl font-bold text-primary">Latest Blogs</h2>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                        <span>View All Blogs</span>
                        <LucideArrowBigRightDash className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Featured Post */}
                    <BlogCard post={featured} />

                    {/* Other Posts */}
                    <div className="flex flex-col gap-8">
                        {otherPosts.map(post => (
                            <BlogCard key={post.id} post={post} variant="horizontal" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommonBlog;