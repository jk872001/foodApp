import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Error from './pages/Error.jsx'
import RestroContainer from './components/RestroContainer.jsx'
import RestroDetails from './pages/RestroDetails.jsx'
import Cart from './pages/Cart/Cart.jsx'
// import Instamart from './pages/Instamart.jsx'


const Instamart = lazy(()=>import("./pages/Instamart.jsx"))

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<RestroContainer/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restro/:resId",
        element:<RestroDetails/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/instamart",
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
          <Instamart/>
          </Suspense>
        )
      },
    ],
    errorElement:<Error/>
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
