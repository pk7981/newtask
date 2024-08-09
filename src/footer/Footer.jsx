// src/Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <span>Follow us</span>
        <div className="social-icons">
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div className="footer-links">
        {/* Footer Columns (as described earlier) */}
        <div className="footer-column">
          <h4>Chrome Family</h4>
          <ul>
            <li><a href="#">Other Platforms</a></li>
            <li><a href="#">Chromebooks</a></li>
            <li><a href="#">Chromecast</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Enterprise</h4>
          <ul>
            <li><a href="#">Download Chrome Browser</a></li>
            <li><a href="#">Chrome Browser for Enterprise</a></li>
            <li><a href="#">Chrome Devices</a></li>
            <li><a href="#">ChromeOS</a></li>
            <li><a href="#">Google Cloud</a></li>
            <li><a href="#">Google Workspace</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Education</h4>
          <ul>
            <li><a href="#">Google Chrome Browser</a></li>
            <li><a href="#">Devices</a></li>
            <li><a href="#">Web Store</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Dev and Partners</h4>
          <ul>
            <li><a href="#">Chromium</a></li>
            <li><a href="#">ChromeOS</a></li>
            <li><a href="#">Chrome Web Store</a></li>
            <li><a href="#">Chrome Experiments</a></li>
            <li><a href="#">Chrome Beta</a></li>
            <li><a href="#">Chrome Dev</a></li>
            <li><a href="#">Chrome Canary</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Stay Connected</h4>
          <ul>
            <li><a href="#">Chrome Help</a></li>
            <li><a href="#">Google Chrome Blog</a></li>
            <li><a href="#">Update Chrome</a></li>
            <li><a href="#">Chrome Tips</a></li>
            <li><a href="#">Google Chrome Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
