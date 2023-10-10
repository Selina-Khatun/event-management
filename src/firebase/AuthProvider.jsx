import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading,setLoading]=useState(true);

    const googleSignIn = (value) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            // console.log("state changed");
            setUser(currentUser);
            setLoading(false);
        });

     return()=>{
        return unsubscribe();
     };
        
    }, []);

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    const AuthInfo = {
        googleSignIn,
        signIn,
        register,
        user,
        logOut,
        loading,
    };



    return (
        <AuthContext.Provider
            value={AuthInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;