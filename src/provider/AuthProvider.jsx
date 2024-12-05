import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firbase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    console.log(user);

    const googleSign = () => {
        const signInWithGoogle = signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
                setLoader(true);
                toast.success('Login Successfull', { position: 'top-center' });
            })
            .catch(err => {
                toast.err(<p>{err.message} </p>, {
                    position: 'top-center'
                })
            })

        return signInWithGoogle;
    }
    
    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }


    useEffect(() => {
        const userStable = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false);
            }
            return () => {
                userStable();
            }
        })
    }, [])
    const authValue = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        googleSign,
        logOut,

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