import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element :<App/>,
        children :[
            {
                path : '',
                element : <Home/>
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
