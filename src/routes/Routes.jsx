import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Categories from '../components/Categories/Categories';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';


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
        path: '/categories/:id',
        element: <Categories />,
        loader: () => fetch('/data.json').then((response) => response.json())
      },

      {
        path: '/services',
        element: <Services></Services>,
        loader: () => fetch('/data.json')
      },

      {
        path: '/about',
        element: <About></About>
      },

      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);


export default router;