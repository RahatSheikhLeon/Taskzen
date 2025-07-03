
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
import { Addtask } from './Addtask'
import { Layout } from './Layout'

import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

const [daynamicCategoriId, setDaynamicCategoriId] = useState('')
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
            element: <Mytask setDaynamicCategoriId ={setDaynamicCategoriId}/>
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

          {
            path: `/my-task/${daynamicCategoriId}/add-task`,
            element: <Addtask />
          },

          {
            path: "*",
            element: <p>404 not found</p>
          }

        ]
      },
    ]
  },

])


  return (<RouterProvider router={router} />)
}

export default App
