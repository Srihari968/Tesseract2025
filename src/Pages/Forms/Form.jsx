import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormPage() {
  const [formData, setFormData] = useState({
    userName: "",
    collegeName: "",
    mobileNumber: "",
    accommodation: "",
    events: [],
  });
  const [userId, setUserId] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const eventList = [
    "DevHack 6.0",
    "AlgoStrike 5.0",
    "Build-A-Bot 2.0",
    "Bithunt 3.0",
    "Stonkz 3.0",
    "Veni Vidi Vici",
    "Solid Edge",
    "Idea Hub",
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const googleId = queryParams.get("googleId");
    if (googleId) {
      setUserId(googleId);
    } else {
      alert("Google ID not found. Please log in again.");
      window.location.href = "/login";
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedEvents = checked
        ? [...prev.events, value]
        : prev.events.filter((event) => event !== value);
      return { ...prev, events: updatedEvents };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("Google ID is missing. Please log in again.");
      return;
    }

    // Check if at least one event is selected
    if (formData.events.length === 0) {
      alert("Please select at least one event.");
      return;
    }

    const payload = {
      forms: [formData],
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/users/${userId}/forms`,
        payload
      );
      setSubmissionStatus("success");
      alert("Form submitted successfully!");
      navigate("/events");
      setFormData({
        userName: "",
        collegeName: "",
        mobileNumber: "",
        accommodation: "",
        events: [],
      });
    } catch (error) {
      setSubmissionStatus("error");
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen relative pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-hero text-white mb-6">Event Form</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="userName"
            placeholder="Name"
            value={formData.userName}
            onChange={handleChange}
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            value={formData.collegeName}
            onChange={handleChange}
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Accommodation Preference</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div>
            <h3 className="text-2xl font-hero text-white mb-4">Select Events</h3>
            <div className="grid grid-cols-2 gap-4">
              {eventList.map((event, index) => (
                <div key={index} className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    id={`event-${index}`}
                    value={event}
                    checked={formData.events.includes(event)}
                    onChange={handleEventChange}
                    className="h-4 w-4"
                  />
                  <label htmlFor={`event-${index}`} className="text-white">
                    {event}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg px-6 py-3 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
      {submissionStatus === "success" && (
        <p className="text-green-500">Form submitted successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-500">Failed to submit form. Please try again.</p>
      )}
    </div>
  );
}
