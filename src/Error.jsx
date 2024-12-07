import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-gray-600 flex justify-center items-center min-h-screen">
            <div className="text-center space-y-2">
                <h4 className="text-red-700 font-bold text-4xl">404!!</h4>
                <p className="text-primary-content">Page not found</p>
                <Link to='/'><button className="bg-gray-950 text-primary-content p-2 rounded-lg mt-4">Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;