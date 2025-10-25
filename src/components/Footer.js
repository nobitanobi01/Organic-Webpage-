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
          <strong>Organic Store</strong> is your one-stop destination for
          100% natural, sustainably sourced organic products. We partner with
          local farmers and trusted suppliers to deliver fresh, chemical-free
          groceries right to your doorstep.
        </p>
        <p style={{marginTop:"15px"}}>
          <b>Address:</b> 123 Green Street, Pune, India<br />
          <b>Email:</b> support@organicstore.com<br />
          <b>Phone:</b> +91 98765 43210
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
        <p> Get your favorite organic essentials delivered faster with our
          mobile app. Track orders, explore new arrivals, and enjoy exclusive
          app-only discounts.</p>
        <div className="store-badges">
          <img src={Playstore} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>

    </div>


  );
}

export default Footer;
