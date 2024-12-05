import { NavLink } from "react-router-dom";
import './nav.css'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = <div className="flex flex-col md:flex-row gap-3 items-center font-semibold text-gray-900">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allmovies'>All Movies</NavLink>
        <NavLink to='/celebrity'>Celebrity-Cronicles</NavLink>
    </div>
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    {/* btn btn-ghost */}
                    <a className="text-2xl font-bold text-gray-900">Flick<span className="text-red-700">Nest</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end font-semibold">
                    {
                        user ? <div>
                            <button onClick={logOut} className="border border-gray-900 text-red-600 py-1 px-3 rounded-lg">log-out</button>
                        </div> : <div className="flex items-center gap-3">
                            <NavLink className='border border-red-700 py-1 px-2 rounded-lg' to='/auth/login'>Login</NavLink>
                            <NavLink className='border border-red-700 py-1 px-2 rounded-lg' to='/auth/register'>Register</NavLink>
                        </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;