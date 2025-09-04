import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './pages/App.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/projects',
    Component: Projects,
  },
  {
    path: '/contact',
    Component: Contact,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
