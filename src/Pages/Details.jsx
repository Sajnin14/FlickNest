
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    
    const loaderData = useLoaderData();
    
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "It will permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allmovies/${loaderData._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data); 
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                })

              
            }
          });
        
    }


    const handleFavourite = () => {
        fetch('http://localhost:5000/favorites', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loaderData)
        })
        .then(res => res.json())
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "added to favourite list",
                confirmButtonText: 'Cool',
            });
        })
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
                                    
                                        <Link to='/allmovies'><button onClick={handleDelete} className="btn bg-[#b91c1c] text-primary-content">Delete</button></Link>
                                        <Link><button onClick={handleFavourite} className="btn bg-[#b91c1c] text-primary-content">Add To Favourite</button></Link> 
                                    
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Details;