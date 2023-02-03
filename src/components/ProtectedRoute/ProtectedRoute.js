import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Movies from "../Movies/Movies";

function ProtectedRoute({ component: Component, ...props }) {
    return props.loggedIn ?
        <Component 
        props={props}
        />
        :
        <Navigate to='/signin' />
}

export default ProtectedRoute;