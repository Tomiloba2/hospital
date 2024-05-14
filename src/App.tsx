import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './core/Root'
import { HomeRoot } from './home/Root'
import { Home } from './home/pages/Home'
import { Departments } from './home/pages/Departments'
import { Department } from './home/pages/Department'
import { About } from './home/pages/About'
import { Contact } from './home/pages/Contact'
import { Hotline } from './home/pages/Hotline'

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomeRoot />,
          children: [
            { path: '/', element: <Home/> },
            { path: '/department', element: <Departments/> },
            { path: '/department/:id', element: <Department/> },
            { path: '/about', element: <About/> },
            { path: '/contact', element: <Contact/> },
            { path: '/hotline', element: <Hotline/> }
          ]
        }/* ,
        {
          path: '/services',
          children: [
            { path: '/services', element: '' },
            { path: '/packages', element: '' },
            { path: '/packages/:id', element: '' },
            { path: '/consultations', element: '' },
            { path: '/consultations/:id', element: '' },
            { path: '/more', element: '' }
          ]
        },
        {
          path: '/schedule',
          children: [
            { path: '/schedule', element: '' },
            { path: '/shedule/:id', element: '' },
            { path: '/department/:id', element: '' },
            { path: '/careers', element: '' },
            { path: '/company-policy', element: '' }
          ]
        } */
      ]
    }
  ])
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
