import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import "../../Components/Circularcarousel/CircularCarousel.css";
import EventCard from "../../Components/EventCard/EventCard";
import EventsData from "./data5.0";

const Events = () => {
  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const carouselRef = useRef(null);

  const slides = EventsData.map((event, i) => ({
    key: i + 1,
    content: <EventCard data={event} isFocused={i === index}/>,
    description: event.content,
    onClick: () => setIndex(i)
  }));

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      } else if (event.deltaY < 0) {
        setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      }
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
  }, [index, slides.length]);

  return (
    <div className="relative mx-auto max-w-page_lg md:px-8 px-4 pt-32 overflow-hidden">
      <div className="font-hero text-center font-semibold text-4xl">Events</div>
      <div className="mt-8">
        <div className="carousel-container" ref={carouselRef}>
          <Carousel slides={slides} goToSlide={index} offsetRadius={2} animationConfig={{ tension: 120, friction: 14 }} />

          <div className="button-container flex justify-center mt-4">
            <button className="carousel-button" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>
              ◀ Prev
            </button>
            <button className="carousel-button" onClick={() => setIndex((index + 1) % slides.length)}>
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;