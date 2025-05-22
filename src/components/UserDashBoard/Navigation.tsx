"use client"

import Link from 'next/link'
import React from 'react'
import TextAnimation from '../navbar/logo'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
    GraduationCap, BookOpen, Award, Heart, FileText, Settings, User
} from "lucide-react";

const Navigation = () => {
    const pathname = usePathname();
    const toggleDrawer = () => {
        const drawerCheckbox = document.getElementById('my-drawer') as HTMLInputElement;
        if (drawerCheckbox) {
            drawerCheckbox.checked = !drawerCheckbox.checked;
        }
    };


    const navigation = [
        // { name: "Home", href: "", icon: Home },
        { name: "Universities", href: "/userdashboard/universities", icon: GraduationCap },
        { name: "Courses", href: "/userdashboard/courses", icon: BookOpen },
        { name: "Scholarships", href: "/userdashboard/schlorship", icon: Award },
        { name: "Favorites", href: "/favorites", icon: Heart },
        { name: "Applications", href: "/userdashboard/application", icon: FileText },
        { name: "Profile", href: "/userdashboard/profile", icon: User },
        { name: "Settings", href: "/userdashboard/setting", icon: Settings },
    ];
    return (
        <>
            <header className='h-[80px] z-40 fixed top-0 w-full flex items-center justify-between px-4 py-2 bg-base-200'>
                <Menu size={30} className='text-black cursor-pointer lg:hidden block' onClick={toggleDrawer} />
                <Link href="/userdashboard">
                    <TextAnimation key={pathname} />
                </Link>
                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-2'>
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className='text-[18px] flex flex-col justify-center items-center p-2 hover:bg-base-300 rounded-md font-serif'>
                            <item.icon />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </header>

        </>
    )
}
export default Navigation;