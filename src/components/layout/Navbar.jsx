import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import "../../assets/styles/Navbar.css";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

    const { isLoggedIn, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            await logout();

            toast.success("Logged out successfully");

            navigate("/login");

        }

        catch (error) {

            toast.error(error.message);

        }

    };

    return (

        <nav className="navbar">

            <h2
                className="logo"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
            >

                📦 ProductHub

            </h2>

            <ul className="nav-links">

                <li>

                    <NavLink to="/">

                        Home

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/products">

                        Products

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/about">

                        About

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/contact">

                        Contact

                    </NavLink>

                </li>

                {

                    isLoggedIn &&

                    <li>

                        <NavLink to="/dashboard">

                            Dashboard

                        </NavLink>

                    </li>

                }

            </ul>

            {

                isLoggedIn ?

                    <button

                        className="login-btn"

                        onClick={handleLogout}

                    >

                        Logout

                    </button>

                    :

                    <NavLink to="/login">

                        <button className="login-btn">

                            Login

                        </button>

                    </NavLink>

            }

        </nav>

    );

}

export default Navbar;