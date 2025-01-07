import { FaCheck } from "react-icons/fa";
const PricingPlans = () => {
    return (
        <div>
            <h3 className="font-bold text-2xl my-2 text-center">Our <span className="text-red-700">Plans</span></h3>
            <p className='italic text-center'>Pay for What You Need, Enjoy What You Love.</p>

            <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* card for basic plan */}
                <div className="card bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">
                            Basic Plan
                            <div className="badge border border-red-700 rounded-full p-2">Free</div>
                        </h2>
                        <p>FlickNest basic plan is an free streaming option offering access to a limited number of movies</p>
                        <p ><FaCheck></FaCheck> Good Video Quality</p>
                        <p ><FaCheck></FaCheck> For your phone, tab and laptop</p>
                        <p ><FaCheck></FaCheck>All movies may not be available</p>
                    </div>
                </div>

                {/* cart for moderate plan */}
                <div className="card bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">
                            Moderate Plan
                        </h2>
                        <p className="text-lg font-semibold">USD $1.33<span className="text-sm">/mon</span></p>
                        <p>Access a curated movie library in HD with limited ads.</p>
                        <p ><FaCheck></FaCheck> Good Video Quality</p>
                        <p ><FaCheck></FaCheck> For your phone, tab and laptop</p>
                        <p ><FaCheck></FaCheck> Most movies are available</p>
                    </div>
                </div>


                {/* Cart for uppremium plan */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            Premium Plan
                            <div className="badge badge-error">Most Popular</div>
                        </h2>
                        <p className="text-lg font-semibold">USD $3.41<span className="text-sm">/mon</span></p>
                        <p>Enjoy the full library ad-free in 4K with exclusive content.</p>
                        <p ><FaCheck></FaCheck> Best Video Quality</p>
                        <p ><FaCheck></FaCheck> Immersive Sound</p>
                        <p ><FaCheck></FaCheck> All movies are available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;