import React from "react";
import "./Hero.css";
import bag1 from "../assets/organic-products-hero.png";
import img1 from "../assets/logo-leaf-new.png";
import bgImage from "../assets/leaves-free-img.png";
import { FaShoppingCart } from 'react-icons/fa';

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${bgImage})`,
      }}
    >
      <div className="hero-left">
        <img className="hero-image" src={bag1} alt="Bag" />
      </div>
      <div className="hero-content">
        <img className="leaf-image" src={img1} alt="leaf" />
        <h2>Best Quality Products</h2>
        <h3>Join The Organic <br /> Movement!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <button className="shopbtn">
          <FaShoppingCart size={18} className="shop" /> Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
