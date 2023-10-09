import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const googleSignIn = (value) => {
        // console.log('hello',value);
        return signInWithPopup(auth, googleProvider);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            console.log("state changed");
            setUser(currentUser);
        });

     return()=>{
        return unsubscribe();
     };
        
    }, []);

    const logOut=()=>{
        return signOut(auth);
    }


    const AuthInfo = {
        googleSignIn,
        signIn,
        register,
        user,
        logOut,
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