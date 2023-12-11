import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div  className="bg-[#041821] min-h-screen">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
