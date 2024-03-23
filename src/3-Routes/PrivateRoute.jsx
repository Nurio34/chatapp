import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user } = useSelector((store) => store.auth);
    console.log(user);
    if (!user) {
        return <Navigate to={"/"} replace={true} />;
    }

    return children;
}

export default PrivateRoute;
