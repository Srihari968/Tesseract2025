import { useEffect, useRef, useState } from "react"
import NavButton from "../NavButton/NavButton"
import NavTile from "../NavTile/NavTile"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { HiOutlineChevronDown } from "react-icons/hi"
import { Link,useLocation,useNavigate  } from "react-router-dom";

GSAP.registerPlugin(ScrollTrigger)
function Appbar({ current }) {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const [userId, setUserId] = useState(null);
  const [parsecId, setParsecId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollContainer = document.getElementById("main-content")
  const scrollProgress = useRef()
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const googleId = queryParams.get("googleId");
    const parsecIdValue = queryParams.get("parsecId");

    if (googleId) {
      setUserId(googleId);
      localStorage.setItem("googleId", googleId);
    } else {
      const storedGoogleId = localStorage.getItem("googleId");
      if (storedGoogleId) {
        setUserId(storedGoogleId);
      }
    }

    if (parsecIdValue) {
      setParsecId(parsecIdValue);
      localStorage.setItem("parsecId", parsecIdValue);
    } else {
      const storedParsecId = localStorage.getItem("parsecId");
      if (storedParsecId) {
        setParsecId(storedParsecId);
      }
    }
  }, [location]);

  useEffect(() => {
    if (!scrollContainer && !scrollProgress.current) return
    const ctx = GSAP.context(() => {
      const progressTimeLine = GSAP.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scroller: "#main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      progressTimeLine.from(scrollProgress.current, {
        scaleX: 0,
      })
    })

    return () => ctx.revert()
  }, [current])

  return (
    <>
      <div
        className="container fixed top-0 left-0 max-w-full backdrop-blur-sm bg-black bg-opacity-10"
        style={{ zIndex: 100 }}
      >
        <div className="mx-auto max-w-page_lg flex items-center justify-between px-4 h-20">
          <div className="md:w-1/4 flex items-center space-x-4">
            <a href="https://iitdh.ac.in">
            <img
              src="/IIT dh logo.png"
              alt="parsec logo"
              className="sm:w-[69.6px] sm:h-[60px] w-[52.3px] h-[45.09px]"
            />
            </a>
            <div className="w-[2px] h-[36px] bg-white"></div>
            <a href="/home">
            <img
              src="/Images/parsec-logo.png"
              alt="parsec logo"
              className="sm:w-[auto] sm:h-[36px] w-[auto] h-[27px]"
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
              <Link to="/team">
                <NavButton content="Team" isActive={current === "team"} />
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/cultural">
                <NavButton
                  content="Cultural"
                  isActive={current === "cultural"}
                />
              </Link>
            </div>
            <div className="ml-4">
              <Link to={
                userId && parsecId
                ? `/forms?googleId=${userId}&parsecId=${parsecId}`: "/login"
              }>
                <NavButton content={userId ? "Form" : "Login"} isActive={current === "login"} />
              </Link>
            </div>
          </div>
          <div className="nav-mobile md:hidden">
            <button
              onClick={() => setMobileNavActive(!mobileNavActive)}
              className={`rounded-full mr-4 text-4xl ${
                mobileNavActive && "rotate-180"
              } ease-in-out duration-300`}
            >
              <HiOutlineChevronDown />
            </button>
          </div>
        </div>
        <div
          className={`nav-mobile-options h-0 overflow-hidden md:hidden ${
            mobileNavActive && "h-72"
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
            <Link to={
              userId && parsecId
              ? `/forms?googleId=${userId}&parsecId=${parsecId}`: "/login"
            }>
              <NavTile
                onClick={() => setMobileNavActive(false)}
                content={userId ? "Form" : "Login"}
                isActive={current === "login"}
              />
            </Link>
          </div>
        </div>
        <div className="w-full" style={{ height: "2px" }}>
          <div
            className="h-full w-full bg-rose-500"
            style={{ transformOrigin: "left top" }}
            ref={scrollProgress}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Appbar