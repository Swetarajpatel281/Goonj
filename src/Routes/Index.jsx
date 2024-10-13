import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'

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
