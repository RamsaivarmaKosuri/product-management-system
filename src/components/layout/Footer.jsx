import "./Footer.css";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand">

                        <h2 className="footer-logo">

                            Product Management System

                        </h2>

                        <p className="footer-description">

                            A modern inventory management application built using React. Manage products, inventory and dashboard analytics from one place.

                        </p>

                    </div>

                    <div className="footer-links">

                        <h3>

                            Quick Links

                        </h3>

                        <a href="/">

                            Home

                        </a>

                        <a href="/products">

                            Products

                        </a>

                        <a href="/about">

                            About

                        </a>

                        <a href="/contact">

                            Contact

                        </a>

                    </div>

                    <div className="footer-social">

                        <h3>

                            Connect

                        </h3>

                        <div className="social-icons">

                            <a href="#">

                                <FaGithub />

                            </a>

                            <a href="#">

                                <FaLinkedin />

                            </a>

                            <a href="mailto:admin@gmail.com">

                                <FaEnvelope />

                            </a>

                        </div>

                    </div>

                </div>

                <hr />

                <p className="footer-copyright">

                    © 2026 Product Management System. All Rights Reserved.

                </p>

            </div>

        </footer>

    );

}

export default Footer;