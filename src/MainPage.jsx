import { Outlet } from "react-router-dom";
import Navbar from "./maincomponents/navbar/Navbar";
import Footer from "./maincomponents/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainPage = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>

           <ToastContainer></ToastContainer>
        </div>

    );
};

export default MainPage;