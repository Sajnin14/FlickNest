import { useState } from "react";

const AddMovies = () => {

    const [genreValue, setGenreValue] = useState(null);
    const [yearValue, setYearValue] = useState('');
    
    const years = [];
    for (let i = 1990; i <= 2024; i++) {
        years.push(i);
    }

    const handleGenreChange = (e) => {
        setGenreValue(e.target.value);
    }

    const handleYearChange = e => {
          setYearValue(e.target.value);
    }

    const handleAddMovie = e =>{
        e.preventDefault();
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;

        // const genre = form.genre.value;
        // setGenreValue(genre);

        const time = form.time.value;

        // const year = form.year.value;
        // setYearValue(year);

        const rating = form.rating.value;
        const summery = form.summery.value;

        const moviesValue = {poster, title, genreValue, time, yearValue, rating, summery}

        console.log(poster, title, genreValue, time, yearValue, rating, summery);

        

        fetch(`http://localhost:5000/allmovies`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(moviesValue)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="w-11/12 mx-auto">

            <div className="py-16 px-40 rounded-xl">
                <h3 className="font-bold text-center text-gray-900 text-2xl my-5">Add New Movie</h3>

                <form onSubmit={handleAddMovie}>

                    {/* first coumn */}
                    <div className="md: flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="url" name='poster' placeholder="enter movie poster" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" name='title' placeholder="enter movie title" className="input input-bordered" required />
                        </div>
                    </div>


                    {/* second row */}
                    <div className="md: flex gap-3">
                        <div className="form-control w-1/2">
                            <label htmlFor="options" className="label">
                                <span className="label-text">Genre:</span>
                            </label>
                            <select onChange={handleGenreChange} id="options" name='genre' className="input input-bordered" required>
                                <option label="drama" value="drama">Drama</option>
                                <option label="classic" value="classic">Classic</option>
                                <option label="thriller" value="thriller">Thriller</option>
                                <option label="comedy" value="comedy">Comedy</option>
                                <option label="action" value="action">Action</option>
                            </select>

                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="number" name='time' placeholder="movie duration(min.)" className="input input-bordered" required />
                        </div>
                    </div>


                    {/* third row */}

                    <div className="md: flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Realising Year</span>
                            </label>
                            <select id="year" onChange={handleYearChange} name="year" className="input input-bordered" required>
                                {years.map((yr) => (
                                    <option key={yr} value={yr}>
                                        {yr}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='rating' step='0.1' min='0' max='5' placeholder="enter movie ratings" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summery</span>
                        </label>
                        <textarea name="summery" className="input input-bordered" required></textarea>
                        {/* <input type="text" name='photo' placeholder="enter coffee photo" className="input input-bordered" required /> */}
                    </div>

                    <div className="form-control">
                        <input type="submit" value="Add Movie" className="input input-bordered my-7 text-primary-content bg-red-800" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMovies;