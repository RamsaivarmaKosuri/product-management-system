import "./AddProduct.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import toast from "react-hot-toast";

function AddProduct() {

    const navigate = useNavigate();
    const { addProduct } = useContext(ProductContext);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        image: "",
        description: "",
    });

    const handleChange = (event) => {

        setProduct({
            ...product,
            [event.target.name]: event.target.value,
        });

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);

        setError("");

        if (!product.name.trim()) {
            setError("Product name is required");
            setLoading(false);
            return;
        }

        if (!product.category) {
            setError("Please select a category");
            setLoading(false);
            return;
        }

        if (Number(product.price) <= 0) {
            setError("Price must be greater than zero");
            setLoading(false);
            return;
        }

        if (product.stock === "" || Number(product.stock) < 0) {
            setError("Stock value is invalid");
            setLoading(false);
            return;
        }

        try {

            await addProduct({

                ...product,

                price: Number(product.price),

                stock: Number(product.stock),

            });

            toast.success("Product Added Successfully");

            navigate("/products");

        }

        catch (error) {

            console.error(error);

            toast.error("Failed to add product");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <section className="add-product-page">

            <div className="add-product-card">

                <h1 className="add-product-title">
                    Add New Product
                </h1>

                <p className="add-product-description">
                    Add products to your inventory management system.
                </p>

                {error && <p className="form-error">{error}</p>}

                <form className="product-form" onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Product Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter product name"
                            value={product.name}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Category</label>

                        <select
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Category
                            </option>

                            <option value="Electronics">
                                Electronics
                            </option>

                            <option value="Accessories">
                                Accessories
                            </option>

                            <option value="Furniture">
                                Furniture
                            </option>

                        </select>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Price</label>

                            <input
                                type="number"
                                name="price"
                                placeholder="Enter price"
                                value={product.price}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Stock Quantity</label>

                            <input
                                type="number"
                                name="stock"
                                placeholder="Enter quantity"
                                value={product.stock}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Product Image URL</label>

                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image URL"
                            value={product.image}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            name="description"
                            placeholder="Enter product description"
                            rows="5"
                            value={product.description}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        type="submit"
                        className="add-product-button"
                        disabled={loading}
                    >

                        {loading ? "Adding..." : "Add Product"}

                    </button>

                </form>

            </div>

        </section>

    );

}

export default AddProduct;