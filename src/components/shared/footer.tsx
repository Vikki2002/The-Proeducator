'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Flag from 'react-world-flags';
import Image from 'next/image';
import {
  Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Globe, GraduationCap
} from 'lucide-react';

const studyDestinations = [
  { name: "UK", code: "GB", link: "/destinations/uk" },
  { name: "USA", code: "US", link: "/destinations/usa" },
  { name: "Canada", code: "CA", link: "/destinations/canada" },
  { name: "Australia", code: "AU", link: "/destinations/australia" },
  { name: "Germany", code: "DE", link: "/destinations/germany" },
  { name: "Ireland", code: "IE", link: "/destinations/ireland" },
  { name: "France", code: "FR", link: "/destinations/france" },
  { name: "Netherlands", code: "NL", link: "/destinations/netherlands" },
  { name: "New Zealand", code: "NZ", link: "/destinations/new-zealand" },
  { name: "Singapore", code: "SG", link: "/destinations/singapore" },
  { name: "Spain", code: "ES", link: "/destinations/spain" },
  { name: "Italy", code: "IT", link: "/destinations/italy" },
  { name: "Sweden", code: "SE", link: "/destinations/sweden" },
  { name: "Denmark", code: "DK", link: "/destinations/denmark" },
  { name: "Norway", code: "NO", link: "/destinations/norway" },
  { name: "Finland", code: "FI", link: "/destinations/finland" }
];

const footerSections = [
  {
    title: "Test Preparation",
    items: ["IELTS", "TOEFL", "PTE", "GRE", "GMAT", "SAT"],
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: "Quick Links",
    items: ["About Us", "Services", "Blog", "Contact", "Careers"],
    icon: <Globe className="w-5 h-5" />
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-yellow-50 via-amber-50 to-white overflow-hidden">
      {/* Animated Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], scaleY: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 w-full h-36 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-200 opacity-40 rounded-t-[100%]"
          style={{ transformOrigin: 'bottom' }}
        />
        <motion.div
          animate={{ y: [0, -16, 0], scaleY: [1, 1.15, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-0 w-full h-28 bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-100 opacity-30 rounded-t-[100%]"
          style={{ transformOrigin: 'bottom' }}
        />
        <motion.div
          animate={{ y: [0, -12, 0], scaleY: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute bottom-0 w-full h-24 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 opacity-20 rounded-t-[100%]"
          style={{ transformOrigin: 'bottom' }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info with Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ProEducator Logo"
                width={200}
                height={40}
                className="object-contain"
              />
           
            </div>
            <p className="text-gray-600">
              Your trusted partner in international education. Making your study abroad dreams a reality.
            </p>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-10 h-5 text-orange-500" />
                <span>EL, 9A Apsley Close, North Harrow, Harrow, United Kingdom, HA2 6DP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+44 7435773972</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>contact@theproeducator.com</span>
              </div>
            </div>
          </div>

          {/* Study Destinations */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Study Destinations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {studyDestinations.map(dest => (
                <a
                  key={dest.code}
                  href={dest.link}
                  className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition text-sm"
                >
                  <Flag code={dest.code} className="w-6 h-4 rounded" />
                  <span>{dest.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map(section => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                {section.icon}
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
     {/* Bottom Bar */}
<div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
  <p>© {new Date().getFullYear()} Prashant Kumar LTD | All rights reserved</p>
  <div className="flex gap-4">
    <a
      href="https://www.facebook.com/prashantkrsingh"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-orange-500 transition"
    >
      <Facebook className="w-5 h-5" />
    </a>
    <a
      href="https://twitter.com/prashantkrsingh"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-orange-500 transition"
    >
      <Twitter className="w-5 h-5" />
    </a>
    <a
      href="https://www.linkedin.com/company/theproeducator/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-orange-500 transition"
    >
      <Linkedin className="w-5 h-5" />
    </a>
    <a
      href="https://instagram.com/theproeducator"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-orange-500 transition"
    >
      <Instagram className="w-5 h-5" />
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
