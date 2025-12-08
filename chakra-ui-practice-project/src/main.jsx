import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from './Component/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
   {
    path: "navbar",
    element: <Navbar />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
       <RouterProvider router={router}></RouterProvider> 
    
    </Provider>
  
  </StrictMode>,
)
