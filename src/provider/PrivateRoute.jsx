import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <div className="w-2/4 mx-auto flex justify-center my-10">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>


};

PrivateRoute.propTypes = {
    children: PropTypes.object
}
export default PrivateRoute;