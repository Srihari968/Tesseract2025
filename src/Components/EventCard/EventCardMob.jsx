import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

export default function EventCardMob({ data, isFocused }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="relative main-card w-[300px] h-auto rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 bg-white flex flex-col"
      onMouseEnter={() => isFocused && setShowContent(true)}
      onMouseLeave={() => isFocused && setShowContent(false)}
    >
      {/* Fixed Title & Time at the Top */}
      <div className="bg-black text-white p-3 text-center">
        <h3 className="text-lg font-bold">{data.heading}</h3>
        <p className="text-sm">{data.timing}</p>
      </div>

      {/* Image Section (Starts Below Title) */}
      <div
        className="w-full h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>

      {/* Content Below the Image */}
      <div className="bg-black text-white p-3 text-center">
        <p className="text-sm">{data.shortcontent}</p>
        <br></br>
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
  );
}