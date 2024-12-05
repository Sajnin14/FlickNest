
const AddMovies = () => {
    
    const years = [];
    for (let i = 1900; i <= 2100; i++) {
        years.push(i);
    }
    return (
        <div className="w-11/12 mx-auto">

            <div className="py-16 px-40 rounded-xl">
                <h3 className="font-bold text-center text-gray-900 text-2xl my-5">Add New Movie</h3>

                <form>

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

                    {/* second-test */}
                    {/* <div>
                        <label htmlFor="options">Choose an option:</label>
                        <select id="options">
                            <option value="">Select...</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div> */}

                    {/* second row */}
                    <div className="md: flex gap-3">
                        <div className="form-control w-1/2">
                            <label htmlFor="options" className="label">
                                <span className="label-text">Genre:</span>
                            </label>
                            <select id="options" name='genre' className="input input-bordered" required>
                                <option value="">Select...</option>
                                <option value="drama">Drama</option>
                                <option value="classic">Classic</option>
                                <option value="thriller">Thriller</option>
                                <option value="comedy">Comedy</option>
                                <option value="action">Action</option>
                            </select>

                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="number" name='time' placeholder="movie duration(min.)" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* third test */}

                    {/* <select id="year" >
                        {years.map((yr) => (
                            <option key={yr} value={yr}>
                                {yr}
                            </option>
                        ))}
                    </select> */}

                    {/* third row */}

                    <div className="md: flex gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Realising Year</span>
                            </label>
                            <select id="year" name="year" className="input input-bordered" required>
                                {years.map((yr) => (
                                    <option key={yr} value={yr}>
                                        {yr}
                                    </option>
                                ))}
                            </select>
                            {/* <input type="text" name='category' placeholder="enter coffee category" className="input input-bordered" required /> */}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='rating' placeholder="enter movie ratings" className="input input-bordered" required />
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
                        <input type="submit" value="Add Movie" className="input input-bordered my-7 text-primary-content bg-red-700" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMovies;