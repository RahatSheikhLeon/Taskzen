
import './App.css'
import { Entry } from './Entry'
import { Login } from './Login'
import { Signup } from './Signup'
import { Dashboard } from './Dashboard'
import { Taskcategorices } from './Taskcategorices'
import { Settings } from './Settings'
import { Help } from './Help'
import { Mytask } from './Mytask'
import { Logout } from './Logout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Entry />,
    children: [
      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/signup',
        element: <Signup />
      },

      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Dashboard />
          },
          {
            path: '/my-task',
            element: <Mytask />
          },
          {
            path: '/task-categories',
            element: <Taskcategorices />
          },
          {
            path: '/settings',
            element: <Settings />
          },
          {
            path: '/help',
            element: <Help />
          },

          {
            path: '/logout',
            element: <Logout />
          },
        ]
      },


    ]
  }
])


function App() {

  return (<RouterProvider router={router} />)
}

export default App
