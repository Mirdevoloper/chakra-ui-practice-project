import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from './Component/Navbar.jsx'
import Mainarea from './Component/Mainarea/Mainarea.jsx'
import Section from './Component/Section/Section.jsx'
import Secondsection from './Component/Secondsection/Secondsection.jsx'

import Testimonial from './Component/testimonial/Testimonial.jsx'
import Sectionjslogo from './Component/Sectionlogo/Sectionjslogo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "navbar",
        element: <Navbar />
      },

       {
        path: "mainarea",
        element: <Mainarea />
      },
      {
        path: "section",
        element: <Section />
      },
      {
        path: "secondsection",
        element: <Secondsection />
      },
      {
        path: "sectionjslogo",
        element: <Sectionjslogo />
      },
      {
        path: "testimonial",
        element:<Testimonial />
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>

    </Provider>

  </StrictMode>,
)
