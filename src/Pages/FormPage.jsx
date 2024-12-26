import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormPage() {
  const [formData, setFormData] = useState({
    userName: "",
    collegeName: "",
    mobileNumber: "",
    accommodation: "",
  });
  const [userId, setUserId] = useState(null); // State to hold the Google ID

  // Retrieve the Google ID from localStorage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("googleId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      alert("Google ID not found. Please log in again.");
      // Redirect to login if needed
      window.location.href = "/login";
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!userId) {
      alert("Google ID is missing. Please log in again.");
      return;
    }

    try {
      // Include userId (Google ID) in the request payload
      const response = await axios.post(
        `http://localhost:3000/users/forms`, 
        { ...formData, userId }
      );
      alert("Form submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-purple-400">
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
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg px-6 py-3 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
