import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        try {

            await signInWithEmailAndPassword(

                auth,

                email,

                password

            );

            login();

            toast.success("Login Successful");

            navigate("/dashboard");

        }

        catch (error) {

            if (error.code === "auth/invalid-credential") {

                setError("Invalid email or password");

            }

            else if (error.code === "auth/user-not-found") {

                setError("User not found");

            }

            else if (error.code === "auth/wrong-password") {

                setError("Incorrect password");

            }

            else {

                setError(error.message);

            }

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <section className="login-page">

            <div className="login-card">

                <h1 className="login-title">

                    Admin Login

                </h1>

                <p className="login-subtitle">

                    Sign in to access the Product Management Dashboard.

                </p>

                {

                    error &&

                    <p className="login-error">

                        {error}

                    </p>

                }

                <form

                    className="login-form"

                    onSubmit={handleSubmit}

                >

                    <div className="input-group">

                        <label>

                            Email

                        </label>

                        <input

                            type="email"

                            placeholder="Enter your email"

                            value={email}

                            onChange={(e) =>

                                setEmail(e.target.value)

                            }

                            required

                        />

                    </div>

                    <div className="input-group">

                        <label>

                            Password

                        </label>

                        <div className="password-group">

                            <input

                                type={

                                    showPassword

                                        ? "text"

                                        : "password"

                                }

                                placeholder="Enter your password"

                                value={password}

                                onChange={(e) =>

                                    setPassword(e.target.value)

                                }

                                required

                            />

                            <button

                                type="button"

                                className="show-password-button"

                                onClick={() =>

                                    setShowPassword(!showPassword)

                                }

                            >

                                {

                                    showPassword

                                        ? "Hide"

                                        : "Show"

                                }

                            </button>

                        </div>

                    </div>

                    <button

                        type="submit"

                        className="login-button"

                        disabled={loading}

                    >

                        {

                            loading

                                ? "Logging in..."

                                : "Login"

                        }

                    </button>

                </form>

            </div>

        </section>

    );

}

export default Login;