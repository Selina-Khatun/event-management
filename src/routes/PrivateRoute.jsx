import React, { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname)
    console.log(user);
    if (loading) {
        return <>
            <div class="h-screen bg-white">
                <div class="flex justify-center items-center h-full">
                    <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
                </div>
            </div>
        </>
    }


    if (user) {
     return children;

    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
    // return <Navigate state={location.pathname} to={`/login?prevPath=${location.pathname}`} replace> </Navigate>
};

export default PrivateRoute;