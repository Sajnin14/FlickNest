import { Outlet } from "react-router-dom";
import Navbar from "./maincomponents/navbar/Navbar";
import Footer from "./maincomponents/Footer";


const MainPage = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainPage;