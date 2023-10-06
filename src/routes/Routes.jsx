import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
            loader: () => fetch('/data.json')
        
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);


export default router;