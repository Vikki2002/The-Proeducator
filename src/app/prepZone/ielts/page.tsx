import Navbar from "@/components/navbar/navbar"
import IELTS from "@/components/prep-zone/IELTS"
import Footer from "@/components/shared/footer"


const page = () => {
    return (
        <main className="w-full">
            <Navbar />
            <IELTS />
            <Footer />
        </main>
    )
}


export default page