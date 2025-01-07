import { useState, useEffect } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail, FiPhone } from "react-icons/fi";

const TeamCard = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageClickMobile = () => {
    if (isMobile) {
      setOverlayVisible((prev) => !prev);
    }
  };

  const handleCallClick = (e) => {
    if (isMobile && !isOverlayVisible) {
      e.preventDefault(); // Prevent call if overlay is not visible
      setOverlayVisible(true); // Show overlay on first click
    } else if (isMobile && isOverlayVisible) {
      // Directly open call dialog on second click (mobile)
      if (window.confirm("Are you sure you want to make this call?")) {
        window.location.href = `tel:${data.phone}`;
      }
    } else {
      // Desktop: Ensure clicking the overlay triggers the call confirmation
      if (window.confirm("Are you sure you want to make this call?")) {
        window.location.href = `tel:${data.phone}`;
      }
    }
  };

  return (
    <div
      className="
        max-w-[210px] 
        w-full
        mx-4 
        my-8 
        relative
        rounded-xl
        bg-[hsl(var(--default-dark)/0.2)]
        shadow-medium
        backdrop-blur-[8px]
        backdrop-saturate-[1.8]
        outline
        outline-2
        outline-[transparent]
        hover:shadow-lg
        transition-shadow
        duration-300
      "
    >
      {data.subtitle && (
        <div className="absolute w-full text-center bottom-[-40px] font-hero">
          {data.subtitle}
        </div>
      )}

      <div
        className="
          flex 
          flex-col 
          justify-center 
          p-3 
          rounded-xl 
          w-full 
          relative 
          z-30 
        "
      >
        <div
          className={`relative group ${
            isMobile ? "cursor-pointer" : "hover:cursor-pointer"
          }`}
          onClick={handleImageClickMobile}
        >
          <div className="w-full h-full">
            <img
              src={data.image}
              alt={`${data.name}'s image`}
              className="w-full rounded-lg outline outline-2 outline-transparent shadow-medium object-cover aspect-[1/1.2] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {data.phone && (
            <a
              href={`tel:${data.phone}`}
              className={`
                absolute 
                inset-0 
                flex 
                flex-col
                items-center 
                justify-center 
                bg-black/60 
                text-white 
                text-sm 
                font-semibold 
                transition-opacity 
                duration-300 
                rounded-lg
                ${
                  isMobile
                    ? isOverlayVisible
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                    : "opacity-0 group-hover:opacity-100 pointer-events-auto"
                }
              `}
              onClick={handleCallClick}
            >
              <FiPhone size={20} className="mb-2" />
              Call: {data.phone}
            </a>
          )}
        </div>
        <div className="text-center font-semibold mt-4">{data.name}</div>
        <div>
          <div className="flex justify-around mt-4 mb-2 px-4">
            {data.email && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:scale-110"
                href={`mailto:${data.email}`}
              >
                <span className="text-red-500 cursor-pointer">
                  <FiMail />
                </span>
              </a>
            )}
            {data.linkedin && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:scale-110"
                href={data.linkedin}
              >
                <span className="text-blue-500 cursor-pointer">
                  <BsLinkedin />
                </span>
              </a>
            )}
            {data.instagram && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:scale-110"
                href={`https://instagram.com/${data.instagram}`}
              >
                <span className="text-pink-500 cursor-pointer">
                  <BsInstagram />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
