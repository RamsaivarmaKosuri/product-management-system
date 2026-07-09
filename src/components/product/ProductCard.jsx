import "./ProductCard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ProductContext } from "../../context/ProductContext";

function ProductCard({
    id,
    image,
    name,
    category,
    price
}) {

    const navigate = useNavigate();
    const { deleteProduct } = useContext(ProductContext);

    const handleDelete = () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (confirmDelete) {
            deleteProduct(id);
            toast.success("Product Deleted Successfully");
        }

    };

    const handleViewProduct = () => {
        navigate(`/product/${id}`);
    };

    return (

        <div className="product-card">

            <img
                src={image}
                alt={name}
                className="product-image"
                onClick={handleViewProduct}
                style={{ cursor: "pointer" }}
            />

            <div className="product-details">

                <h3
                    onClick={handleViewProduct}
                    style={{ cursor: "pointer" }}
                >
                    {name}
                </h3>

                <p>
                    Category: {category}
                </p>

                <p>
                    ₹{price}
                </p>

                <button
                    className="view-button"
                    onClick={handleViewProduct}
                >
                    View Details
                </button>

                <div className="product-actions">

                    <button
                        className="edit-button"
                        onClick={() => navigate(`/edit-product/${id}`)}
                    >
                        Edit
                    </button>

                    <button
                        className="delete-button"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;