import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {AuthUser} from "../../store/store";
import LoginPage from "./LoginPage";

// @ts-ignore
const RequireAuth = ({children}) => {
    const location = useLocation();
    const auth = AuthUser.getState().auth;

    if (!auth) {
        return <Navigate to={<LoginPage/>}/>
    }
    return children;
};

export default RequireAuth;
