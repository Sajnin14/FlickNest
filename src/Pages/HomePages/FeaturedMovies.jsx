import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const FeaturedMovies = () => {
    const { user } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://movie-server-gold.vercel.app/allmovies')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])



    const topRatedMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 6);

    return (
        <div className="text-center">
            <h3 className="font-bold text-2xl my-2 text-center">Featured <span className="text-red-700">Movies</span></h3>
            <p className='italic text-center'>A cozy hub for all your favourite films</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    topRatedMovies.map(ratedMovies => <div key={ratedMovies._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-4 pt-10">
                                <img
                                    src={ratedMovies.poster}
                                    alt="poster"
                                    className="rounded-xl w-72 h-64" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{ratedMovies.title}</h2>
                                <p>Genre: {ratedMovies.genreValue}</p>
                                <p>Duration: {ratedMovies.time} minutes</p>
                                <p>Releasing Year: {ratedMovies.yearValue}</p>
                                <p>Rating: {ratedMovies.rating}</p>


                                <div className="card-actions">
                                    {
                                        user && user?.email ? <Link to={`/details/${ratedMovies._id}`}><button className="btn bg-[#b91c1c] text-primary-content">See Details</button></Link> :
                                            <Link to='/auth/login'><button className="btn bg-[#b91c1c] text-primary-content">See Details</button></Link>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <Link to='/allmovies'><button className="btn bg-gray-900 text-white mt-20 mb-10">See All Movies</button></Link>

        </div>
    );
};

export default FeaturedMovies;