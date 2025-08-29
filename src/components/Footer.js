import React from "react";
import "./Footer.css";
import logo from "../assets/organic-store-white-logo.png";
import Playstore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-brand">
        <img src={logo} alt="Organic Store" className="logos" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis,
          fugit illo magni corrupti sit totam corporis magnam consequatur, ex nihil
          voluptatum nemo explicabo, inventore harum fugiat maxime atque cum.
        </p>
      </div>

      <div className="footer-links-group">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Cart</li>
            <li>Checkout</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Site Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
            <li>Offers Coupon</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-app">
        <h4>Download Our Mobile App</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab animi pariatur molestiae vero, sit, expedita corrupti\
           recusandae beatae architecto aliquam obcaecati, vitae iste! Quam vero inventore impedit eveniet sequi ea.</p>
        <div className="store-badges">
          <img src={Playstore} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>

    </div>


  );
}

export default Footer;
