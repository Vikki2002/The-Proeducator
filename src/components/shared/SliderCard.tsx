"use client"
import { useEffect, useRef } from "react";
import Image from 'next/image';

const quotes = [
    {
        text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
        author: "Pelican Steve",
        source: "LittleThemes",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
    },
    {
        text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
        author: "Max Conversion",
        source: "LittleThemes",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
    },
    {
        text: "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.",
        author: "Eleanor Faint",
        source: "LittleThemes",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
    },
    {
        text: "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.",
        author: "Eleanor Faint",
        source: "LittleThemes",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
    },
    {
        text: "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.",
        author: "Eleanor Faint",
        source: "LittleThemes",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
    },
    {
        text: "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.",
        author: "Eleanor Faint",
        source: "LittleThemes",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
    },
    {
        text: "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.",
        author: "Eleanor Faint",
        source: "LittleThemes",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
    },
];

export default function SliderCard() {
    const scrollContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollBy({
                    left: 350, // Adjust scroll distance per item width
                    behavior: "smooth"
                });

                // Reset scroll when reaching the end
                if (
                    scrollContainer.current.scrollLeft + scrollContainer.current.clientWidth >=
                    scrollContainer.current.scrollWidth
                ) {
                    scrollContainer.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={scrollContainer}
            className="flex overflow-x-auto no-scrollbar min-h-[350px] p-4 space-x-4"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
        >
            {quotes.map((quote, index) => (
                <figure key={index} className="relative overflow-hidden rounded-lg shadow-lg w-[320px] flex-none bg-white">
                    <Image src={quote.image} alt={quote.author} width={320} height={300} className="object-cover" />

                    <blockquote className="relative p-6 italic text-gray-700 text-sm leading-relaxed">
                        {quote.text}
                        <div className="absolute bottom-0 left-6 text-6xl text-gray-300 opacity-30">“</div>
                        <div className="absolute top-0 right-6 text-6xl text-gray-300 opacity-30">”</div>
                    </blockquote>
                    <div className="absolute bottom-0 w-full bg-white p-3 text-center font-semibold text-black text-xs">
                        {quote.author} <span className="font-normal">- {quote.source}</span>
                    </div>
                </figure>
            ))}
        </div>
    );
}
