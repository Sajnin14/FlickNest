import Banner from "../Pages/HomePages/Banner";
import CelebritySection from "../Pages/HomePages/CelebritySection";
import FeaturedMovies from "../Pages/HomePages/FeaturedMovies";
import PricingPlans from "../Pages/HomePages/PricingPlans";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto space-y-12">
            <Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <CelebritySection></CelebritySection>
            <PricingPlans></PricingPlans>
        </div>
    );
};

export default Home;