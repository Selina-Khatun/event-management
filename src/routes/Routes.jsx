import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Categories from '../components/Categories/Categories';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')

      },
     
      {
        path: '/categories/:id',
        element: <PrivateRoute><Categories /></PrivateRoute>,
        loader: () => fetch('/data.json').then((response) => response.json())
      },

      {
        path: '/services',
        element: <PrivateRoute><Services></Services></PrivateRoute>,
        loader: () => fetch('/data.json')
      },

      {
        path: '/about',
        element:<PrivateRoute><About></About></PrivateRoute>
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