"use client"
import OurStrength from "../shared/OurStrength"
import AboutCounCard from "./AboutCountryCard"
import Offerings from "../shared/offering"
import Our_Mission from "../shared/Our_Mission"
import OurTeam from "./OurTeam"
import AboutCompanyHeader from "./About_Company_Header"
import Certifications from "./BritishCouncil"


const About: React.FC = () => {
    return (<>
        <main className="relative w-full h-full overflow-x-hidden">
            <AboutCompanyHeader />
            <Our_Mission />
            <OurStrength />
            <Offerings />
            <OurTeam />
            <Certifications />
            <AboutCounCard />
        </main>
    </>)
}

export default About