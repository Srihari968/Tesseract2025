import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaMap } from "react-icons/fa";
import axios from "axios";
import Papa from "papaparse";
import ComingSoonCard from "../../Components/ComingSoonCard/ComingSoonCard";
import Timeline from "./Timeline";

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(customParseFormat);

const categoryColors = {
  Online: "from-blue-500 to-indigo-400",
  Cultural: "from-pink-500 to-orange-400",
  Competition: "from-green-500 to-teal-400",
  Presentation: "from-yellow-500 to-yellow-300",
};

const parseTime = (timeStr) => {
  if (!timeStr) return null;

  const cleanedTimeStr = timeStr.replace(/(\d+)(st|nd|rd|th)/, "$1");

  const possibleFormats = [
    "D MMM, hA",
    "D MMM, h:mmA",
    "D MMM, hhA",
    "D MMM, hh:mmA",
  ];

  for (const format of possibleFormats) {
    const parsed = dayjs(cleanedTimeStr, format, true);
    if (parsed.isValid()) return parsed;
  }

  console.warn("Invalid date:", timeStr);
  return null;
};

const Schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSp8BCLTca6LDqWL3ELdwpPNibwmFEiV3IwYxPmI-gE4FBxCg9uIsWpdf1POJegkxHcogcID7p5BfmP/pub?output=csv",
          { responseType: "blob" }
        );

        Papa.parse(response.data, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            const parsedEvents = results.data
              .map((event) => {
                const startTimeStr = event.START || "";
                const endTimeStr = event.END || "";
                const startTime = parseTime(startTimeStr);
                const endTime = parseTime(endTimeStr);

                if (!startTime || !endTime) {
                  console.warn(
                    `Skipping event due to invalid date: ${event.EVENTS}`
                  );
                  return null;
                }

                const location =
                  typeof event.Location === "string"
                    ? event.Location.trim()
                    : "Location will be updated soon";

                const gmapLink =
                  typeof event.gmapLink === "string"
                    ? event.gmapLink.trim()
                    : null;

                return {
                  ...event,
                  Type:
                    event.Type?.trim() === "Competittion"
                      ? "Competition"
                      : event.Type?.trim(),
                  start: startTime,
                  end: endTime,
                  location,
                  gmapLink,
                };
              })
              .filter((event) => event !== null);

            setEvents(parsedEvents);
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className="container mx-auto p-6 text-white min-h-screen relative pt-20">
    //   <h1 className="text-4xl font-bold text-center text-white mb-8 bg-clip-text text-transparent">
    //     Event Schedule 📅
    //   </h1>

    //   {events.length === 0 ? (
    //     <div className="flex justify-center items-center">
    //       <div className="animate-pulse bg-gray-300 w-64 h-40 rounded-md"></div>
    //     </div>
    //   ) : (
    //     <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    //       {events.map((event, index) => {
    //         const now = dayjs();
    //         let progress = 0;

    //         if (now.isBefore(event.start)) {
    //           // Before event starts: 100%
    //           progress = 100;
    //         } else if (now.isAfter(event.end)) {
    //           // After event ends: 0%
    //           progress = 0;
    //         } else {
    //           // During the event: calculate based on elapsed time
    //           const totalDuration = event.end.diff(event.start, "seconds");
    //           const elapsed = now.diff(event.start, "seconds");
    //           progress = Math.max(0, 100 - (elapsed / totalDuration) * 100);
    //         }

    //         const borderColor =
    //           categoryColors[event.Type] || "from-gray-500 to-gray-700";

    //         const durationInMinutes = event.end.diff(event.start, "minute");
    //         const durationText =
    //           durationInMinutes > 60
    //             ? `${Math.round(durationInMinutes / 60)} hours`
    //             : `${durationInMinutes} minutes`;

    //         return (
    //           <motion.div
    //             key={index}
    //             className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-lg shadow-xl text-center border border-gray-700 transform hover:scale-105 transition-all"
    //             initial={{ opacity: 0, y: 10 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.5, delay: index * 0.1 }}
    //           >
    //             <h2
    //               className={`text-2xl font-bold bg-gradient-to-br ${categoryColors[event.Type]} px-3 py-1 rounded-md inline-block`}
    //             >
    //               {event.EVENTS}
    //             </h2>
    //             <p className="text-lg mt-2 flex items-center justify-center">
    //               <FaClock className="mr-2" />{" "}
    //               {progress === 0
    //                 ? "Event Ended"
    //                 : `Starts at ${event.start.format("DD MMM YYYY, h:mm A")}`}
    //             </p>
    //             <p className="text-sm text-gray-400 mt-2 flex items-center justify-center">
    //               {event.gmapLink ? (
    //                 <a
    //                   href={event.gmapLink}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="inline-flex items-center"
    //                   title="View in Google Maps"
    //                 >
    //                   <FaMapMarkerAlt className="mr-2" />
    //                   {event.location}
    //                 </a>
    //               ) : (
    //                 <>
    //                   <FaMapMarkerAlt className="mr-2" />
    //                   {event.location}
    //                 </>
    //               )}
    //             </p>

    //             <p className="text-sm text-gray-400 mt-2">{`Duration: ${durationText}`}</p>
    //             <div className="w-full h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
    //               <div
    //                 className={`h-full bg-gradient-to-r ${categoryColors[event.Type]} transition-all duration-500`}
    //                 style={{ width: `${progress}%` }}
    //               ></div>
    //             </div>
    //             <p className="text-sm text-gray-400 mt-2">
    //               {progress === 100
    //                 ? "Event Not Started"
    //                 : `${Math.round(progress)}% remaining`}
    //             </p>
    //           </motion.div>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
    <div className="relative mx-auto max-w-page_lg md:px-8 px-4 pt-32 overflow-x-hidden overflow-y-hidden">
      <div className="font-hero text-center font-semibold text-4xl">Schedule</div>
      <div className="mt-8">
        {/* {EventsData.map((data, index) => {
                  return (
                    <EventCard data={data} flipLayout={index % 2 === 1} key={index} />
                  )
                })} */}
        <Timeline/>
      </div>
    </div>
  );
};

export default Schedule;
