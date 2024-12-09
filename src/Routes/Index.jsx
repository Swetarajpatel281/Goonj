import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Components/Login'
import Result from '../Pages/Result'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUp from '../Pages/SignUp'


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
              path : '/result',
              element : <Result />
            },
            {
              path : '/signup',
              element : <SignUp />
            },
            {
              path : '/login',
              element : <Login/>
            },
          
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
