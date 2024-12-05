import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
    }
    return (
        <div>
            <div className="w-11/12 mx-auto p-12">
                <h2 className="text-center text-2xl font-semibold">Login Your Account</h2>
                <div className="card bg-base-100 mx-auto max-w-lg shrink-0 border my-5 p-3">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">

                                <Link className="label-text-alt link link-hover text-blue-600">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-red-700 text-white">Login</button>
                        </div>
                        
                    </form>

                    <p className="text-center text-sm">Do not have an account? <Link to='/auth/register' className="text-blue-700 underline font-semibold">Register</Link></p>


                    <button className="btn bg-base-300 mt-12 mx-5"><FcGoogle className="text-xl"></FcGoogle> Sign-in With Google</button>

                </div>

                <ToastContainer position="top-center"></ToastContainer>
            </div>
        </div>
    );
};

export default Login;