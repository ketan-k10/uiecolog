import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import SignUp from './Components/Signup/Signup.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Marketplace from './Components/Marketplace/Marketplace.jsx'
import Events from './Components/Events/Events.jsx'
import Learnmore from './Components/Learnmore/Learnmore.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [{
      path:"",
      element: <SignUp />
    },
    {
      path:"login",
      element: <Login />
    },
    {
      path:"login/home",
      element: <Home />
    },
    {
      path:"dashboard",
      element: <Dashboard />
    },
    {
      path:"marketplace",
      element: <Marketplace />
    },
    {
      path:"events",
      element: <Events />
    },
    {
      path:"learnmore",
      element: <Learnmore />
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
