import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";


const Login = () => {
    const { signIn, setUser, googleSign } = useContext(AuthContext);
    const navigate = useNavigate();


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(res => {
                setUser(res.user);
                toast.success(<p>successfully login!</p>, {
                    position: 'top-center'
                })
                navigate('/');
            })
            .catch(err => {
                toast.error(<p>{err.message}</p>, {
                    position: 'top-center'
                })
            })
    };

    const handleGoogle = () => {
        googleSign();
        navigate('/');
    }
    return (
        <div>
            <div className="w-11/12 mx-auto p-12">
                <h2 className="text-center text-2xl font-semibold">Login Your Account</h2>
                <div className="card bg-base-100 mx-auto max-w-lg shrink-0 border my-5 p-3">
                    
                    {/* new form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register('password', { required: true })} placeholder="password" className="input input-bordered" />
                            <label className="label">

                                <Link className="label-text-alt link link-hover text-blue-600">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <input type="submit" className="btn bg-red-700 text-white" />
                        </div>

                    </form>

                    <p className="text-center text-sm">Do not have an account? <Link to='/auth/register' className="text-blue-700 underline font-semibold">Register</Link></p>


                    <button onClick={handleGoogle} className="btn bg-base-300 mt-12 mx-5"><FcGoogle className="text-xl"></FcGoogle> Sign-in With Google</button>

                </div>

                <ToastContainer position="top-center"></ToastContainer>
            </div>
        </div>
    );
};

export default Login;