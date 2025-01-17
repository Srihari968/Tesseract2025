import "./Home.css";
import Sponcer from "../../Components/Sponcers/Sponcer";
import SponcerCard from "../../Components/Sponcers/SponcerCard";
import Countdown from "../../Components/Countdown/Countdown";
import ComingSoonCard from "../../Components/ComingSoonCard/ComingSoonCard";

function Home() {
  return (
    <>
      <div className="mx-auto max-w-page_lg md:px-8 px-4 overflow-hidden">
        <section id="animate-1">
        <div className="relative h-screen w-full pt-16">
          <div className="flex flex-col custom-width:flex-row items-center justify-center custom-width:justify-between h-full px-4 custom-width:px-8 gap-4 custom-width:gap-0">
            <div className="text-center custom-width:text-left w-full custom-width:w-auto flex flex-col items-start space-y-2 flex-shrink-0">
              <div className="w-full text-4xl custom-width:text-8xl font-semibold font-hero">
                Parsec 5.0
              </div>
              <div className="w-full text-3xl custom-width:text-7xl font-medium">
                Annual techfest,
                <div className="w-full">
                  <span className="gradient-text">IIT</span> Dharwad
                </div>
              </div>
              <div className="w-full text-lg text-center custom-width:text-left custom-width:text-2xl">31st Jan - 2nd Feb, 2025</div>
            </div>
            <div className="w-auto text-center custom-width:text-right mt-4 custom-width:mt-0 flex-shrink-0 text-3xl sm:text-4xl custom-width:text-5xl">
              <Countdown eventDate="2025-01-31T00:00:00" />
            </div>
          </div>
        </div>
          <div className="relative">
            <div className="max-w-[1000px] text-xl rounded-2xl mx-auto my-28 p-8 bg-[#000006] bg-opacity-80">
              Witness the collision of genius minds and cutting-edge technology
              at IIT Dharwad's most electrifying{" "}
              <span className="gradient-text">Technical Fest - Parsec 5.0</span>
              , a rendezvous with the future! Get ready to dive into the sea of
              circuits & algorithms, machines & robots, bytes and bits, zeroes &
              ones. Let your imagination and innovation take flight in this
              celebration of brilliance and creativity.
            </div>
          </div>
        </section>

        <section>
          <div className="relative w-full" id="animate-2">
            <div className="w-full h-28"></div>
            <div className="w-full md:w-1/2">
              <div className="font-hero text-4xl font-semibold md:text-5xl text-center md:text-left">
                About us
              </div>
              <div className="text-xl mt-4 rounded-2xl p-8 bg-black bg-opacity-80">
                <div>
                  Parsec offers an incredible stage for emerging technologists to display
                  their expertise and bring innovative ideas to life. Packed with events, 
                  competitions, workshops, and keynote sessions, it seeks to ignite a passion 
                  for technology and business in the brightest minds across the nation. 
                  Beyond the tech buzz, Parsec creates a vibrant experience with engaging cultural activities. 
                  Join this one-of-a-kind technocultural fest to explore, innovate, and have a fantastic time!
                </div>
              </div>
            </div>
            <div className="w-full h-28"></div>
          </div>
          <div className="w-full h-[200px]" id="animate-3"></div>
          <div className="w-full h-[800px]"></div>
        </section>

        <section className="relative">
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
            </div>
          </div>
        </section>
        <section className="relative">
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
        </section>
      </div>
    </>
  );
}

export default Home;
