import "./Products.css";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../../components/product/ProductCard";

function Products() {

    const { products } = useContext(ProductContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [sort, setSort] = useState("");

    const categories = [
        "All Categories",
        ...new Set(products.map((product) => product.category))
    ];

    let filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category !== "All Categories") {
        filteredProducts = filteredProducts.filter(
            (product) => product.category === category
        );
    }

    if (sort === "price-low") {
        filteredProducts.sort(
            (a, b) => Number(a.price) - Number(b.price)
        );
    }

    if (sort === "price-high") {
        filteredProducts.sort(
            (a, b) => Number(b.price) - Number(a.price)
        );
    }

    if (sort === "name-a") {
        filteredProducts.sort(
            (a, b) => a.name.localeCompare(b.name)
        );
    }

    if (sort === "name-z") {
        filteredProducts.sort(
            (a, b) => b.name.localeCompare(a.name)
        );
    }

    return (

        <section className="products-page">

            <div className="products-header">

                <h1 className="products-title">
                    Our Products
                </h1>

                <p className="products-description">
                    Browse and manage your inventory efficiently.
                </p>

            </div>

            <div className="products-toolbar">

                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    {categories.map((item) => (
                        <option
                            key={item}
                            value={item}
                        >
                            {item}
                        </option>
                    ))}

                </select>

                <select
                    className="sort-select"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >

                    <option value="">
                        Sort By
                    </option>

                    <option value="price-low">
                        Price : Low to High
                    </option>

                    <option value="price-high">
                        Price : High to Low
                    </option>

                    <option value="name-a">
                        Name : A - Z
                    </option>

                    <option value="name-z">
                        Name : Z - A
                    </option>

                </select>

            </div>

            <div className="products-grid">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (

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

                    <h2>No Products Found</h2>

                )}

            </div>

        </section>

    );

}

export default Products;