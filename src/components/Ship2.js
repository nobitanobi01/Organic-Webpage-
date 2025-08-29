import React from 'react';
import './Ship2.css';
import { FaShoppingCart } from 'react-icons/fa';

function Ship2() {
  return (

    <>
      <section className='boxs'>
        <div className='boxinners'>
          <p>Get 25% off On Your First Purchase!</p>
          <div className='btn'><button><FaShoppingCart size={18} />  Shop now</button></div>

        </div>
      </section>
      <section className='boxss'>
        <p>Try It For Free. No Registration Needed.</p>
      </section>
    </>

  );
}

export default Ship2;
