import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import "./CircularCarousel.css"; // Import the CSS file

const images = [
  { 
    key: 1, 
    content: <img src="https://placehold.co/400" alt="1" className="carousel-img" />, 
    description: "This is the first image's description." 
  },
  { 
    key: 2, 
    content: <img src="https://placehold.co/400" alt="2" className="carousel-img" />, 
    description: "Description for the second image." 
  },
  { 
    key: 3, 
    content: <img src="https://placehold.co/400" alt="3" className="carousel-img" />, 
    description: "Third image has its own description here." 
  },
  { 
    key: 4, 
    content: <img src="https://placehold.co/400" alt="4" className="carousel-img" />, 
    description: "Fourth image, another unique description." 
  },
];

const CircularCarousel = () => {
  const [index, setIndex] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState(""); 

  const slides = images.map((image, i) => ({
    ...image,
    onClick: () => {
      setIndex(i);
      setSelectedDescription(image.description);
    },
  }));

  const handleNavigation = (newIndex) => {
    setIndex(newIndex);
    setSelectedDescription("");
  };

  return (
    <div className="carousel-container">
      <Carousel slides={slides} goToSlide={index} offsetRadius={2} animationConfig={{ tension: 120, friction: 14 }} />

      <div className="button-container">
        <button className="carousel-button" onClick={() => handleNavigation((index === 0 ? slides.length - 1 : index - 1))}>
          ◀ Prev
        </button>
        <button className="carousel-button" onClick={() => handleNavigation((index + 1) % slides.length)}>
          Next ▶
        </button>
      </div>

      {selectedDescription && (
        <div className="description-box">
          <p>{selectedDescription}</p>
        </div>
      )}
    </div>
  );
};

export default CircularCarousel;