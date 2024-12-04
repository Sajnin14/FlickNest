import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firbase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) =>{
        loader(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () =>{
        const signInWithGoogle = signInWithPopup(auth, googleProvider)
        .then(() => {
            toast.success('Login Successfull', {position: 'top-center' });
        })
        .catch(err => {
            toast.err(<p>{err.message} </p>, {
                position: 'top-center'
            })
        })

        return signInWithGoogle;
    }



    const authValue = {
        loader,
      setLoader,
      createUser,
      googleSign,
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;