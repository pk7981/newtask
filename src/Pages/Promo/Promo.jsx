import React from 'react';
import './Promo.css';
import autofillImage from '../../assets/autofill.webp'; 


const Promo = () => {
  return (
    <div className="chrome-promo">
      <div className="promo-left">
        <img src={autofillImage} alt="Autofill example" className="autofill-image" />
      </div>
      <div className="promo-right">
        <h2>Customize your Chrome</h2>
        <p>Browse across devices</p>
        <h3>Save time with autofill</h3>
        <p>Use Chrome to save addresses, passwords and more to quickly autofill your details.</p>
        <button className="sign-in-button">Sign in to get started</button>
      </div>
    </div>
  );
};

export default Promo;
