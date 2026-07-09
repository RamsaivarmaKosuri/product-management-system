import "./About.css";

function About() {

    return (

        <section className="about-page">

            <div className="about-container">

                <h1>
                    About ProductHub
                </h1>

                <p>
                    ProductHub is a modern inventory management system
                    designed to help businesses manage products,
                    track stock levels, and organize inventory easily.
                </p>

                <div className="about-cards">

                    <div className="about-card">

                        <h2>
                            Easy Management
                        </h2>

                        <p>
                            Add, edit, delete and manage products
                            through a simple dashboard.
                        </p>

                    </div>

                    <div className="about-card">

                        <h2>
                            Smart Tracking
                        </h2>

                        <p>
                            Monitor product categories, stock levels,
                            and inventory details efficiently.
                        </p>

                    </div>

                    <div className="about-card">

                        <h2>
                            Secure System
                        </h2>

                        <p>
                            Admin authentication helps protect
                            product management operations.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;