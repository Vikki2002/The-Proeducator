"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Flag from "react-world-flags";
import CircularLoader from "../shared/Loader/CircularLoader";
import { setupSSE } from "@/hooks/useSSE";

interface Country {
    _id: string;
    country_name: string;
    country_code: string;
    status: 'active' | 'inactive';
}
interface Challenge {
    name: string;
    link: string;
}

const challenges: Challenge[] = [
    { name: "IELTS", link: "/prepZone/ielts" },
    { name: "SAT", link: "/prepZone/ielts" },
    { name: "GMAT", link: "/prepZone/ielts" },
    { name: "TOEFL", link: "/prepZone/ielts" },
    { name: "PTE", link: "/prepZone/ielts" },
];

const dropdownVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const DropdownMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownChallengeOpen, setIsDropdownChallengeOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [countries, setCountries] = useState<Country[]>([]);

    useGSAP(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current.querySelectorAll("#li"),
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

    // useEffect(() => {
    //     const { close } = setupSSE<{ data: Country[]; timeStamp: string }>(
    //         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/country/countryseed`,
    //         (parsed) => {
    //             console.log("📡 SSE Update:", parsed.timeStamp);
    //             setCountries(parsed.data || []);
    //         },
    //     );
    //     return () => close(); // Clean up on unmount
    // }, []);

    useEffect(() => {
        // Setting up the SSE connection
        const { close } = setupSSE<{ data: Country[]; timeStamp: string }>(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/country/stream`,
            (parsed) => {
                console.log("📡 SSE Update:", parsed.timeStamp);
                setCountries(parsed.data || []);
            },
            (error) => {
                console.error("❌ SSE Error:", error);
            }
        );

        // Cleanup on component unmount
        return () => {
            close(); // Close the SSE connection when the component is unmounted
        };
    }, []);

    const activeCountry = countries.filter((country) => country.status === "active");

    return (
        <div ref={containerRef} className="lg:block md:hidden hidden">
            <motion.ul className="menu menu-horizontal px-1 text-[1rem]">
                <li id="li" className="text-[18px]">
                    <Link href="/about">About</Link>
                </li>

                {/* Destinations Dropdown */}
                <motion.li
                    className="relative text-[18px]"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <span id="li" className="cursor-pointer">Destinations</span>
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.ul
                                className="absolute left-0 top-full z-30 min-w-[350px] max-w-[500px] bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 p-3 shadow-lg border border-gray-300 overflow-y-scroll"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                            >
                                {countries.length > 0 ? (
                                    activeCountry.map((destination) => (
                                        <Link
                                            key={destination.country_name}
                                            href={`/destination/${destination.country_name.replace(/\s/g, "-")}`}
                                            onClick={() => {
                                                setIsDropdownOpen(false)
                                            }
                                            }
                                            className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg p-3 shadow-sm"
                                        >
                                            <Flag code={destination.country_code} className="w-8 h-6 mr-3" />
                                            <span className="text-sm font-medium text-wrap">{destination.country_name}</span>
                                        </Link>
                                    ))
                                ) : (
                                    <CircularLoader />
                                )}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </motion.li>


                {/* Prep Zone Dropdown */}
                <motion.li
                    className="relative text-[18px]"
                    onMouseEnter={() => setIsDropdownChallengeOpen(true)}
                    onMouseLeave={() => setIsDropdownChallengeOpen(false)}
                >
                    <span id="li" className="cursor-pointer">Prep Zone</span>
                    <AnimatePresence>
                        {isDropdownChallengeOpen && (
                            <motion.ul
                                className="absolute left-0 top-full z-30 min-w-[300px] max-w-[500px] bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 p-3 shadow-lg border border-gray-300"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                            >
                                {challenges.map((challenge) => (
                                    <Link
                                        key={challenge.name}
                                        href={challenge.link}
                                        onClick={() => setIsDropdownChallengeOpen(false)}
                                        className="bg-gray-50 hover:bg-gray-100 rounded-lg p-2 shadow-sm mb-1"
                                    >
                                        {challenge.name}
                                    </Link>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </motion.li>

                <li id="li" className="text-[18px]">
                    <Link href="/webinar">Webinar</Link>
                </li>
                <li id="li" className="text-[18px]">
                    <Link href="/career">Career</Link>
                </li>
                <li id="li" className="text-[18px]">
                    <Link href="/blog">Blog</Link>
                </li>
                <li id="li" className="text-[18px]">
                    <Link href="/contact">Contact</Link>
                </li>
            </motion.ul>
        </div>
    );
};

export default DropdownMenu;
