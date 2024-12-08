import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { useContext} from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { IoMoon, IoPersonCircleOutline, IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
    const { user, logOut, changeTheme, themeActive } = useContext(AuthContext);
    


    const links = <div className="flex flex-col md:flex-row gap-3 items-center font-semibold">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allmovies'>All Movies</NavLink>
        {
            user?.email && <div className="flex gap-3 items-center"><NavLink to='/addmovies'>Add Movies</NavLink>
                <NavLink to='/favorites'>My Favorites</NavLink>
            </div>
        }

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

                    <a className="text-2xl font-bold">Flick<span className="text-red-700">Nest</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>

                <div className="navbar-end font-semibold flex items-center gap-1">


                    {/* from here theme  start */}
                      
                    <div className="flex items-center gap-2">
                        <button onClick={() => changeTheme('light')}
                            className={`${themeActive ? "underline text-yellow-500 text-2xl": "text-2xl " }`}><IoSunnyOutline ></IoSunnyOutline></button>
                        <button onClick={() => changeTheme('dark')}
                        className={`${themeActive ? "text-2xl" :" underline text-white text-2xl"}`} ><IoMoon></IoMoon></button>
                    </div>
                    
                    {/* theme end */}
                    {
                        user && user?.email ? <div>
                            <div className="relative flex flex-col items-center group">
                                <Link>
                                    <img src={user.photoURL} className="w-10 h-10 rounded-full border-2 border-green-600" />
                                    <p className="absolute w-2 h-2 bg-green-500 rounded-full top-0 right-1"></p>

                                    <p className="absolute hidden group-hover:block top-11 font-semibold">{user.displayName}</p>
                                </Link>

                            </div>

                        </div> : <p><IoPersonCircleOutline className="text-4xl"></IoPersonCircleOutline></p>
                    }

                    {
                        user && user?.email ? <div className="flex items-center gap-2">

                            <button onClick={() => logOut()} className="border border-gray-900 text-red-600 py-1 px-2 rounded-lg">log-out</button>
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