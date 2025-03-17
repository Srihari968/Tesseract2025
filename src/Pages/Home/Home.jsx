import "./Home.css";
import Tesseract from "../../Components/Tesseract";
import Sponcer from "../../Components/Sponcers/Sponcer";
import SponcerCard from "../../Components/Sponcers/SponcerCard";
import Countdown from "../../Components/Countdown/Countdown";
import ComingSoonCard from "../../Components/ComingSoonCard/ComingSoonCard";

function Home() {
  return (
    <>
      <div className="mx-auto max-w-page_lg md:px-8 px-4">
        {/* Hero Section */}
        <section id="animate-1">
          <div className="relative h-screen w-full pt-16 flex items-center justify-left">
            <div className="text-left w-full flex flex-col items-center space-y-2">
              <div className="w-full text-3xl custom-width:text-9xl font-bold text-primary">
                Tesseract
              </div>
              <div className="w-full text-2xl custom-width:text-6xl font-medium text-secondary">
                <div className="w-full">
                  <span className="gradient-text">IIT Dharwad's</span>
                </div>
                Annual Tech Summit
              </div>
              <div className="w-full text-xl text-left custom-width:text-1xl text-tertiary">
                12th - 13th April 2025
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section>
          <div className="relative w-full" id="animate-2">
            <div className="w-full h-28"></div>
            <div className="w-full md:w-1/2 mx-auto glass-effect">
              <div className="font-hero text-5xl font-bold md:text-6xl text-center text-secondary mt-4">
                About Tesseract
              </div>
              <div className="text-2xl mt-4 rounded-2xl p-8 text-white">
                <div>
                  Tesseract is IIT Dharwad's annual tech summit, a platform for innovation, learning, and collaboration. Featuring keynote talks, hands-on workshops, and a cutting-edge tech expo, the event brings together students, experts, and industry leaders to explore emerging technologies and showcase groundbreaking projects.
                </div>
              </div>
            </div>
            <div className="w-full h-28"></div>
          </div>
        </section>

        {/* Event Sections */}
        <section className="w-full flex flex-col items-center space-y-12 mt-12 px-4 relative">
          {/* Vedartha - Left Image, Right Text */}
          <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white bg-opacity-10 p-6 rounded-lg shadow-lg glass-effect-2">
            <img src="vedartha.jpg" alt="Vedartha" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
            <div className="md:w-1/2 text-white text-left p-6">
              <h2 className="text-3xl font-bold text-secondary">Vedartha</h2>
              <p className="mt-2 text-lg text-tertiary">
                A series of insightful talks and panel discussions featuring industry leaders, researchers, and entrepreneurs sharing their expertise.
              </p>
            </div>
          </div>

          {/* VidyutX - Right Image, Left Text */}
          <div className="flex flex-col md:flex-row-reverse items-center w-full max-w-5xl bg-white bg-opacity-10 p-6 rounded-lg shadow-lg glass-effect-2">
            <img src="vidyutx.jpg" alt="VidyutX" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
            <div className="md:w-1/2 text-white text-left p-6">
              <h2 className="text-3xl font-bold text-secondary">VidyutX</h2>
              <p className="mt-2 text-lg text-tertiary">
                A dynamic showcase of cutting-edge projects, start-ups, and research advancements that define the future of technology.
              </p>
            </div>
          </div>

          {/* Tattva - Left Image, Right Text */}
          <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white bg-opacity-10 p-6 rounded-lg shadow-lg glass-effect-2">
            <img src="tattva.jpg" alt="Tattva" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
            <div className="md:w-1/2 text-white text-left p-6">
              <h2 className="text-3xl font-bold text-secondary">Tattva</h2>
              <p className="mt-2 text-lg text-tertiary">
                Hands-on workshops covering emerging technologies, programming, AI, and more to upskill students and professionals.
              </p>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="relative w-full" id="animate-2">
            <div className="w-full h-28"></div>
            <div className="w-full md:w-1/2 mx-auto glass-effect">
              <div className="font-hero text-5xl font-bold md:text-6xl text-center text-secondary mt-4">
                About Tesseract
              </div>
              <div className="text-2xl mt-4 rounded-2xl p-8 text-white">
                <div>
                  Tesseract is IIT Dharwad's annual tech summit, a platform for innovation, learning, and collaboration. Featuring keynote talks, hands-on workshops, and a cutting-edge tech expo, the event brings together students, experts, and industry leaders to explore emerging technologies and showcase groundbreaking projects.
                </div>
              </div>
            </div>
            <div className="w-full h-28"></div>
          </div>
        </section> */}

        {/* Countdown */}
        {/* <section className="mt-16">
          <Countdown />
        </section> */}

        {/* Registration */}
        {/* <section className="text-center my-16">
          <h2 className="text-4xl font-bold text-primary">Register Now</h2>
          <p className="text-white mt-4">Be a part of the most exciting tech event of the year. Secure your spot today!</p>
          <button className="mt-6 px-6 py-3 bg-secondary text-white font-bold rounded-xl text-lg hover:bg-primary">
            Register Now
          </button>
        </section> */}

        {/* Sponsors Section */}
        {/* <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-secondary">Our Sponsors</h2>
          <Sponcer />
        </section> */}
      </div>
    </>
  );
}

export default Home;