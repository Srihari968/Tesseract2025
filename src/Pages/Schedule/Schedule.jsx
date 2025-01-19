import React from 'react';

function Schedule() {
  const events = [
    { EVENTS: "Stonkz (Online)", START: "27th Jan, 9AM", END: "31st Jan, 3PM", Location: "", Type: "Online" },
    { EVENTS: "CTF (Online)", START: "30th Jan, 5PM", END: "31st Jan, 5PM", Location: "", Type: "Online" },
    { EVENTS: "Opening Ceremony", START: "31st Jan, 10:30AM", END: "31st Jan, 1PM", Location: "F300", Type: "Cultural" },
    { EVENTS: "DevHack", START: "31st Jan, 2PM", END: "2nd Feb 2AM", Location: "105 & 107", Type: "Competition" },
    { EVENTS: "Sollid-Edge presentations", START: "31st Jan, 3PM", END: "31st Jan, 6PM", Location: "107", Type: "Presentation" },
    { EVENTS: "IdeaHub (Online Event)", START: "31st Jan, 3PM", END: "31st Jan, 6PM", Location: "", Type: "Online" },
    { EVENTS: "Build A Bot", START: "1st Feb, 10AM", END: "2nd Feb, 10AM", Location: "005 & 007", Type: "Competition" },
    { EVENTS: "AlgoStrike", START: "1st Feb, 10AM", END: "1st Feb, 1PM", Location: "001 & 003", Type: "Competition" },
    { EVENTS: "Bithunt", START: "1st Feb, 11AM", END: "1st Feb, 5PM", Location: "F300, 101 & 103", Type: "Competition" },
    { EVENTS: "StandUp Comedy Show", START: "1st Feb, 5PM", END: "1st Feb, 10PM", Location: "F300", Type: "Cultural" },
    { EVENTS: "DevHack Presentations", START: "2nd Feb, 10AM", END: "2nd Feb, 1PM", Location: "F300", Type: "Presentation" },
    { EVENTS: "Build A Bot Presentations", START: "2nd Feb, 10AM", END: "2nd Feb, 1PM", Location: "105 & 107", Type: "Presentation" },
    { EVENTS: "Food Carnival", START: "2nd Feb, 2PM", END: "2nd Feb, 10PM", Location: "", Type: "Cultural" },
    { EVENTS: "Post Closing Ceremony Commemorative Gathering", START: "2nd Feb, 4PM", END: "2nd Feb, 10PM", Location: "", Type: "Cultural" },
    { EVENTS: "Musical Night", START: "2nd Feb, 6PM", END: "2nd Feb, 10PM", Location: "Helipad", Type: "Cultural" },
  ];
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://sheetdb.io/api/v1/1xlf5n8ly9odk?sort_by=id&sort_order=desc");
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Event Schedule</h1>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border p-2">Event</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td className="border p-2">{event.EVENTS}</td>
              <td className="border p-2">{event.START}</td>
              <td className="border p-2">{event.END}</td>
              <td className="border p-2">{event.Location}</td>
              <td className="border p-2">{event.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;