import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/layout/Layout';
import Shop from './components/Shop/Shop';
import Order from './components/orders/Order';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import cartContentLoader from './components/loader/cartLoader';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path: "/",
        element:<Shop></Shop>
      },
      {
        path: "/order",
        element:<Order></Order>,
        // loader:()=>fetch('product.json')
        loader:cartContentLoader,
      },
      {
        path: "/inventory",
        element:<Inventory></Inventory>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
