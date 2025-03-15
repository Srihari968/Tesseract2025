import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMicrophone, FaCode, FaRocket, FaCogs, FaUsers, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const events = [
  { date: "2025-04-12", time: "09:30", title: "Session-1 for Workshop", description: "Hands-on session on ML, DevOps, Blockchain, and more.", category: "Workshop", icon: <FaCode />, color: "#ff0000" },
  { date: "2025-04-12", time: "12:30", title: "Tech Expo", description: "Explore cutting-edge projects and research exhibits.", category: "Expo", icon: <FaUsers />, color: "#ff4500" },
  { date: "2025-04-12", time: "14:30", title: "Inauguration Ceremony", description: "Opening remarks, speeches by Sudha Murthy & Pralhad Joshi.", category: "Ceremony", icon: <FaLightbulb />, color: "#ff0000" },
  { date: "2025-04-12", time: "16:30", title: "Session-2 for Workshop", description: "Advanced topics in AI/ML, Web3, and DevOps.", category: "Workshop", icon: <FaCode />, color: "#ff4500" },
  { date: "2025-04-12", time: "19:45", title: "Knowledge Series - Talk 1", description: "Talk by Raj Vikramaditya on Competitive Programming.", category: "Talk", icon: <FaMicrophone />, color: "#ff0000" },
  { date: "2025-04-13", time: "09:30", title: "Session-1 for Workshop", description: "Continuation of hands-on workshops.", category: "Workshop", icon: <FaCode />, color: "#ff4500" },
  { date: "2025-04-13", time: "12:30", title: "Tech Expo", description: "Experience innovative projects from students and startups.", category: "Expo", icon: <FaUsers />, color: "#ff0000" },
  { date: "2025-04-13", time: "18:30", title: "Talk-2 & Closing Ceremony", description: "Talk by Sandeep Jain on DSA and the growth of GeeksforGeeks.", category: "Talk", icon: <FaMicrophone />, color: "#ff4500" },
  { date: "2025-04-13", time: "20:00", title: "Networking Dinner", description: "Connect with professionals, speakers, and attendees.", category: "Networking", icon: <FaUsers />, color: "#ff0000" }
];

const categories = ["All", "Workshop", "Expo", "Ceremony", "Talk", "Networking"];

const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSelectedCategory("All");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const filteredEvents = selectedCategory === "All" ? events : events.filter(event => event.category === selectedCategory);

  return (
    <div className="bg-black text-white py-10 font-sans">
      <h2 className="text-center text-5xl font-extrabold text-red-500 mb-10 drop-shadow-glow tracking-wide uppercase">Schedule</h2>
      
      {/* Category Filters - Hidden on Mobile */}
      <div className="flex justify-center space-x-4 mb-6 hidden md:flex">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-3 rounded-md transition duration-300 drop-shadow-glow text-lg font-medium tracking-wide ${selectedCategory === category ? "bg-red-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-red-400"}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <VerticalTimeline>
        {filteredEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work drop-shadow-glow"
              contentStyle={{ background: "#111", color: "#fff", border: `2px solid ${event.color}`, marginBottom: "40px", boxShadow: `0px 0px 15px ${event.color}`, fontFamily: "'Poppins', sans-serif" }}
              contentArrowStyle={{ borderRight: `7px solid ${event.color}` }}
              date={<span className="text-lg font-semibold tracking-wide">{`${event.date} | ${event.time}`}</span>}
              iconStyle={{ background: event.color, color: "#000", boxShadow: `0px 0px 15px ${event.color}` }}
              icon={event.icon}
              position={index % 2 === 0 ? "left" : "right"} // Alternating sides
            >
              <h3 className="text-2xl font-bold text-red-400 drop-shadow-glow tracking-wide">{event.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">{event.description}</p>
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;