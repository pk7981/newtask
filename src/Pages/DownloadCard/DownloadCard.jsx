
import React from 'react';
import './DownloadCard.css';
import qr from '../../assets/qr-take-it-with-you.webp';

const ChromeDownloadCard = () => {
  return (
    <div className="chrome-download-container">
      <div className="chrome-download-card">
        <h2>Take your browser with you</h2>
        <p>
          Download Chrome on your mobile device or tablet and sign into your
          account for the same browser experience, everywhere.
        </p>
        <div className="chrome-download-button">
          <button>Download Chrome</button>
          <img
            src={qr} 
            alt="QR Code"
            className="chrome-qr-code"
          />
        </div>
        <p className="chrome-scan-text">Scan for the Chrome app</p>
      </div>
    </div>
  );
};

export default ChromeDownloadCard;

