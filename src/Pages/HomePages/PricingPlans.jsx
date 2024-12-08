import { FaCheck } from "react-icons/fa";
const PricingPlans = () => {
    return (
        <div>
            <h3 className="font-bold text-2xl my-2 text-center">Our <span className="text-red-700">Plans</span></h3>
            <p className='italic text-center'>Pay for What You Need, Enjoy What You Love.</p>

            <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="space-y-2 col-span-1">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is FlickNest?</div>
                        <div className="collapse-content">
                            <p>FlickNest is a movie web app for enjoying films with friends, featuring curated selections, progress tracking, and social interactions. Its designed for cozy movie nights or group viewings with tools like watchlists and recommendations</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Where Can I Watch?</div>
                        <div className="collapse-content">
                            <p>Watch anywhere, anytime. sign-up or login and enjoy movies.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How much does FlickNest Cost?</div>
                        <div className="collapse-content">
                            <p>It has two plans. One is basic and another one is premium</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="card bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">
                                Basic Plan
                                <div className="badge border border-red-700 rounded-full p-2">Free</div>
                            </h2>
                            <p>FlickNest basic plan is an free streaming option offering access to a limited number of movies</p>
                            <p ><FaCheck></FaCheck> Good Video Quality</p>
                            <p ><FaCheck></FaCheck> For your phone, tab and laptop</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                Premium Plan
                                <div className="badge badge-error">Most Popular</div>
                            </h2>
                            <p className="text-lg font-semibold">USD $3.41<span className="text-sm">/mon</span></p>
                            <p>FlickNest basic plan is an free streaming option offering access to a limited number of movies</p>
                            <p ><FaCheck></FaCheck> Best Video Quality</p>
                            <p ><FaCheck></FaCheck> Immersive Sound</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;