import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user } = useSelector((store) => store.auth);

    if (!user.displayName) {
        return <Navigate to={"/chatapp"} replace={true} />;
    }

    return children;
}

export default PrivateRoute;
