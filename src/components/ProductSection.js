import React from "react";
import "./ProductSections.css";
import img1 from "../assets/logo-leaf-new.png";
import img2 from "../assets/basil-leaf.png";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import card1 from "../assets/product5.jpg";
import card2 from "../assets/product6.jpg";
import card3 from "../assets/product7.jpg";
import { FaShoppingCart } from 'react-icons/fa';


const products = [
  {
    id: 1,
    name: "Groceries",
    desc: "Assorted Coffee",
    image: product1,
    price: "$15.99",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Groceries",
    desc: "Hand Sanitizer",
    image: product2,
    price: "$10.49",
    rating: 3.0,
  },
  {
    id: 3,
    name: "Groceries",
    desc: "Handpicked Red Chilles",
    image: product3,
    price: "$8.99",
    rating: 4.0,
  },
  {
    id: 4,
    name: "Groceries",
    desc: "Natural Extracted Edible Oil",
    image: product4,
    price: "$12.59",
    rating: 2.5,
  },
];

const ProductSection = () => {
  return (
    <>
      <div className="best-selling-container">
        <h2>Best Selling Products</h2>
        <img
          className="images"
          src={img1}
          alt="leaf"
          style={{
            mixBlendMode: "multiply",
            backgroundColor: "transparent",
            marginTop: "-25px",
            height: "30px",
            width: "55px",
          }}
        />
        <div className="best-selling-products">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ fontSize: "12px", margin: "10px 0 5px", color: "#777" }}>{product.name}</h3>
              <p style={{ fontSize: "16px", marginBottom: "-5px" }}>{product.desc}</p>
              <div style={{ color: "#f5a623", margin: "8px 0" }}>
                {"★".repeat(Math.floor(product.rating))}
              </div>
              <div style={{ fontSize: "12px" }}>{product.price}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="mm">
        <img
          className="images1"
          src={img2}
          alt="leaf"
          style={{
            mixBlendMode: "multiply",
            backgroundColor: "transparent",
            marginTop: "60px",
            height: "60px",
            width: "120px",
          }}
        />
      </section>

      <section className="cards">
        <div className="card-container">
          {[
            {
              title: "Fram fresh Fruits",
              desc: "Explore our handpicked range of organic products.",
              image: card1,
            },
            {
              title: "Natural Wellness",
              desc: "Enhance your lifestyle with natural ingredients.",
              image: card2,
            },
            {
              title: "Eco-Friendly Living",
              desc: "Products that care for you and the planet.",
              image: card3,
            },
          ].map((item, index) => (
            <div className="info-card" key={index}>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="shopbtns"><FaShoppingCart size={18} />  Shop Now</button>
              </div>
              <img src={item.image} alt="Card" className="card-images" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductSection;
