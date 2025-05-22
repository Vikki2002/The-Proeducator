"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import UpcomingWebinar from './UpcomingWebinar'
import PreviousWebinar from './PreviousWebinar'

const WebinarAndEventNavigation: string[] = ["Upcoming Webinar", "Previous Webinar"];

export default function Webinar_Component() {
    const [selectIndex, setIndex] = useState<number>(0);
    const WebinarIndex = (index: number) => {
        setIndex(index);
    }
    const renderComponent = () => {
        switch (selectIndex) {
            case 0:
                return <UpcomingWebinar />;
            case 1:
                return <PreviousWebinar />;
            default:
                return <UpcomingWebinar />;
        }
    }

    return (
        <section className='relative w-full mt-6 px-4 lg:px-0'>
            {/* Header Section */}
            <div className='flex lg:flex-row md:flex-row flex-col gap-6 items-center'>
                <div className='relative w-[600px] h-[300px] rounded-lg overflow-hidden'>
                    <Image
                        src="/webinar.jpg"
                        layout='fill'
                        objectFit='cover'
                        alt="Webinar"
                        className='rounded-lg'
                    />
                    <div className='absolute inset-0 bg-black opacity-40 flex items-center justify-center'></div>
                </div>
                <div className='flex flex-col justify-start gap-4'>
                    <h1 className='text-4xl font-bold font-serif text-gray-900'>Join Our Exclusive Webinar</h1>
                    <p className='text-lg text-gray-700'>Gain insights from industry experts and enhance your knowledge.</p>
                    <button className='btn bg-neutral hover:bg-gray-700 text-white px-6 py-3 text-lg rounded-md transition duration-300'>Register Now</button>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-4 w-full mt-6 border-b border-gray-300 pb-3">
                {WebinarAndEventNavigation.map((event, index) => (
                    <button
                        key={index}
                        onClick={() => WebinarIndex(index)}
                        className={`px-5 py-2 font-medium transition duration-300 border-b-2 ${index === selectIndex ? 'border-neutral text-neutral' : 'border-transparent text-gray-500 hover:text-neutral'}`}
                    >
                        {event}
                    </button>
                ))}
            </div>

            {/* Dynamic Component */}
            <div className='mt-6'>
                {renderComponent()}
            </div>
        </section>
    )
}
