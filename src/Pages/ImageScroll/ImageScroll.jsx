import React, { useRef } from 'react';
import './ImageScroll.css';

const ImageScroll = ({ images }) => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    containerRef.current.scrollBy({
      left: e.deltaY < 0 ? -100 : 100, 
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="image-container3"
      ref={containerRef}
      onWheel={handleScroll}
    >
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageScroll;
