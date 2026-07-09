import "./Dashboard.css";

import {
    FaBoxOpen,
    FaTags,
    FaWarehouse,
    FaExclamationTriangle,
} from "react-icons/fa";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ProductContext";

import { AuthContext } from "../../context/AuthContext";

import StatisticsCard from "../../components/common/StatisticsCard";

function Dashboard() {

    const navigate = useNavigate();

    const { products } = useContext(ProductContext);

    const { logout } = useContext(AuthContext);

    const totalProducts = products.length;

    const totalCategories = [

        ...new Set(

            products.map(

                (product) => product.category

            )

        )

    ].length;

    const totalStock = products.reduce(

        (total, product) =>

            total + Number(product.stock || 0),

        0

    );

    const lowStockProducts = products.filter(

        (product) =>

            Number(product.stock) < 5

    ).length;

    const dashboardStats = [

        {
            icon: <FaBoxOpen />,
            value: totalProducts,
            title: "Total Products",
        },

        {
            icon: <FaTags />,
            value: totalCategories,
            title: "Total Categories",
        },

        {
            icon: <FaWarehouse />,
            value: totalStock,
            title: "Products In Stock",
        },

        {
            icon: <FaExclamationTriangle />,
            value: lowStockProducts,
            title: "Low Stock",
        },

    ];

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <section className="dashboard-page">

            <div className="dashboard-header">

                <h1>

                    Welcome Admin 👋

                </h1>

                <p>

                    Manage your products and inventory from here.

                </p>

            </div>

            <div className="dashboard-stats">

                {

                    dashboardStats.map((item) => (

                        <StatisticsCard

                            key={item.title}

                            icon={item.icon}

                            value={item.value}

                            title={item.title}

                        />

                    ))

                }

            </div>

            <div className="quick-actions">

                <h2>

                    Quick Actions

                </h2>

                <div className="action-buttons">

                    <button

                        onClick={() =>

                            navigate("/add-product")

                        }

                    >

                        Add Product

                    </button>

                    <button

                        onClick={() =>

                            navigate("/products")

                        }

                    >

                        Manage Products

                    </button>

                    <button

                        onClick={handleLogout}

                    >

                        Logout

                    </button>

                </div>

            </div>

            <div className="recent-products">

                <h2>

                    Recent Products

                </h2>

                {

                    products.length > 0 ? (

                        <table>

                            <thead>

                                <tr>

                                    <th>

                                        Product Name

                                    </th>

                                    <th>

                                        Category

                                    </th>

                                    <th>

                                        Price

                                    </th>

                                    <th>

                                        Stock

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    products.slice(0, 5).map((product) => (

                                        <tr key={product.id}>

                                            <td>

                                                {product.name}

                                            </td>

                                            <td>

                                                {product.category}

                                            </td>

                                            <td>

                                                ₹{product.price}

                                            </td>

                                            <td>

                                                {product.stock}

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    ) : (

                        <p>

                            No products available.

                        </p>

                    )

                }

            </div>

        </section>

    );

}

export default Dashboard;