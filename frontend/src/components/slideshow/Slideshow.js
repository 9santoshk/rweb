import React, { useState } from 'react';
import './slideshow.css'; // Import SCSS file for styling

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const slides = [
    { src: '../../assets/image/img1.jpg', alt: 'Image 1' },
    { src: '../../assets/image/img2.jpg', alt: 'Image 2' },
    { src: '../../assets/image/img3.jpg', alt: 'Image 3' }
  ];
 
  return (
    <div className="slideshow">
      <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        Previous
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slideshow;
