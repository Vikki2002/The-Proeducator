import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/shared/footer'
import SuccessStories from '@/components/success-stories/HomeStories'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <SuccessStories />
      <Footer />
    </>
  )
}

export default page
