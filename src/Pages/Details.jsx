
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Details = () => {
    const {user} = useContext(AuthContext);
    const userEmail = (user.email);
    const navigate = useNavigate();
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
                fetch(`https://movie-server-gold.vercel.app/allmovies/${loaderData._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(() => {
                     
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    navigate('/allmovies');
                })

              
            }
          });
        
    }

    const newUserFav = {...loaderData, userEmail}
    const handleFavourite = () => {
        fetch('https://movie-server-gold.vercel.app/favorites', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUserFav)
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
                                {/* to='/allmovies' */}
                                        <Link ><button onClick={handleDelete} className="btn bg-[#b91c1c] text-primary-content">Delete</button></Link>
                                        <Link><button onClick={handleFavourite} className="btn bg-[#b91c1c] text-primary-content">Add To Favourite</button></Link> 
                                        <Link to={`/updates/${loaderData._id}`}><button className="btn bg-[#b91c1c] text-primary-content">Update Info</button></Link>

                                    
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Details;