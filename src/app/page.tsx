import Home from "@/components/Home"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/shared/footer"
import React from "react"


const page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default page
