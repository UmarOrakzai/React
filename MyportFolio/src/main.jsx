import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Hero from './Components/Hero/Hero.jsx'
import Projects from './Components/Projects/Projects.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { githubLoader } from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element : <Hero/>
      },
      {
        path: "Projects",
        element: <Projects/>
      
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: 'github',
        element: <Github />,
        loader: githubLoader
      }
     
     
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
