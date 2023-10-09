import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import app from './firebase.config';
export const AuthContext =createContext(null);

const auth=getAuth(app);

const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const googleSignIn=(value)=>{
        // console.log('hello',value);
        return signInWithPopup(auth,googleProvider);
    }

// const signUp=(email, password)=>{
// return signInWithEmailAndPassword(auth, email, password)
// }

const register=(email,password)=>{
    return  createUserWithEmailAndPassword(auth,email,password)
}

    const AuthInfo={
        googleSignIn,
        // signUp,
        register,
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