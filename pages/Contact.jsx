import React from "react";
import { FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-20 text-center">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Let's Work Together</h1>
      
      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
        I'm always excited to collaborate, innovate, and build meaningful solutions.
        <br className="hidden md:block" />
        Whether you have a project, a job opportunity, or just want to connect — send me an email below to work together!
      </p>

      {/* Email display */}
      <div className="flex items-center justify-center gap-3 mb-12 text-[#FF662E] text-lg md:text-xl font-semibold cursor-pointer hover:underline mx-auto max-w-max">
        <FaEnvelope className="mt-1" />
        <a href="mailto:komalreddypalwai@gmail.com" className="hover:text-[#e55c29]">
          komalreddypalwai@gmail.com
        </a>
      </div>

      {/* Additional Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left max-w-md mx-auto">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-[#FF662E] text-xl mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600">Hyderabad, India</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaPhone className="text-[#FF662E] text-xl mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:8309897937" className="hover:underline">8309897937</a>
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-12">
        <a 
          href="https://www.linkedin.com/in/komal-reddy-palwai-816824266/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-gray-700 hover:text-[#FF662E] text-2xl transition focus:outline-none focus:ring-2 focus:ring-[#FF662E] focus:ring-offset-2 rounded"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/komalkumarpalwai" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-gray-700 hover:text-[#FF662E] text-2xl transition focus:outline-none focus:ring-2 focus:ring-[#FF662E] focus:ring-offset-2 rounded"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;
