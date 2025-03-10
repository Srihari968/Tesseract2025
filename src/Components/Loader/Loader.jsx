import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei"; // Tracks asset loading
import "./Loader.css"; // Import styles

const Loader = ({ onFinish }) => {
    const { progress } = useProgress(); // Get actual asset loading progress
    const [displayProgress, setDisplayProgress] = useState(0); // Fake smooth progress
    const [minTimePassed, setMinTimePassed] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    // Smoothly update progress (prevents sudden jumps)
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayProgress((prev) => {
                const nextValue = prev + Math.random() * 20; // Increment by a small random value
                return Math.min(nextValue, progress); // Ensure it doesn’t go past actual progress
            });
        }, 100);

        return () => clearInterval(interval);
    }, [progress]);

    // Ensure the loader stays for at least 3 seconds
    useEffect(() => {
        const minTime = setTimeout(() => setMinTimePassed(true), 1000);
        return () => clearTimeout(minTime);
    }, []);

    // Fade out only after assets are fully loaded and 3 seconds have passed
    useEffect(() => {
        if (displayProgress >= 100 && minTimePassed) {
            setFadeOut(true);
            setTimeout(onFinish, 1000); // Wait for fade-out animation
        }
    }, [displayProgress, minTimePassed, onFinish]);

    return (
        <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
            <img src="../../../public/gifs/hypercube_md.gif" alt="Loading..." className="loader-gif" />
            <p className="loading-text">Your Experience is {Math.round(displayProgress)}% Loaded</p>
        </div>
    );
};

export default Loader;