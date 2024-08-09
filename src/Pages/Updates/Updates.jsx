import React from "react";
import updates from '../../assets/updates.png'

import logo from '../../assets/chrome-logo-m100.svg'
import { MdArrowOutward } from "react-icons/md";
import './Updates.css'
const Updates = () => {
  return (
    <div className="update-container">
      <div className="update-heading">
        <h1>Discover the latest updates from Chrome</h1>
      </div>
      <div className="updates">
        <div className="automatic-update">
             <div className="update-content">
                <h3>UPDATES</h3>
                <h1>Automatic updates</h1>
                <p>There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.</p>
                <p><span>Learn about automatic updates
                  </span></p>         
             </div>
             <div className="update-image">
              <img src={updates} alt="" id="ui"/>
             </div>
        </div>
        <div className="latest-update">
        <div className="update-content">
                <h3>LATEST</h3>
                <h1>New from Chrome</h1>
                <p>Chrome regularly updates with tools and features that make it faster and easier to use..</p>
                <p> <span>Learn what’s new on Chrome</span> <span id="arrow"><MdArrowOutward color="blue" /></span></p>         
             </div>
             <div className="update-image">
              <img src={logo} alt="" id="ul" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
