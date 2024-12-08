import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import PropTypes from 'prop-types'


const ThemeWrapper = ({children}) => {
    const {theme} = useContext(AuthContext)
    return (
        <div data-theme={theme}>
            {children}
        </div>
    );
};

ThemeWrapper.propTypes = {
    children: PropTypes.object
}
export default ThemeWrapper;