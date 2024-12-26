
"use client";


import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import Requirements from "../components/Requirements";
const Contact = () => {
  return (
    
      <><HeroSection />
      <div>
      <div className="flex flex-col items-center bg-gray-100 text-black p-6 md:p-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-center">Get In Touch With Us</h1>

      {/* Paragraph */}
      <p className="text-center text-gray-400 mb-8">
        For More Information About Our Product & Services. <br></br>Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      {/* Main Row: Left (Contact Details) & Right (Form) */}
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3">
        {/* Left Section - Contact Details */}
        <div className="md:w-1/2 pr-0 md:pr-6">
          {/* Address */}
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-sm text-black mr-3" />
            <h4 className="text-sm font-medium">Address</h4>
          </div>
          <p>236 5th SE Avenue, New York NY10000, United States</p>


          {/* Phone */}
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-sm text-black mr-3" />
            <h2 className="text-sm font-medium">Phone</h2>
          </div>
          <p>Mobile: +(84) 546-6789
            Hotline: +(84) 456-6789</p>

          {/* Working Time */}
          <div className="flex items-center mb-4">
            <FaClock className="text-sm text-black mr-3" />
            <h2 className="text-sm font-medium">Working Time</h2>
          </div>
          <p>Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00</p>
        </div>

        {/* Right Section - Contact Form */}
        <form className="md:w-1/2 bg-gray-50 p-6 rounded-md shadow-md space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here..."
              rows={5}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-100 text-black py-3 rounded-md hover:bg-yellow-600 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Requirements />
    </div>
    </>
    
  )
}

export default Contact;


   
 

