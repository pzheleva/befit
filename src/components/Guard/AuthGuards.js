import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const isAuth = (Component) => {
    const Wrapper = (props) => {
        const {userInfo} = useContext(AuthContext);
        const isAuthenticated = userInfo.isAuth;

        return isAuthenticated ? <Component {...props}/> : <Navigate to="/login" />
    }

    return Wrapper;
}