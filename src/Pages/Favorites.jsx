import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Favorites = () => {
    const { user } = useContext(AuthContext);
    const [updateFav, setUpdateFav] = useState([]);
    const userEmail = user.email;

    useEffect(() => {
        fetch(`https://movie-server-gold.vercel.app/favorites/email/${userEmail}`)
            .then(res => res.json())
            .then(data => setUpdateFav(data))
    }, [userEmail])

    const handleDeleteFav = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://movie-server-gold.vercel.app/favorites/id/${_id}`,{
                    method: 'DELETE',
                    headers: {
                        'content-type' : 'application/json'
                    }
                })
                .then(res => res.json())
                .then(() => {
                    const remaining = updateFav.filter(fav => fav._id !== _id);
                    setUpdateFav(remaining);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                })


              
            }
          });
        

    }

    return (
        <div className="w-11/12 mx-auto text-center">
            <h3 className="text-2xl font-semibold">Favourite of All Time</h3>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    updateFav.map(upFav => <div key={upFav._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-4 pt-10">
                                <img
                                    src={upFav.poster}
                                    alt="poster"
                                    className="rounded-xl w-72 h-64" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{upFav.title}</h2>
                                <p>Genre: {upFav.genreValue}</p>
                                <p>Duration: {upFav.time} minutes</p>
                                <p>Releasing Year: {upFav.yearValue}</p>

                                 
                                
                                <div className="card-actions">
                                    <Link><button onClick={() => handleDeleteFav(upFav._id)} className="btn bg-[#b91c1c] text-white">Delete Favourite</button></Link> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Favorites;