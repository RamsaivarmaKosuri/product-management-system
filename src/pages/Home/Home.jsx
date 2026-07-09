import "../../assets/styles/Home.css";
import heroImage from "../../assets/images/hero-image.svg";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaBoxOpen,
    FaTags,
    FaWarehouse,
    FaExclamationTriangle,
    FaBolt,
    FaShieldAlt,
    FaChartLine,
    FaHeadset,
} from "react-icons/fa";

import ProductCard from "../../components/product/ProductCard";
import StatisticsCard from "../../components/common/StatisticsCard";
import FeatureCard from "../../components/common/FeatureCard";
import Footer from "../../components/layout/Footer";

import { ProductContext } from "../../context/ProductContext";

const features = [

    {
        id: 1,
        icon: <FaBolt />,
        title: "Fast Performance",
        description:
            "Manage your inventory quickly with a fast and user-friendly interface.",
    },

    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "Secure System",
        description:
            "Keep your product information safe with secure authentication and database storage.",
    },

    {
        id: 3,
        icon: <FaChartLine />,
        title: "Real-Time Analytics",
        description:
            "Track products, categories and stock levels with live updates.",
    },

    {
        id: 4,
        icon: <FaHeadset />,
        title: "Easy Management",
        description:
            "Add, edit and organize products effortlessly using a simple dashboard.",
    },

];

function Home() {

    const navigate = useNavigate();

    const { products } = useContext(ProductContext);

    const statistics = [

        {
            icon: <FaBoxOpen />,
            value: products.length,
            title: "Total Products",
        },

        {
            icon: <FaTags />,
            value: [...new Set(products.map(product => product.category))].length,
            title: "Total Categories",
        },

        {
            icon: <FaWarehouse />,
            value: products.reduce(
                (total, product) => total + Number(product.stock || 0),
                0
            ),
            title: "Products In Stock",
        },

        {
            icon: <FaExclamationTriangle />,
            value: products.filter(
                product => Number(product.stock) <= 5
            ).length,
            title: "Low Stock Products",
        },

    ];

    return (

        <>

            {/* Hero Section */}

            <section className="home-page">

                <div className="home-content">

                    <p className="small-heading">
                        Smart Inventory Solution
                    </p>

                    <h1 className="main-heading">
                        Manage Your Products
                        <br />
                        Faster & Smarter
                    </h1>

                    <p className="description-text">
                        A modern product management system that helps businesses
                        organize inventory, track products and manage operations
                        efficiently.
                    </p>

                    <div className="button-container">

                        <button
                            className="explore-button"
                            onClick={() => navigate("/products")}
                        >
                            Explore Products
                        </button>

                        <button
                            className="login-button"
                            onClick={() => navigate("/login")}
                        >
                            Admin Login
                        </button>

                    </div>

                </div>

                <div className="image-container">

                    <img
                        src={heroImage}
                        alt="Product Management"
                        className="home-image"
                    />

                </div>

            </section>


            {/* Statistics */}

            <section className="statistics-section">

                {
                    statistics.map((item) => (

                        <StatisticsCard
                            key={item.title}
                            icon={item.icon}
                            value={item.value}
                            title={item.title}
                        />

                    ))
                }

            </section>


            {/* Featured Products */}

            <section className="featured-products-section">

                <h2 className="section-title">
                    Featured Products
                </h2>

                <p className="section-description">
                    Explore our featured inventory products.
                </p>

                <div className="products-container">

                    {
                        products.length > 0 ? (

                            products.map((product) => (

                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    name={product.name}
                                    category={product.category}
                                    price={product.price}
                                />

                            ))

                        ) : (

                            <h3>No Products Available</h3>

                        )
                    }

                </div>

            </section>


            {/* Features */}

            <section className="features-section">

                <h2 className="section-title">
                    Why Choose Us
                </h2>

                <p className="section-description">
                    Everything you need to manage your inventory efficiently.
                </p>

                <div className="features-container">

                    {
                        features.map((feature) => (

                            <FeatureCard
                                key={feature.id}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />

                        ))
                    }

                </div>

            </section>


            {/* CTA */}

            <section className="cta-section">

                <h2 className="cta-title">
                    Ready to Manage Your Inventory?
                </h2>

                <p className="cta-description">
                    Start organizing your products, tracking stock, and managing your business with ease.
                </p>

                <button
                    className="cta-button"
                    onClick={() => navigate("/login")}
                >
                    Get Started
                </button>

            </section>

            <Footer />

        </>

    );

}

export default Home;