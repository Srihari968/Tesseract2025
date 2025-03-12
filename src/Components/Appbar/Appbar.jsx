import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import NavTile from "../NavTile/NavTile";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HiMenu } from "react-icons/hi";
import { Helmet } from "react-helmet";
import './AppBar.css';

GSAP.registerPlugin(ScrollTrigger);

function Appbar({ current }) {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [useMobileNav, setUseMobileNav] = useState(false);
  const scrollProgress = useRef();
  const navContainerRef = useRef();
  const appbarRef = useRef();
  const logoContainerRef = useRef();
  const resizeTimeoutRef = useRef(null);

  // Check if nav links overflow container
  const checkOverflow = () => {
    if (!navContainerRef.current || !appbarRef.current || !logoContainerRef.current) return;
    
    // Get available width for navigation
    const appbarWidth = appbarRef.current.getBoundingClientRect().width;
    const logoContainerWidth = logoContainerRef.current.getBoundingClientRect().width;
    const availableWidth = appbarWidth - logoContainerWidth - 40; // Subtract logo width and some padding
    
    // Get total width of nav links
    const navLinksWidth = navContainerRef.current.scrollWidth;
    
    // Set mobile nav if links would overflow
    setUseMobileNav(navLinksWidth > availableWidth);
  };

  useEffect(() => {
    // Initial check after a small delay to ensure everything is rendered
    const initialTimer = setTimeout(checkOverflow, 100);
    
    // Add resize listener with debounce
    const handleResize = () => {
      // Clear any existing timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      // Set a new timeout for debounce
      resizeTimeoutRef.current = setTimeout(() => {
        checkOverflow();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(initialTimer);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Force recheck when visibility might change
  useEffect(() => {
    const visibilityCheck = () => {
      if (document.visibilityState === 'visible') {
        setTimeout(checkOverflow, 100);
      }
    };
    
    document.addEventListener('visibilitychange', visibilityCheck);
    
    return () => {
      document.removeEventListener('visibilitychange', visibilityCheck);
    };
  }, []);

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
      <div 
        ref={appbarRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-opacity-60 border border-white/30 backdrop-blur-lg text-white rounded-full shadow-lg px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between w-[95%] sm:w-auto max-w-6xl transition-all duration-300 z-50 pill-shaped-header"
      >
        {/* Logo Container */}
        <div ref={logoContainerRef} className="flex items-center flex-shrink-0">
          <a href="https://iitdh.ac.in" className="flex-shrink-0">
            <img src="/IIT dh logo.png" alt="IIT Dharwad" className="w-[40px] h-[35px] sm:w-[52.3px] sm:h-[45.03px]" />
          </a>
          
          <a href="https://tesseract.iitdh.ac.in" className="flex-shrink-0 mx-2">
            <img src="/Images/Tesseract.png" alt="Tesseract" className="h-[30px] sm:h-[2vw] w-auto" />
          </a>
        </div>

        {/* Hidden Measurement Container - always rendered but not visible */}
        <div ref={navContainerRef} className="absolute opacity-0 pointer-events-none flex space-x-6 items-center">
          <NavButton content="Home" isActive={false} />
          <NavButton content="Events" isActive={false} />
          <NavButton content="Schedule" isActive={false} />
          <NavButton content="Team" isActive={false} />
          <NavButton content="Register" isActive={false} />
        </div>

        {/* Desktop Navigation - only shown if not using mobile nav */}
        {!useMobileNav && (
          <div className="flex space-x-6 items-center">
            <Link to="/home"><NavButton content="Home" isActive={current === "home"} /></Link>
            <Link to="/events"><NavButton content="Events" isActive={current === "events"} /></Link>
            <Link to="/schedule"><NavButton content="Schedule" isActive={current === "schedule"} /></Link>
            <Link to="/team"><NavButton content="Team" isActive={current === "team"} /></Link>
            <Link to="/register"><NavButton content="Register" isActive={current === "register"} /></Link>
          </div>
        )}

        {/* Mobile Menu Button - only shown when using mobile nav */}
        {useMobileNav && (
          <button 
            onClick={() => setMobileNavActive(!mobileNavActive)}
            className="text-2xl text-white flex-shrink-0"
            aria-label="Toggle navigation menu"
          >
            <HiMenu />
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md text-white rounded-lg shadow-md overflow-hidden transition-all duration-300 w-[90%] z-40 ${mobileNavActive && useMobileNav ? "h-auto py-4 px-6" : "h-0 py-0 px-0 opacity-0"}`}>
        <div className="flex flex-col space-y-3">
          <Link to="/home" onClick={() => setMobileNavActive(false)}><NavTile content="Home" isActive={current === "home"} /></Link>
          <Link to="/events" onClick={() => setMobileNavActive(false)}><NavTile content="Events" isActive={current === "events"} /></Link>
          <Link to="/schedule" onClick={() => setMobileNavActive(false)}><NavTile content="Schedule" isActive={current === "schedule"} /></Link>
          <Link to="/team" onClick={() => setMobileNavActive(false)}><NavTile content="Team" isActive={current === "team"} /></Link>
          <Link to="/register" onClick={() => setMobileNavActive(false)}><NavTile content="Register" isActive={current === "register"} /></Link>
        </div>
      </div>

      {/* Recalculate button for debugging - remove in production */}
      <button
        onClick={checkOverflow}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded z-50"
        style={{ display: 'none' }} // Hidden by default, make visible for debugging
      >
        Recalculate
      </button>
    </>
  );
}

export default Appbar;