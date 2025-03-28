import React from 'react'
import  Header  from './components/Header/Header'
import  Footer  from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'   //   jaha outlet use hota hai => to hum uske andar ki chize change kar sakte hai

function Layout() {
    

    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
