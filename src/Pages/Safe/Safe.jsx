import React from 'react';
import './safe.css';

function Safe() {
  return (
    <div className="safe-browsing-container">
      <h1 className="safe-heading">
        Stay <span className="icon-safe">🔍</span> safe while you browse
      </h1>
      <div className="cards-container">
        <div className="card blue-card">
          <h2>Password Manager</h2>
          <p>Use strong passwords on every site.</p>
          <div className="password-inputs">
            <input type="text" value="elisa.beckett" readOnly className="username" />
            <div className="password-container">
              <input type="password" value="••••••••" readOnly className="password" />
              <span className="lock-icon">🔒</span>
            </div>
            <div className="saved-password-prompt">
              <p>Use Saved Password?</p>
              <input type="password" value="••••••••" readOnly className="saved-password" />
            </div>
          </div>
        </div>

        <div className="card light-blue-card">
          <div className="safety-check">
            <p>Safety check ran a moment ago</p>
            <ul>
              <li>Updates <span className="status">Chrome is up to date</span></li>
              <li>Password Manager</li>
            </ul>
          </div>
          <p>
            Chrome's Safety Check confirms the overall security and privacy of your browsing experience, including your saved passwords, extensions, and settings. If something needs attention, Chrome will help you fix it.
          </p>
          <a href="#" className="learn-more">Learn more about safety on Chrome</a>
        </div>

        <div className="card white-card">
          <h2>Enhanced Safe Browsing</h2>
          <p>Browse with the confidence that you're staying safer online.</p>
        </div>

        <div className="card dark-blue-card">
          <h2>Privacy Guide</h2>
          <p>Keep your privacy under your control with easy-to-use settings.</p>
        </div>
      </div>
    </div>
  );
}

export default Safe;