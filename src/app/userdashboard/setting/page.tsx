import Navigation from '../../../components/UserDashBoard/Navigation'
import Setting_Component from '../../../components/UserDashBoard/Setting/setting_component'
import Sidebar from '../../../components/UserDashBoard/Sidebar'
import React from 'react'

export default function Setting() {
    return (
        <>
            <Navigation />
            <Sidebar />
            <Setting_Component />
        </>
    )
}
