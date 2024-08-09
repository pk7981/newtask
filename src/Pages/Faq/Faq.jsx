import React, { useState } from 'react';
import './Faq.css';

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </div>
      {isOpen && <div className="faq-content">{content}</div>}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      title: "How do I make Chrome my default web browser?",
      content:
        "To make Chrome your default browser, go to your computer's settings and find the default apps section. Select Google Chrome as your default web browser."
    },
    {
      title: "How can I customise Chrome?",
      content:
        "You can customize Chrome by adding extensions, changing themes, and adjusting your privacy settings to suit your preferences."
    },
    {
      title: "What are Chrome's safety settings?",
      content:
        "Chrome includes built-in safety settings that help protect your data, such as Safe Browsing, password check, and privacy controls."
    },
    {
      title: "What is Chrome’s password manager?",
      content:
        "Chrome's password manager securely saves your passwords, making it easy to sign in to websites and apps without having to remember all your passwords."
    },
    {
      title: "How do I add a browser extension to Chrome?",
      content:
        "It’s easy to add extensions to Chrome for desktop. Simply visit the Chrome Web Store, find and select the extension you want, and click Add to Chrome. Some extensions might need additional permissions. To use the extension, click on its icon to the right of the address bar."
    }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FaqItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Faq;
