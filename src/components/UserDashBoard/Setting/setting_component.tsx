"use client"
import { LogOutIcon } from 'lucide-react'
import React from 'react'
import { signOut } from "next-auth/react";
import Image from 'next/image';


export default function Setting_Component() {
    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
    };
    return (
        <div className='w-full max-w-7xl mx-auto mt-[4rem] space-y-8 p-6'>
            <div className='flex lg:flex-row md:flex-row flex-col gap-4'>
                <div className="avatar">
                    <div className="w-32 rounded-full overflow-hidden">
                        <Image 
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                            alt="User profile avatar"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                        />

                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold">John!</h1>
                </div>
            </div>
            <div className='mt-[2rem]'>
                <div
                    className='flex flex-col gap-2.5 mt-[3rem] p-6 bg-white rounded-lg shadow-lg w-[400px]'
                >
                    <h1 className='text-4xl text-info'>Account Preferences</h1>

                    <div className='flex flex-col justify-start gap-2.5 mt-4'>
                        <div className='flex flex-row gap-1'>
                            <span className='font-semibold'>Email : </span>
                            <span className='text-gray-500'>youremail@gmail.com</span>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <span className='font-semibold'>Phone Number : </span>
                            <span className='text-gray-500'>+1 234 567 890</span>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <span className='font-semibold'>Password : </span>
                            <span className='text-gray-500'>********</span>
                            <span className='text-info cursor-pointer font-semibold'>change</span>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={handleLogout}
                className="relative text-[18px] cursor-pointer flex items-center gap-5 p-2 hover:bg-base-300 rounded-md font-serif w-[300px] text-left"
            >
                <LogOutIcon size={20} />
                Logout
            </button>
        </div>
    )
}

