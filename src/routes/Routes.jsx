import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Categories from '../components/Categories/Categories';
import Register from '../pages/Register/Register';


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
      // {
      //   path: '/categories/:id',
      //   element: <Categories></Categories>,
      //   loader: () => fetch('/data.json')
      // },
      {
        path: '/categories/:id',
        element: <Categories />,
        loader: () => fetch('/data.json').then((response) => response.json()),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
         element:<Register></Register>
      }
    ]
  },
]);


export default router;