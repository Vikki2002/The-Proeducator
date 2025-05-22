import Courses_component_Page from '@/components/UserDashBoard/cources/cource_component'
import Navigation from '@/components/UserDashBoard/Navigation'
import Sidebar from '@/components/UserDashBoard/Sidebar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <Courses_component_Page />
        </>
    )
}

export default page
