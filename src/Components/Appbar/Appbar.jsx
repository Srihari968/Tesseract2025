import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import NavTile from "../NavTile/NavTile";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Helmet } from "react-helmet";
import './AppBar.css';

GSAP.registerPlugin(ScrollTrigger);

function Appbar({ current }) {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const scrollProgress = useRef();

  useEffect(() => {
    const scrollContainer = document.getElementById("main-content");
    if (!scrollContainer || !scrollProgress.current) return;

    const ctx = GSAP.context(() => {
      const progressTimeLine = GSAP.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scroller: "#main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      progressTimeLine.from(scrollProgress.current, { scaleX: 0 });
    });

    return () => ctx.revert();
  }, [current]);

  return (
    <>
      <Helmet>
        <title>Tesseract - {current.charAt(0).toUpperCase() + current.slice(1)}</title>
      </Helmet>

      {/* Translucent Pill-Shaped Header */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-opacity-60 border border-white/30 backdrop-blur-lg text-white rounded-full max-w-fit shadow-lg px-6 py-4 flex items-center space-x-4 transition-all duration-300 z-50 pill-shaped-header">
        {/* Logo */}
        <a href="https://iitdh.ac.in">
          <img src="/IIT dh logo.png" alt="IIT Dharwad" className="w-[52.3px] h-[45.03px]" />
        </a>
        <img src="../../../public/Images/Tesseract.png" alt="Tesseract" className="h-[1.5vw] w-auto m-0 p-0" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/home"><NavButton content="Home" isActive={current === "home"} /></Link>
          <Link to="/events"><NavButton content="Events" isActive={current === "events"} /></Link>
          <Link to="/schedule"><NavButton content="Schedule" isActive={current === "schedule"} /></Link>
          <Link to="/team"><NavButton content="Team" isActive={current === "team"} /></Link>
          <Link to="/register"><NavButton content="Register" isActive={current === "register"} /></Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileNavActive(!mobileNavActive)}
          className={`md:hidden text-4xl text-white transition-transform duration-300 ${mobileNavActive ? "rotate-180" : ""}`}>
          <HiOutlineChevronDown />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-white text-black bg-opacity-90 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${mobileNavActive ? "h-auto py-4 px-6" : "h-0 py-0 px-0 opacity-0"}`}>
        <div className="flex flex-col space-y-2">
          <Link to="/home" onClick={() => setMobileNavActive(false)}><NavTile content="Home" isActive={current === "home"} /></Link>
          <Link to="/events" onClick={() => setMobileNavActive(false)}><NavTile content="Events" isActive={current === "events"} /></Link>
          <Link to="/schedule" onClick={() => setMobileNavActive(false)}><NavTile content="Schedule" isActive={current === "schedule"} /></Link>
          <Link to="/team" onClick={() => setMobileNavActive(false)}><NavTile content="Team" isActive={current === "team"} /></Link>
          <Link to="/cultural" onClick={() => setMobileNavActive(false)}><NavTile content="Cultural Events" isActive={current === "cultural"} /></Link>
          <Link to="/login" onClick={() => setMobileNavActive(false)}><NavTile content="Login" isActive={current === "login"} /></Link>
        </div>
      </div>
    </>
  );
}

export default Appbar;
