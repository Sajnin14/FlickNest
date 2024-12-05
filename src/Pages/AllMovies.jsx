import { Link, useLoaderData } from "react-router-dom";


const AllMovies = () => {
    const loader = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            <h3 className="font-bold text-2xl text-gray-900 my-2 text-center">All Movies: {loader.length}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
                {
                    loader.map(loadMovie => <div key={loadMovie._id}>
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
                                
                                <div className="card-actions">
                                    <Link><button className="btn bg-[#b91c1c] text-primary-content">See Details</button></Link>
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