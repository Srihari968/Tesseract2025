import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMicrophone, FaCode, FaRocket, FaCogs, FaUsers, FaLightbulb, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const events = [
  { date: "2025-04-12", time: "09:30", title: "Session-1 for Workshop", description: "Hands-on session on ML, DevOps, Blockchain, and more.", category: "Workshop", icon: <FaCode />, color: "#ff0000" },
  { date: "2025-04-12", time: "12:30", title: "Tech Expo", description: "Explore cutting-edge projects and research exhibits.", category: "Expo", icon: <FaUsers />, color: "#ff4500" },
  { date: "2025-04-12", time: "14:30", title: "Inauguration Ceremony", description: "Opening remarks, speeches by Sudha Murthy & Pralhad Joshi.", category: "Ceremony", icon: <FaLightbulb />, color: "#ff0000" },
  { date: "2025-04-12", time: "16:30", title: "Session-2 for Workshop", description: "Advanced topics in AI/ML, Web3, and DevOps.", category: "Workshop", icon: <FaCode />, color: "#ff4500" },
  { date: "2025-04-12", time: "19:45", title: "Knowledge Series - Talk 1", description: "Talk by Raj Vikramaditya on Competitive Programming.", category: "Talk", icon: <FaMicrophone />, color: "#ff0000" },
  { date: "2025-04-13", time: "09:30", title: "Session-3 for Workshop", description: "Continuation of hands-on workshops.", category: "Workshop", icon: <FaCode />, color: "#ff4500" },
  { date: "2025-04-13", time: "12:30", title: "Tech Expo", description: "Experience innovative projects from students and startups.", category: "Expo", icon: <FaUsers />, color: "#ff0000" },
  { date: "2025-04-13", time: "18:30", title: "Talk-2 & Closing Ceremony", description: "Talk by Sandeep Jain on DSA and the growth of GeeksforGeeks.", category: "Talk", icon: <FaMicrophone />, color: "#ff4500" },
  { date: "2025-04-13", time: "20:00", title: "Networking Dinner", description: "Connect with professionals, speakers, and attendees.", category: "Networking", icon: <FaUsers />, color: "#ff0000" },
  { date: "2025-04-13", time: "15:00", title: "Session-4 for Workshop", description: "Continuation of hands-on workshops.", category: "Workshop", icon: <FaCode />, color: "#ff4500" }
];

const categories = ["All", "Workshop", "Expo", "Ceremony", "Talk", "Networking"];

const getTimeRemaining = (eventDateTime) => {
  const total = Date.parse(eventDateTime) - Date.now();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
};


const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countdowns, setCountdowns] = useState({});

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

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCountdowns = {};
      events.forEach((event) => {
        const eventDateTime = new Date(`${event.date}T${event.time}:00`);
        updatedCountdowns[event.title] = getTimeRemaining(eventDateTime);
      });
      setCountdowns(updatedCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredEvents = selectedCategory === "All" ? events : events.filter(event => event.category === selectedCategory);

  return (
    <div className="bg-black text-white py-10 font-sans">
      
      {/* Animated Filter Button & Categories (Hidden on Mobile) */}
      <div className="hidden md:flex justify-center items-center relative mb-6 w-full">
        <motion.div 
          className="relative"
          animate={{ x: dropdownOpen ? -400 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-5 py-3 rounded-md bg-red-500 text-white text-lg font-medium tracking-wide flex items-center space-x-2 relative z-10"
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </motion.div>
        {dropdownOpen && (
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => { setSelectedCategory(category); setDropdownOpen(false); }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3, ease: "easeOut" }}
                className={`px-4 py-2 rounded-md transition duration-300 text-lg font-medium ${selectedCategory === category ? "bg-red-500" : "hover:bg-red-400"}`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}
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
              position={index % 2 === 0 ? "left" : "right"}
            >
              <h3 className="text-2xl font-bold text-red-400 drop-shadow-glow tracking-wide">{event.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">{event.description}</p>
              {countdowns[event.title] && countdowns[event.title].total > 0 && (
                <p className="text-green-400 mt-2">Starts in: {countdowns[event.title].days}d {countdowns[event.title].hours}h {countdowns[event.title].minutes}m {countdowns[event.title].seconds}s</p>
              )}
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
