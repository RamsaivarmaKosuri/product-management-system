import "./EditProduct.css";
import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import toast from "react-hot-toast";

function EditProduct() {

    const { id } = useParams();

    const navigate = useNavigate();

    const {

        products,

        updateProduct

    } = useContext(ProductContext);

    const existingProduct = products.find(

        (product) => product.id === id

    );

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState({

        id: "",

        name: "",

        category: "",

        price: "",

        stock: "",

        image: "",

        description: "",

    });

    useEffect(() => {

        if (existingProduct) {

            setProduct(existingProduct);

        }

    }, [existingProduct]);

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

            await updateProduct({

                ...product,

                price: Number(product.price),

                stock: Number(product.stock)

            });

            toast.success("Product Updated Successfully");

            navigate("/products");

        }

        catch (error) {

            console.error(error);

            toast.error("Failed to update product");

        }

        finally {

            setLoading(false);

        }

    };

    if (!existingProduct) {

        return (

            <section className="edit-product-page">

                <h1>Loading Product...</h1>

            </section>

        );

    }

    return (

        <section className="edit-product-page">

            <div className="edit-product-card">

                <h1 className="edit-product-title">

                    Edit Product

                </h1>

                {error && (

                    <p className="form-error">

                        {error}

                    </p>

                )}

                <form

                    className="product-form"

                    onSubmit={handleSubmit}

                >

                    <div className="form-group">

                        <label>Product Name</label>

                        <input

                            type="text"

                            name="name"

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

                            <option value="">Select Category</option>

                            <option value="Electronics">Electronics</option>

                            <option value="Accessories">Accessories</option>

                            <option value="Furniture">Furniture</option>

                        </select>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Price</label>

                            <input

                                type="number"

                                name="price"

                                value={product.price}

                                onChange={handleChange}

                            />

                        </div>

                        <div className="form-group">

                            <label>Stock</label>

                            <input

                                type="number"

                                name="stock"

                                value={product.stock}

                                onChange={handleChange}

                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Image URL</label>

                        <input

                            type="text"

                            name="image"

                            value={product.image}

                            onChange={handleChange}

                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea

                            rows="5"

                            name="description"

                            value={product.description}

                            onChange={handleChange}

                        />

                    </div>

                    <button

                        type="submit"

                        className="edit-product-button"

                        disabled={loading}

                    >

                        {loading ? "Updating..." : "Update Product"}

                    </button>

                </form>

            </div>

        </section>

    );

}

export default EditProduct;