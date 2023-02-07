import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
    return props.loggedIn ?
        <Component 
        props={props}
        />
        :
        <Navigate to='/signin' />
}

export default ProtectedRoute;