import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import SignUp from '../Pages/SignUp'
import LoginPage from '../Pages/Login'
const router = createBrowserRouter([
    {
        path: "/",
        element :<App/>,
        children :[
            {
                path : '',
                element : <Home/>
            },
            {
              path : '/about',
              element : <About />
            },
            {
              path : '/contact',
              element : <Contact />
            },
            {
              path : '/signup',
              element : <SignUp />
            },
            {
              path : '/login',
              element : <LoginPage />
            }
        ]
    }
])

const Index = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Index
