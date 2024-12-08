import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const AllMovies = () => {
    const { user } = useContext(AuthContext);
    const loaderData = useLoaderData();
    const [allMovies, setAllMovies] = useState(loaderData);
    const [search, setSearch] = useState('');
    // console.log(search);

    useEffect(() => {
        fetch(`http://localhost:5000/allmovies?searchParams=${search.title}`)
        .then(res => res.json())
        .then(data => {
            setAllMovies(data);
        })
    },[search])

    return (
        <div className="w-11/12 mx-auto">
            <h3 className="font-bold text-2xl my-2 text-center">All Movies: {allMovies.length}</h3>
            <div className="w-3/4 mx-auto my-7">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
                {
                    allMovies.map(loadMovie => <div key={loadMovie._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-4 pt-10">
                                <img
                                    src={loadMovie.poster}
                                    alt="poster"
                                    className="rounded-xl w-72 h-64" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{loadMovie.title}</h2>
                                <p>Genre: {loadMovie.genreValue}</p>
                                <p>Duration: {loadMovie.time} minutes</p>
                                <p>Releasing Year: {loadMovie.yearValue}</p>
                                <p>Rating: {loadMovie.rating}</p>


                                <div className="card-actions">
                                    {
                                        user && user?.email ? <Link to={`/details/${loadMovie._id}`}><button className="btn bg-[#b91c1c] text-primary-content">See Details</button></Link> :
                                            <Link to='/auth/login'><button className="btn bg-[#b91c1c] text-primary-content">See Details</button></Link>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllMovies;