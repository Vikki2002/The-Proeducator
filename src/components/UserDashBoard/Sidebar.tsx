"use client";

import React from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Home, GraduationCap, BookOpen, Award, Heart, FileText, Settings, User, LogOut
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/userdashboard", icon: Home },
  { name: "Universities", href: "/userdashboard/universities", icon: GraduationCap },
  { name: "Courses", href: "/userdashboard/courses", icon: BookOpen },
  { name: "Scholarships", href: "/userdashboard/schlorship", icon: Award },
  { name: "Favorites", href: "/favorites", icon: Heart },
  { name: "Applications", href: "/userdashboard/application", icon: FileText },
  { name: "Settings", href: "/userdashboard/setting", icon: Settings },
  { name: "Profile", href: "/userdashboard/profile", icon: User },
];

const Sidebar = () => {
  // const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-[18px] flex items-center gap-5 p-2 hover:bg-base-300 rounded-md font-serif">
                <item.icon size={20} />
                {item.name}
              </Link>
            </li>
          ))}
          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="text-[18px] flex items-center gap-5 p-2 hover:bg-base-300 rounded-md font-serif w-full text-left"
            >
              <LogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
