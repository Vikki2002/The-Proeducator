"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const textParts = [
    { id: "span-1", text: "THE", className: "text-black" },
    { id: "span-2", text: "PRO", className: "bg-black text-white px-1" },
    { id: "span-3", text: "EDUCATOR", className: "text-black" },
];

const TextAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current.children, // Target all spans inside the container
                { y: -80, opacity: 0 }, // Initial state
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2, // Stagger effect for each span
                    ease: "easeOut",
                }
            );
        }
    });

    return (
        <div ref={containerRef} className="text-xl font-bold tracking-wide flex space-x-1">
            {textParts.map((part) => (
                <span key={part.id} className={part.className}>
                    {part.text}
                </span>
            ))}
        </div>
    );
};

export default TextAnimation;
