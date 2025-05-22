"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import JobSection from './JobSection';
import FAQCareer from './faqCareer';
import WhyWork from './WhyWork';



const Career = () => {

  return (
    <section className='w-full relative'>
      <div className="card lg:card-side bg-base-100 p-2 max-w-6xl mx-auto h-[500px] mt-[7.5rem] flex flex-col lg:flex-row items-center lg:items-start">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: false, }}
          transition={{ duration: 1 }}
          className="card-body text-center lg:text-left flex flex-col items-center lg:items-start px-4">
          <p className="text-blue-600 font-semibold text-lg sm:text-xl uppercase">
            Your Study Abroad Expert
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Come Aboard
            <span className='text-5xl text-info'> The Pro Educator</span> -ship
          </h1>
          <p className="text-gray-600 mt-6 text-base sm:text-lg">
            Ready to give your career the right boost?
            Be a part of India&apos;s fastest growing ed-tech company!
          </p>
        </motion.div>

        <Image
          src="/caareer.jpg"
          width={600}
          height={300}
          alt="Album"
          className="w-[600px] h-[300px] object-cover rounded-[0.25rem]"
        />
      </div>

      <JobSection />


      <WhyWork />

      <FAQCareer />
    </section>
  )
}

export default Career
