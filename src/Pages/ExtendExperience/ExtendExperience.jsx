// src/components/ExtendExperience.js

import React from 'react';
import './ExtendExperience.css';
import extensions from '../../assets/extensions.png';

import calendarIcon from '../../assets/calenderIcon.png'; 
import clipboardIcon from '../../assets/clipboardIcon.png'; 
import personIcon from '../../assets/personIcon.png';
import shoppingIcon from '../../assets/shoppingIcon.png'; 

const ExtendExperience = () => {
  return (
    <div className="extend-experience">
      <div className="content">
        <h1>Extend your experience</h1>
        <p>
          From shopping and entertainment to productivity, find extensions to improve
          your experience in the Chrome Web Store.
        </p>
        <button className="explore-button">
          Explore extensions <span>&#8594;</span>
        </button>
      </div>
      <div className="image-container2">
        <img src={extensions} alt="Chrome browser" className="chrome-image1" />
        <img src={calendarIcon} alt="Calendar Icon" className="icon calendar-icon" />
        <img src={clipboardIcon} alt="Clipboard Icon" className="icon clipboard-icon" />
        <img src={personIcon} alt="Person Icon" className="icon person-icon" />
        <img src={shoppingIcon} alt="Shopping Icon" className="icon shopping-icon" />
      </div>
    </div>
  );
};

export default ExtendExperience;
