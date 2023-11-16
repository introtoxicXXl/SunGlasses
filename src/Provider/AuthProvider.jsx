import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './../Firebase/Firebase.config';


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }




    const authInfo = {
        googleLogin,
        
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