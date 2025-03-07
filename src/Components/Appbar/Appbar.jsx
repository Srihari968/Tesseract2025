import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import NavTile from "../NavTile/NavTile";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Helmet } from "react-helmet";

GSAP.registerPlugin(ScrollTrigger);

function Appbar({ current }) {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const scrollContainer = document.getElementById("main-content");
  const scrollProgress = useRef();

  useEffect(() => {
    if (!scrollContainer && !scrollProgress.current) return;
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

      progressTimeLine.from(scrollProgress.current, {
        scaleX: 0,
      });
    });

    return () => ctx.revert();
  }, [current]);

  return (
    <>
      <Helmet>
        <title>Tesseract - {current.charAt(0).toUpperCase() + current.slice(1)}</title>
      </Helmet>
      <div
        className="container fixed top-0 left-0 max-w-full backdrop-blur-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        style={{ zIndex: 100 }}
      >
        <div className="mx-auto max-w-page_lg flex items-center justify-between px-4 h-20">
          <div className="md:w-1/4 flex items-center space-x-4">
            <a href="https://iitdh.ac.in">
              <img
                src="/IIT dh logo.png"
                alt="parsec logo"
                className="sm:w-[69.6px] sm:h-[60px] w-[52.3px] h-[45.03px]"
              />
            </a>
          </div>
          <div className="nav-options-desktop flex items-center justify-end md:w-3/4 max-[768px]:hidden">
            <div className="ml-4">
              <Link to="/home">
                <NavButton content="Home" isActive={current === "home"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/events">
                <NavButton content="Events" isActive={current === "events"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/schedule">
                <NavButton content="Schedule" isActive={current === "schedule"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/team">
                <NavButton content="Team" isActive={current === "team"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/register">
                <NavButton content="Register" isActive={current === "register"} />
              </Link>
            </div>
          </div>
          <div className="nav-mobile md:hidden">
            <button
              onClick={() => setMobileNavActive(!mobileNavActive)}
              className={`rounded-full mr-4 text-4xl ${
                mobileNavActive && "rotate-180"
              } ease-in-out duration-300 text-white`}
            >
              <HiOutlineChevronDown />
            </button>
          </div>
        </div>
        <div
          className={`nav-mobile-options h-100 overflow-hidden md:hidden ${
            !mobileNavActive && "h-0"
          } ease-in-out duration-300`}
          style={{ transformOrigin: "left top" }}
        >
          <div>
            <Link to="/home">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Home"
                isActive={current === "home"}
              />
            </Link>
          </div>
          <div>
            <Link to="/events">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Events"
                isActive={current === "events"}
              />
            </Link>
          </div>
          <div>
            <Link to="/schedule">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Schedule"
                isActive={current === "schedule"}
              />
            </Link>
          </div>
          <div>
            <Link to="/team">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Team"
                isActive={current === "team"}
              />
            </Link>
          </div>
          <div>
            <Link to="/cultural">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Cultural Events"
                isActive={current === "cultural"}
              />
            </Link>
          </div>
          <div>
            <Link to="/login">
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content="Login"
                isActive={current === "login"}
              />
            </Link>
          </div>
        </div>
        <div className="w-full" style={{ height: "2px" }}>
          <div
            className="h-full w-full bg-orange-400"
            style={{ transformOrigin: "left top" }}
            ref={scrollProgress}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Appbar;