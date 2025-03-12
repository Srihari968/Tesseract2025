import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import "../../Components/Circularcarousel/CircularCarousel.css"; // Import the CSS file
import ComingSoonCard from "../../Components/ComingSoonCard/ComingSoonCard";
import EventCard from "../../Components/EventCard/EventCard";
import EventsData from "./data5.0";

const images = EventsData.map((event, index) => ({
  key: index + 1,
  content: <EventCard data={event} flipLayout={1 % 2 === 1} key={index + 1} className="fix" />,
  description: event.content
}));

const Events = () => {
  const [index, setIndex] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");
  const carouselRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      if (event.deltaX / 200 > 1) {
        handleNavigation(index + 1); // Scroll down → Next slide
      } else if (event.deltaX / 200 < -1) {
        handleNavigation(index - 1); // Scroll up → Previous slide
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Prevents excessive scrolling by adding a delay
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, [index]);

  return (
    <div className="relative mx-auto max-w-page_lg md:px-8 px-4 pt-32 overflow-x-hidden overflow-y-hidden">
      <div className="font-hero text-center font-semibold text-4xl">Events</div>
      <div className="mt-8">
        <div className="carousel-container" ref={carouselRef}>
          <Carousel slides={slides} goToSlide={index} offsetRadius={2} animationConfig={{ tension: 120, friction: 14 }} />

          <div className="button-container flex justify-center mt-4">
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

        <div className="stacked-events">
          {images.map((image, i) => (
            <div key={i} className="mb-8">
              {image.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;