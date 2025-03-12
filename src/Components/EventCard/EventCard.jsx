import { IoLocationSharp } from "react-icons/io5";

export default function EventCard({ flipLayout = false, data }) {
  return (
    <div className={`w-full flex my-12 ${flipLayout && "justify-end"}`}>
      <div className="w-full min-[900px]:w-[900px]">
        <div className="w-full flex flex-col sm:flex-row rounded-xl shadow-lg">
          {/* Left Side - Image Section */}
          <div
            className="w-full sm:w-5/12 min-h-[300px] relative bg-gradient-to-br 
            from-teal-500 to-blue-700 p-4 max-sm:rounded-t-xl sm:rounded-l-xl shadow-xl"
          >
            <div
              className="relative z-20 rounded-xl pt-[100%] h-full"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                borderRadius: "12px",
                border: "4px solid rgba(255, 255, 255, 0.2)",
              }}
            ></div>
          </div>

          {/* Right Side - Content Section */}
          <div
            className="w-full sm:w-7/12 min-h-[300px] bg-gray-900/50 backdrop-blur-lg 
            py-9 px-6 relative event-block sm:rounded-r-xl max-sm:rounded-b-xl text-white"
          >
            <div
              className="absolute w-[500px] h-[500px] top-[-100px] left-[-50px] opacity-30"
              style={{
                backgroundImage: "url('/Images/blue-neon.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                transform: "rotate(180deg)",
              }}
            ></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Event Title */}
              <div>
                <h2 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  {data.heading}
                </h2>
                <p className="text-sm mt-2 text-gray-300">{data.content}</p>
              </div>

              {/* Location & Registration */}
              <div className="text-sm mt-4">
                {/* Location Badge */}
                {/* {data.location && (
                  <div className="flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-full text-sm text-white shadow-md w-fit">
                    <IoLocationSharp />
                    <span>{data.location}</span>
                  </div> */}
                {/* )} */}

                {/* Registration Button */}
                <div className="mt-4">
                  <a href={data.registrationLink} target="_blank">
                    <button
                      type="button"
                      className={`px-6 py-2.5 text-sm font-semibold text-white rounded-full shadow-lg transform transition-all ease-in-out ${
                        data.registrationLink === ""
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-green-400 to-teal-500 hover:scale-105 hover:shadow-2xl"
                      }`}
                      disabled={data.registrationLink === ""}
                    >
                      {data.registrationLink === "" ? "Coming Soon" : "Register Now"}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
