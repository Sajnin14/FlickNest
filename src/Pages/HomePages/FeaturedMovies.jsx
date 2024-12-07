import { useEffect, useState } from "react";


const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allmovies')
        .then(res => res.json())
        .then(data => setMovies(data))
    }, [])

    // const topRatedMovies = [...movies]
    //     .sort((a, b) => b.rating - a.rating)
    //     .slice(0, 6);

        // 
    console.log(movies);
       
    return (
        <div>
            <h3 className="font-bold text-2xl text-gray-900 my-2 text-center">Featured <span className="text-red-700">Movies</span></h3>
            <p className='italic text-center'>A cozy hub for all your favourite films</p>
            {/* <p>{topRatedMovies.length}</p>      */}

        </div>
    );
};

export default FeaturedMovies;