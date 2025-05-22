import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/shared/footer"
import Webinar_Component from "@/components/webinar_component/Webinar"

const Webinar = () => {
    return (<>
        <Navbar />
        <main className="w-full max-w-6xl mx-auto p-3.5">
        <Webinar_Component />
        </main>
        <Footer />
    </>)
}

export default Webinar