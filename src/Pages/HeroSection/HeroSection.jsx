
import React, { useState } from "react";
import logo from "../../assets/logo.jpg";

import "./HeroSection.css";

const HeroSection = ({isNavbarSticky}) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${isNavbarSticky ? 'sticky' : ''}`}>
        <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logo">
          <img src={logo} alt="Chrome Logo" />
          <h4>chrome</h4>
        </div>
        <ul className="nav-links">
          <li>Home</li>

          <li>The Browser by Google</li>

          <li
            className="dropdown"
            onMouseEnter={() => setIsSupportOpen(true)}
            onMouseLeave={() => setIsSupportOpen(false)}
          >
            Features V
            {isSupportOpen && (
              <ul className="dropdown-menu">
                <li>Overview</li>
                <li>Google Address Bar</li>
                <li>password check</li>
                <li>use across devices</li>
                <li>Dark mode</li>
                <li>Tabs</li>
                <li>Articles</li>
                <li>Extension</li>
              </ul>
            )}
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setIsSupportOpen(true)}
            onMouseLeave={() => setIsSupportOpen(false)}
          >
            Support V
            {isSupportOpen && (
              <ul className="dropdown-menu">
                <li>Helpful Tips for Chrome</li>
                <li>Support</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Hero Section */}

      <div className="heroSection">
        <div className="heroSection-img">
          <img src={logo} alt="" />
        </div>
        <div className="heroSection-heading">
          <h1>
            The browser <br /> built to be yours
          </h1>
        </div>
        <div className="cta-texts">
          <span>Updates</span>
          <span>Yours</span>
          <span>Safe</span>
          <span>Fast</span>
          <span>By Google</span>
        </div>
        <div>
          <p>
            Need the Chrome installer?{" "}
            <a href="https://www.google.com/chrome/">Download here</a>.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;
