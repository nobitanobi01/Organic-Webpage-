import React from "react";
import "./Reviews.css";
import customer1 from "../assets/client1.png";
import customer2 from "../assets/client2.png";
import promoBg from "../assets/testinomial-bg.jpg";
import img12 from "../assets/logo-leaf-new.png";

import img1 from "../assets/logo-1.svg";
import img2 from "../assets/logo-2.svg";
import img3 from "../assets/logo-3.svg";
import img4 from "../assets/logo-4.svg";
import img5 from "../assets/logo-5.svg";
import { FaShoppingCart } from 'react-icons/fa';



const ReviewCard = ({ rating, text, name, image }) => (
  <div className="card review-card">
    <div>
      <div className="stars">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <p className="description">{text}</p>
    </div>
    <div className="customer">
      <img src={image} alt={name} className="profile-img" />
      <span className="profile-name">{name}</span>
    </div>
  </div>
);

const PromoCard = () => (
  <div
    className="card promo-card card5"
    style={{ backgroundImage: `url(${promoBg})` }}
  >
    <div >
      <h3 className="promo-heading">Why Choose Us?</h3>
      <p className="promo-description">
        Discover the freshest organic produce at your doorstep. Trusted by thousands for quality and service.
      </p>
    </div>
    <button className="shop-btn"><FaShoppingCart size={18} />Shop Now</button>
  </div>
);

const ReviewsSection = () => {
  return (
    <>      
        <section className="reviews-section">
          <h1 className="section-title">Customer Reviews</h1>
          <img className="images" src={img12} alt="leaf" style={{
            mixBlendMode: 'multiply',
            backgroundColor: 'transparent', marginTop: "-50px", height: '30px', width: '80px',
          }} />
          <div className="card-container">
            <ReviewCard
              rating={5}
              text="The organic fruits I ordered were super fresh and delicious. Loved the packaging too!"
              name="Sophia Miller"
              image={customer1}
            />
            <PromoCard />
            <ReviewCard
              rating={4}
              text="Great customer service and on-time delivery. Highly recommended!"
              name="Liam Johnson"
              image={customer2}
            />
          </div>
        </section>

        <section className="images">
          <div className="contain">
            <img src={img1} alt="gallery1" className="gallery-img" />
            <img src={img2} alt="gallery2" className="gallery-img" />
            <img src={img3} alt="gallery3" className="gallery-img" />
            <img src={img4} alt="gallery4" className="gallery-img" />
            <img src={img5} alt="gallery5" className="gallery-img" />
          </div>
        </section>
    </>
   
  );
};

export default ReviewsSection;
