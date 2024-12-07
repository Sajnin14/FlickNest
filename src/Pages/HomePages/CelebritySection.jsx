import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CelebritySection = () => {
    const [celebrity, setCelebrity] = useState([]);
    useEffect(() => {
        fetch('/celebrity.json')
            .then(res => res.json())
            .then(data => setCelebrity(data))
    }, [])

    const agedCeleb = celebrity.sort((a, b) => b.age - a.age).slice(0, 3);
    return (
        <div className="text-center">
            <h3 className="font-bold text-2xl text-gray-900 my-2 text-center">Celebrity <span className="text-red-700">Chronicle</span></h3>
            <p className='italic text-center'>Where Every Star Has a Story.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                {
                    agedCeleb.map(celeb => <div key={celeb.id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-4 pt-10">
                                <img
                                    src={celeb.image_url}
                                    alt="poster"
                                    className="rounded-xl w-72 h-64" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{celeb.name}</h2>
                                <p>Total Movie: {celeb.number_of_movies}</p>
                                <p className="font-semibold">Viral Work: </p>
                                {
                                    celeb.most_popular_works.map((popular, idx) => <li key={idx}>{popular}</li>)
                                }
                                <p>Age: {celeb.age}</p>
                                <p>marital Status: {celeb.marital_status}</p>


                                <div className="card-actions">

                                    
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Link to='/celebrity'><button className="btn bg-[#b91c1c] text-primary-content my-10">See All Celebrity</button></Link>
        </div>
    );
};

export default CelebritySection;