import React from "react";
import "./TrendingProduct.css";
import img1 from "../assets/logo-leaf-new.png";

import product1 from "../assets/product4.jpg";
import product2 from "../assets/product9.jpg";
import product3 from "../assets/product10.jpg";
import product4 from "../assets/product8.jpg";

const products = [
  {
    id: 1,
    name: "Groceries",
    desc: "Natural Extracted Edible Oil",
    image: product1,
    price: "$15.99",
    rating: 3.5,
  },
  {
    id: 2,
    name: "Groceries",
    desc: "Cashew Butter",
    image: product2,
    price: "$10.49",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Groceries",
    desc: "Diabetic Cookies",
    image: product3,
    price: "$8.99",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Groceries",
    desc: "Fresh Orange Juice",
    image: product4,
    price: "$12.59",
    rating: 4.3,
  },
];

const TrendingProduct = () => {
  return (
    <div className="trending-container">
      <h1>Trending Products</h1>
      <img className="trending-leaf" src={img1} alt="leaf" />
      <div className="trending-products">
        {products.map((product) => (
          <div key={product.id} className="trending-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <div className="stars">
              {"★".repeat(Math.floor(product.rating))}
              {product.rating % 1 >= 0.5 ? "★" : ""}
            </div>
            <div className="price">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
