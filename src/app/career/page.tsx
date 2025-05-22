import Career from '@/components/career/Career'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/shared/footer'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar />
            <main className='w-full relative'>
                <Career />
            </main>
            <Footer />
        </>
    )
}
