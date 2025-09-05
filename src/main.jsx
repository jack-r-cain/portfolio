import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './pages/App.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'

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
  {
    path: '/blog',
    Component: Blog,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
