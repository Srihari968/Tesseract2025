import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import "../../Components/Circularcarousel/CircularCarousel.css";
import EventCard from "../../Components/EventCard/EventCard";
import EventsData from "./data_j";
import EventCardMob from "../../Components/EventCard/EventCardMob";
import './Events.css';

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Events = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = EventsData.map((event, i) => ({
    key: i + 1,
    content: (
      <EventCard data={event} isFocused={i === index} />
    ),
    description: event.content,
    onClick: () => setIndex(i),
  }));

  useEffect(() => {
    let scrollTimeout; // Prevent multiple rapid scrolls
  
    const handleScroll = (event) => {
      event.preventDefault();
  
      // Debounce the scroll event
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (event.deltaX > 20) {  // Reduced threshold for smoother scrolling
          setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        } else if (event.deltaX < -20) {
          setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        }
      }, 100); // Delay to avoid multiple jumps
    };
  
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleScroll);
    }
  
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleScroll);
      }
      clearTimeout(scrollTimeout);
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

        <div className="stacked-events">
          {EventsData.map((event, i) => (
            <div key={i} className="mb-8 event-card-wrapper">
              {
                
              /* {isMobile ? (
                // <Popup trigger={<div className="event-card-wrapper"><EventCard data={event} /></div>} modal>
                //   {
                //     close => (
                //       <div>
                //         <button className="close-btn" onClick={() => close()}>✖</button>
                //         <h3>{event.heading}</h3>
                //         <p>{event.content}</p>
                //       </div>
                //     )
                // }
                // </Popup>
              ) : (
                <EventCard data={event} />
              )} */}
              <EventCardMob data={event} isFocused={false} />
              <br></br>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;