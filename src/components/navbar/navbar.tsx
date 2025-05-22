'use client';

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AuthForm from "../auth/authForm";
import DropdownMenu from "./dropdownmenu";
import { Award, BookOpen, FileText, GraduationCap, Heart, Home, MenuIcon, Settings, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
    { name: "dashboard", href: "/userdashboard", icon: Home },
    { name: "Universities", href: "/userdashboard/universities", icon: GraduationCap },
    { name: "Courses", href: "/userdashboard/courses", icon: BookOpen },
    { name: "Scholarships", href: "/userdashboard/schlorship", icon: Award },
    { name: "Favorites", href: "/favorites", icon: Heart },
    { name: "Applications", href: "/userdashboard/application", icon: FileText },
    { name: "Profile", href: "/userdashboard/profile", icon: User },
    { name: "Settings", href: "/userdashboard/setting", icon: Settings },
];

const Navbar: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState<number | null>(null);
    const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
    const [authType, setAuthType] = useState<'login' | 'signup'>('login');
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setScreenWidth(window.innerWidth);
            const updateWidth = () => setScreenWidth(window.innerWidth);
            window.addEventListener("resize", updateWidth);
            return () => window.removeEventListener("resize", updateWidth);
        }
    }, []);

    return (
        <>
            {/* Top Banner */}
            <div className="overflow-hidden w-full bg-base-300 py-1.5 px-4 md:px-10 lg:px-24">
                <motion.div
                    className="flex space-x-8 text-sm md:text-base font-bold whitespace-nowrap underline"
                    animate={{ x: [screenWidth || 0, 0] }}
                    transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
                >
                    Register now for our upcoming webinars!
                </motion.div>
            </div>

            {/* Main Navbar */}
            <div className="w-full bg-base-200 py-2 px-4 md:px-10 lg:px-24">
                <div className="flex items-center justify-between w-full h-16">
                    {/* Logo */}
                    <Link href="/" className="pl-2 sm:pl-4">
                        <Image
                            src="/logo.jpg"
                            alt="The ProEducator Logo"
                            width={160}
                            height={40}
                            className="w-auto h-10 object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex">
                        <DropdownMenu key={pathname} />
                    </div>

                    {/* Authenticated User Dropdown */}
                    {status === 'authenticated' && session ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="User avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                                <div className="flex flex-col justify-start items-center gap-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-[18px] flex flex-col justify-center items-center p-2 hover:bg-base-300 rounded-md font-serif"
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    ))}
                                </div>
                                <li className="text-secondary-content flex justify-start items-center p-2 hover:bg-base-300 rounded-md font-serif">
                                    <button className="text-[20px]" onClick={() => signOut()}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <motion.button
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
                            onClick={() => {
                                setAuthType('login');
                                setShowAuthModal(true);
                            }}
                            className="hidden md:inline-flex btn bg-info text-base-100 text-[1rem] rounded-[0.25rem]"
                        >
                            Join Us
                        </motion.button>
                    )}

                    {/* Mobile Hamburger */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="inline-flex lg:hidden mr-2">
                        <MenuIcon size={30} color="black" className="cursor-pointer" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md text-white z-50 transition-all duration-300 ease-in-out">
                    <div className="w-full relative px-6 sm:px-12">
                        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 text-3xl">
                            ✖
                        </button>
                        <div className="flex flex-col items-center gap-6 text-lg font-semibold mt-20">
                            <Link href="/" onClick={() => setMenuOpen(false)} className="text-white text-2xl">Home</Link>
                            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white text-2xl">About</Link>
                            <Link href="/destinations" onClick={() => setMenuOpen(false)} className="text-white text-2xl">Destinations</Link>
                            <Link href="/prepZone" onClick={() => setMenuOpen(false)} className="text-white text-2xl">Prep Zone</Link>
                            <Link href="/webinar" onClick={() => setMenuOpen(false)} className="text-white text-2xl">Webinar</Link>
                            <Link href="/career" onClick={() => setMenuOpen(false)} className="text-white text-2xl">Career</Link>
                            <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-white text-2xl">Blog</Link>
                            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white text-2xl">Contact</Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Auth Modal */}
            {showAuthModal && (
                <AuthForm
                    showModal={showAuthModal}
                    setShowModal={setShowAuthModal}
                    authType={authType}
                    setAuthType={setAuthType}
                />
            )}
        </>
    );
};

export default Navbar;
