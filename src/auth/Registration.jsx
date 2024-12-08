import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Registration = () => {
    const {createUser, googleSign, setUser,  updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
   
    const handleRegister = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if(!passwordRegex.test(password)){
           setErrorMessage('The password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
           return;
        }
    
        createUser(email, password)
        .then(res => {
            setUser(res.user);
            updateUser({displayName: name, photoURL: photo
            })
            .then(navigate('/'))
            .catch(err => {
                alert(err);
            });
            navigate('/');
        })
        .catch(err => {
            toast.error(err.code);
        })

    }
    
    const handleGoogle = () =>{
        googleSign() ;
        navigate('/');  
    }


    return (
        <div>
            <div className="w-11/12 mx-auto p-12">
                <h2 className="text-center text-2xl font-semibold">Register To Explore</h2>
                <div className="card bg-base-100 mx-auto max-w-lg shrink-0 border my-5 p-3">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {
                            errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>
                        }
                        <div className="form-control mt-3">
                            <button className="btn bg-red-600 text-white">Register</button>

                        </div>
                    </form>

                    <p className="text-center text-sm">Already have an account? <Link to='/auth/login' className="text-blue-700 underline font-semibold">Login</Link></p>

                    <button onClick={handleGoogle} className="btn bg-base-300 mt-12 mx-5"><FcGoogle className="text-xl"></FcGoogle> Sign-in With Google</button>
                </div>

                <ToastContainer position="top-center"></ToastContainer>
            </div>
        </div>
    );
};

export default Registration;