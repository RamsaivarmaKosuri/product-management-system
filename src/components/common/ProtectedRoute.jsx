import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ProtectedRoute({ children }) {

    const { isLoggedIn } = useContext(AuthContext);

    if (isLoggedIn === null) {

        return <h2>Loading...</h2>;

    }

    if (!isLoggedIn) {

        return <Navigate to="/login" replace />;

    }

    return children;

}

export default ProtectedRoute;