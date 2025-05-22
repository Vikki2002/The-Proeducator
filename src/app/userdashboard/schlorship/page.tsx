import Navigation from '../../../components/UserDashBoard/Navigation'
import Scholarships_Component_Page from '../../../components/UserDashBoard/schlorship/Schlorship_Component'
import Sidebar from '../../../components/UserDashBoard/Sidebar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <Scholarships_Component_Page />
        </>
    )
}

export default page
