import { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />

            <h2 className="product-name">{product.title}</h2>

            <p
              className="product-price"
              style={{
                color: product.price > 100 ? "red" : "green",
              }}
            >
              ${product.price}
            </p>

            <p className="product-category">{product.category}</p>

            <button className="product-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;