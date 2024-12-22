import React, { useEffect, useState } from "react";
import "./Countdown.css";

export default function Countdown({ eventDate }) {
const [timeLeft, setTimeLeft] = useState({});

useEffect(() => {
    const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();
    if (difference > 0) {
        setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        });
    } else {
        setTimeLeft({});
    }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
}, [eventDate]);

const renderTime = (value, label) => (
    <div className="countdown-box">
        <div className="countdown-value">{value}</div>
        <div className="countdown-label">{label}</div>
    </div>
);

return (
    <div className="countdown-container">
        <div className="countdown-header">
        <h1 className="countdown-title">
            Countdown to <span className="highlight">PARSEC 5.0</span>
        </h1>
        </div>
        {Object.keys(timeLeft).length > 0 ? (
        <div className="countdown-timer">
            {renderTime(timeLeft.days, "Days")}
            {renderTime(timeLeft.hours, "Hours")}
            {renderTime(timeLeft.minutes, "Minutes")}
            {renderTime(timeLeft.seconds, "Seconds")}
        </div>
        ) : (
        <div className="countdown-complete">
            <h2>The wait is over! PARSEC 5.0 is here!</h2>
        </div>
        )}
    </div>
);
}
