import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import "../../Components/Circularcarousel/CircularCarousel.css";
import EventCard from "../../Components/EventCard/EventCard";
import EventsData from "./data_j.json";

import './Test.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Test = () => {
    return(
        <div>
            <Popup trigger={<button>Trigger</button>} position="right center">
                <div>
                    {EventsData.map((event, index) => (
                        <p key={index} className="desc-content">{event.content}</p>
                    ))}
                </div>
            </Popup>
        </div>
    )
};

export default Test;