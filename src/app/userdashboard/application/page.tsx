import Applications_COmponent_Page from '../../../components/UserDashBoard/applications/Application_component'
import Navigation from '../../../components/UserDashBoard/Navigation'
import Sidebar from '../../../components/UserDashBoard/Sidebar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <Applications_COmponent_Page />
        </>
    )
}

export default page
