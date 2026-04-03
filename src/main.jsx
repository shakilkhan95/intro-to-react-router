import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root.jsx'
import Settings from './Settings.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    Component: Root,
    children: [
      {index: true, Component: App},
      {path: '/settings', Component: Settings}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
