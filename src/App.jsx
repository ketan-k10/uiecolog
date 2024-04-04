import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Sidebar  from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import SignUp from './Components/Signup/Signup'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Login />} />

    )
  )
  return (
    <>
       <Navbar />
      {/* <Sidebar ></Sidebar> */}
      <Login />
      <SignUp />
      
    </>
  )
}

export default App
