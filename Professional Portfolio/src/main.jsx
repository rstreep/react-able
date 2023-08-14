import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Resume from './pages/Resume.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contactme',
        element: <ContactMe />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
