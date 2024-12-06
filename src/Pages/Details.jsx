import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    
    const handleDelete = () => {
        
    }

    return (
        <div className="w-1/2 mx-auto">
            <h3 className="text-center text-4xl font-bold my-5">{loaderData.title}</h3>
             
            <div className="card bg-base-100 shadow-xl">
                            <figure className="px-4 pt-10">
                                <img
                                    src={loaderData.poster}
                                    alt="poster"
                                    className="rounded-xl w-full h-96" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p>Genre: {loaderData.genreValue}</p>
                                <p>Duration: {loaderData.time} minutes</p>
                                <p>Releasing Year: {loaderData.yearValue}</p>
                                <p>rating: {loaderData.rating}</p>
                                <p>{loaderData.summery}</p>

                                 
                                
                                <div className="card-actions my-5">
                                    
                                        <Link><button onClick={handleDelete} className="btn bg-[#b91c1c] text-primary-content">Delete</button></Link>
                                        <Link><button className="btn bg-[#b91c1c] text-primary-content">Add To Favourite</button></Link> 
                                    
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Details;