import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './../Firebase/Firebase.config';


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // google sign in
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create user with email password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        googleLogin,
        createUser,
        login,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;