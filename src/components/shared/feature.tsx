"use client"
import { Cog, StickyNoteIcon, TabletSmartphoneIcon, UserCircleIcon } from 'lucide-react';
import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Features {
    icon: ReactNode,
    title: string,
    text: string
}

const features: Features[] = [
    {
        icon: <Cog size={28} className='text-base-300' />,
        title: "Custom Solutions",
        text: "Tailored designs that align with your vision, leveraging the latest technologies to bring your ideas to life."
    },
    {
        icon: <UserCircleIcon size={28} className='text-base-300' />,
        title: "Dedicated Team",
        text: "Experience the power of a focused development team, ensuring deep involvement and exceptional quality."
    },
    {
        icon: <StickyNoteIcon size={28} className='text-base-300' />,
        title: "Adaptable Approach",
        text: "Select an engagement model that suits your business needs, ensuring flexibility and alignment with your goals."
    },
    {
        icon: <TabletSmartphoneIcon size={28} className='text-base-300' />,
        title: "Agile Development",
        text: "Delivering high-quality, user-centered solutions with precision, ensuring client and user satisfaction."
    },
];

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
    const featureRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!featureRef.current) return;

        gsap.fromTo(
            featureRef.current.children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: featureRef.current,
                    start: "top 85%",
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="relative w-full max-w-6xl mx-auto px-6 py-12">
            <h1 className='text-center text-4xl font-bold text-secondary mb-6'>Our Features</h1>
            <div ref={featureRef} className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {features.map((fea, index) => (
                    <div
                        key={index}
                        className="bg-base-100 shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex flex-col gap-2">
                            <div className="p-3 bg-primary/10 rounded-lg inline-block">
                                {fea.icon}
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">{fea.title}</h2>
                            <p className="text-gray-600">{fea.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feature;
