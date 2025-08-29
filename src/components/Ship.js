import React from 'react';
import './Ship.css';
import { FaTruck } from 'react-icons/fa';
import { FaPiggyBank } from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';



function Ship() {
  return (
    
      <section className='box'>
        <div className='boxinner'>
          <div className="box1">
            <FaTruck size={40} color="rgb(70, 214, 17)" className="icon" />
            <div className="text">
              <p className="title">Free Shipping</p>
              <p className="subtitle">Above $5 only</p>
            </div>
          </div>
          <div className="box2">
            <FaMedal className="icon" size={40} color="rgb(70, 214, 17)"/>
            <div className="text">
              <p className="title">Certified Organic</p>
              <p className="subtitle">100% Guarantee</p>
            </div>
          </div><div className="box3">
            <FaPiggyBank className="icon" size={40} color="rgb(70, 214, 17)"/>
            <div className="text">
              <p className="title">Huge Saving</p>
              <p className="subtitle">At Lowst Price</p>
            </div>
          </div><div className="box4">
            <FaRecycle size={40} color="rgb(70, 214, 17)" className="icon" />
            <div className="text">
              <p className="title">Easy Returns</p>
              <p className="subtitle">No Question Asked</p>
            </div>
          </div>
        </div>
      </section>
    
  );
}

export default Ship;
