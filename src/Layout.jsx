import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import WasteForm from './Components/Forminput/Forminput'
import Dashboard from './Components/Dashboard/Dashboard'
import WasteSolutionForm from './Components/Forminput/Forminput'
import Home from './Components/Home/Home'

function Layout() {
  return (
    <>
    {/* <WasteForm /> */}
    {/* <WasteSolutionForm /> */}
    {/* <Dashboard /> */}
    <Header />
    {/* <Home /> */}
    
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout