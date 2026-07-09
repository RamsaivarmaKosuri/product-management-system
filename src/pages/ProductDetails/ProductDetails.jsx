import "./ProductDetails.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);

    const product = products.find(
    (item) => item.id === id
    );

    // Wait for Firestore to load products
    if (products.length === 0) {
        return (
            <section className="product-details-page">
                <h2>Loading...</h2>
            </section>
        );
    }

    if (!product) {

        return (

            <section className="product-details-page">

                <h1>Product Not Found</h1>

                <button
                    className="back-button"
                    onClick={() => navigate("/products")}
                >
                    Back to Products
                </button>

            </section>

        );

    }

    return (

        <section className="product-details-page">

            <div className="product-details-card">

                <div className="product-image-section">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="details-image"
                    />

                </div>

                <div className="product-info-section">

                    <h1>{product.name}</h1>

                    <p>
                        <strong>Category:</strong> {product.category}
                    </p>

                    <p>
                        <strong>Price:</strong> ₹{product.price}
                    </p>

                    <p>
                        <strong>Stock:</strong> {product.stock}
                    </p>

                    <p>
                        <strong>Description:</strong>
                    </p>

                    <p>
                        {product.description || "No description available."}
                    </p>

                    <div className="details-buttons">

                        <button
                            className="back-button"
                            onClick={() => navigate("/products")}
                        >
                            Back
                        </button>

                        <button
                            className="edit-button"
                            onClick={() => navigate(`/edit-product/${product.id}`)}
                        >
                            Edit Product
                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ProductDetails;