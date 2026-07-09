import "./NotFound.css";

import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    return (

        <section className="not-found-page">

            <div className="not-found-container">

                <h1 className="error-code">

                    404

                </h1>

                <h2 className="error-title">

                    Oops! Page Not Found

                </h2>

                <p className="error-description">

                    The page you are looking for doesn't exist or has been moved.

                </p>

                <button
                    className="home-button"
                    onClick={() => navigate("/")}
                >

                    Go Back Home

                </button>

            </div>

        </section>

    );

}

export default NotFound;