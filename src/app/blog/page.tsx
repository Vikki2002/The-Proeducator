import Blog from '../../components/blog/blog'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/shared/footer'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <main className='relative w-full'>
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default page
