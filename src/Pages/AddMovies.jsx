import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const AddMovies = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
    }

    // const onPointerMove = (value, index) => {
    //     console.log(value, index);
    // }



    const userEmail = user.email;

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




    const handleAddMovie = e => {
        e.preventDefault();
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const time = form.time.value;
        const summery = form.summery.value;


        if (title.length < 2) {
            toast.error('movie title should be at least 2 character', {
                position: 'top-center'
            });
            return;
        }
        
        
        else if (!yearValue) {
            toast.error('select year, please', {
                position: 'top-center'
            })
            return;
        }

        else if (!rating) {
            toast.error('submit rating, please', {
                position: 'top-center'
            })
            return;
        }
        else if (summery.length < 10) {
            toast.error('summery should be minimum 10 character', {
                position: 'top-center'
            });
            return;

        }

        else {
            const moviesValue = { poster, title, genreValue, time, yearValue, rating, summery, userEmail }

            fetch(`https://movie-server-gold.vercel.app/allmovies`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(moviesValue)
            })
                .then(res => res.json())
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Movie information has been saved",
                        confirmButtonText: 'Cool',
                    });
                    navigate('/');

                })
        }

    }


    return (
        <div className="w-11/12 mx-auto">

            <div className="py-16 px-40 rounded-xl">
                <h3 className="font-bold text-center text-2xl my-5">Add New Movie</h3>

                <form onSubmit={handleAddMovie}>

                    {/* first coumn */}
                    <div className="md:flex gap-3">
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
                                <option label="" value="">Select One</option>
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
                                <option label="" value="">Select Year</option>
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
                            <div className="inline-flex">
                                <Rating
                                    initialValue={rating}
                                    onClick={handleRating}
                                    // onPointerMove={onPointerMove}
                                    
                                    style={{ display: "inline-flex" }
                                    }

                            
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summery</span>
                        </label>
                        <textarea name="summery" className="input input-bordered" required></textarea>

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