
import React, { useState, useEffect } from 'react';
import Hero from './Pages/HeroSection/HeroSection';
import Footer from './footer/Footer';
import Faq from './Pages/Faq/Faq';
import ExtendExperience from './Pages/ExtendExperience/ExtendExperience';
import Updates from './Pages/Updates/Updates';
import Promo from './Pages/Promo/Promo'
import ImageScroll from './Pages/ImageScroll/ImageScroll';
import image1 from "./assets/chrome-gallery-1.webp"
import image2 from './assets/chrome-gallery-2.webp'
import image3 from './assets/chrome-gallery-3.webp'
import image4 from './assets/chrome-gallery-4.webp'
import image5 from './assets/chrome-gallery-5.webp'
import DownloadCard from './Pages/DownloadCard/DownloadCard';
import Safe from './Pages/Safe/Safe';
function App() {

  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="App">
      <Hero/>
      <ImageScroll images={images}/>
      <Updates/>
      <Promo/>
      <ExtendExperience/>
      <Safe/>
      <Faq/>
      <DownloadCard/>
      <Footer/>
    </div>
  );
}

export default App;
