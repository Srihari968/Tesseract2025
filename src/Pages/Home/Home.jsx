
import "./Home.css";
import Tesseract from "../../Components/Tesseract";
import Sponcer from "../../Components/Sponcers/Sponcer";
import SponcerCard from "../../Components/Sponcers/SponcerCard";
import Countdown from "../../Components/Countdown/Countdown";
import ComingSoonCard from "../../Components/ComingSoonCard/ComingSoonCard";

function Home() {
  return (
    <>
      {/* <div className="h-screen bg-black flex items-center justify-center">
            <Tesseract />
      </div> */}

      <div className="mx-auto max-w-page_lg md:px-8 px-4 overflow-hidden">
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
                Annual Tech Expo
              </div>
              <div className="w-full text-xl text-left custom-width:text-1xl text-tertiary">
                12th - 13th April 2025
              </div>
            </div>
            {/* <div className="relative">
              <div className="max-w-[1000px] text-2xl rounded-2xl  my-28 p-8 bg-[#000000] bg-opacity-90 text-white">
                Tesseract is IIT Dharwad's flagship tech summit, bringing together students, industry experts, and innovators for a celebration of technology and innovation. Featuring keynote talks, hands-on workshops, and a cutting-edge tech expo, Tesseract is your gateway to exploring emerging technologies, honing skills, and connecting with the brightest minds in the field. Join us for an inspiring journey into the future of tech!
              </div>
            </div> */}
          </div>
        </section>

        <section>
          <div className="relative w-full" id="animate-2">
            <div className="w-full h-28"></div>
            <div className="w-full md:w-1/2 mx-auto">
              <div className="font-hero text-5xl font-bold md:text-6xl text-center text-secondary">
                About Tesseract
              </div>
              <div className="text-2xl mt-4 rounded-2xl p-8 bg-[#001f3f] bg-opacity-10 text-white">
                <div>
                Tesseract is IIT Dharwad's annual tech summit, a platform for innovation, learning, and collaboration. Featuring keynote talks, hands-on workshops, and a cutting-edge tech expo, the event brings together students, experts, and industry leaders to explore emerging technologies and showcase groundbreaking projects. Join us to dive into the future of tech and connect with the brightest minds in the field!
                </div>
              </div>
            </div>
            <div className="w-full h-28"></div>
          </div>
          <div className="w-full h-[200px]" id="animate-3"></div>
          <div className="w-full h-[800px]"></div>
        </section>

        {/* <section className="relative">
          <div id="animate-4">
            <div className="text-4xl md:text-5xl font-semibold font-hero text-center">
              Our Sponsors
            </div>
            <div className="mt-10">
              <Sponcer title={"Title Sponsor"}>
                <SponcerCard
                  imageUrl={"/Images/sponsors/Title_sponser.jpg"}
                  width="max-w-[500px]"
                />
              </Sponcer>

              <Sponcer title={"Silver Sponsors"}>
                <SponcerCard
                  imageUrl={"/Images/sponsors/NT LOGO.png"}
                  width="max-w-[300px]"
                />
                <SponcerCard
                  imageUrl={"/Images/sponsors/Edge Vertical Logo.png"}
                  width="max-w-[300px]"
                />
              </Sponcer>
              <Sponcer title={"Bronze Sponsor"}>
                <SponcerCard
                  imageUrl={"/Images/sponsors/CloudDefenseLogo.png"}
                  width="max-w-[300px]"
                />
              </Sponcer>
            </div>
          </div>
        </section> */}
        {/* <section className="relative">
          <div id="animate-5" className="w-full h-[800px]"></div>
          <div className="w-full h-[200px]"></div>
          <div id="animate-6">
            <div className="w-full relative">
              <div className="font-hero top-[50px] text-4xl text-center font-semibold relative max-[880px]:top-[348px]">
                What you get
              </div>
              <div className="flex flex-wrap justify-around mt-96 px-8">
                <div
                  className="max-w-[400px] 
                    rounded-lg 
                    p-4 my-8 
                    relative
                    bg-pink-600/80
                    pink-shadow
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Experience
                  </div>
                  <div className="mt-8 text-[1.1rem]">
                    Participate in events designed to bring out the best in you
                  </div>
                </div>
                <div
                  className="
                    max-w-[400px] 
                    rounded-lg  
                    p-4 
                    my-8 
                    relative 
                    overflow-hidden
                    bg-amber-500/80
                    yellow-shadow
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Networking
                  </div>
                  <div className="mt-8 text-[1.1rem]">
                    Connect with and exchange ideas with participants and also
                    the tech speakers
                  </div>
                </div>
                <div
                  className="
                    max-w-[400px] 
                    rounded-lg 
                    p-4 
                    my-8 
                    relative
                    bg-violet-600/80
                    violet-shadow 
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Goodies
                  </div>
                  <div className="mt-8 text-[1.1rem]">
                    Each participant gets goodies! If you manage to win an
                    event, you can get even better ones!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px]"></div>
        </section> */}
      </div>
    </>
  );
}

export default Home;
