import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

export default function EventCard({ data,isFocused }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="relative w-[500px] h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
      onMouseEnter={() => isFocused && setShowContent(true)}
      onMouseLeave={() => isFocused && setShowContent(false)}
    >
      {/* Fixed Title & Time at the Top */}
      <div className="absolute top-0 left-0 w-full bg-black/80 text-white p-3 text-center z-10">
        <h3 className="text-lg font-bold">{data.heading}</h3>
        <p className="text-sm">{data.timing}</p>
      </div>

      {/* Image Section (Starts Below Title) */}
      <div className="absolute top-[20%] w-full h-[80%] bg-cover bg-center" 
        style={{ backgroundImage: `url(${data.image})` }}>
      </div>

      {/* Description Overlay (Appears on Hover) */}
      {showContent && (
        <div className="absolute top-[20%] w-full h-[80%] bg-black/80 text-white flex flex-col p-6 justify-center items-center">
          <p className="text-sm text-center">{data.content}</p>

          {/* Location & Registration */}
          <div className="mt-4">
            
            <div className="mt-4">
              <a href={data.registrationLink} target="_blank">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg transition-all ${
                    data.registrationLink === ""
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-400 to-teal-500 hover:scale-105"
                  }`}
                  disabled={data.registrationLink === ""}
                >
                  {data.registrationLink === "" ? "Coming Soon" : "Register Now"}
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}