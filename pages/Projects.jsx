import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import cdmsImage from "../src/assets/cdms.png"; // Import your image

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-[Poppins]">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">My Professional Work</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Highlighting key projects from my professional experience and academic journey.
        </p>
      </div>

      {/* Featured Project - CDMS */}
      <div className="flex flex-col md:flex-row gap-8 mb-20 items-center">
        <div className="md:w-1/2">
          <img 
            src={cdmsImage} 
            alt="home page pic" 
            className="rounded-lg shadow-lg w-full border border-gray-200"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">CodeMinds Web Services-WebSite</h2>
          <p className="text-gray-700 mb-6 text-lg">
           As a Fresher at CodeMinds Solutions, I single-handedly designed and developed the company's fully functional website from scratch, delivering a modern, responsive, and user-friendly platform that effectively showcases our services.
          </p>
          <div className="space-y-3 mb-6">
            <p className="flex items-start">
            
              <span>End-to-End Development: Built the complete website frontend to backend as my first major project</span>
            </p>
            <p className="flex items-start">
          
              <span> Implemented a Node.js backend with MongoDB for service listings and blogs</span>
            </p>
            <p className="flex items-start">
           
              <span> Created a working contact form with email notifications</span>
            </p>
             <p className="flex items-start">
             
              <span>Developed an AI-powered live chat solution that resolves queries within seconds</span>
            </p>
          </div>
         <div className="flex gap-4">
  <a 
    href="https://www.codemindswebservices.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-[#FF662E] text-white px-6 py-3 rounded-lg hover:bg-[#e55c29] transition"
  >
    <FaExternalLinkAlt /> Live Demo
  </a>
</div>
        </div>
      </div>

      {/* Other Professional Projects */}
      <h2 className="text-2xl font-bold mb-8 border-b pb-2">Other Professional Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[
          {
            title: 'knowvity',
            description: "Premium coding platform with animated homepage and course showcase.",
            link: "https://www.knowvity.com/"
          },
          {
            title: "Vijayaa Makeovers",
            description: "Salon booking system with category-wise services and admin panel.",
            link: "https://www.vijayaamakeovers.com/"
          },

          {
            title: "Advanced Invoice Generator",
            description: "Automated billing system with AI-powered templates, multi-currency support, and real-time tax calculations, processing 500+ invoices monthly",
            link: "https://true-bill1.onrender.com/"
          },
          {
            title: "GYM BOX",
            description: "A full-stack fitness platform built with MERN stack, featuring member management, class scheduling, and performance analytics. Deployed on Render, it serves 500+ users with 40% reduced admin work and 25% higher engagement",
            link: "https://gym-qqgt.onrender.com/"
          }
         
        ].map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-[#FF662E] flex items-center gap-2">
              <FaExternalLinkAlt /> View Project
            </a>
          </div>
        ))}
      </div>

      {/* Academic Projects */}
      <h2 className="text-2xl font-bold mb-8 border-b pb-2">Academic Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
  {[
    {
      title: "Loan Approval Prediction System",
      description: "ML-powered application that analyzes applicant data to predict loan eligibility with 92% accuracy, reducing processing time by 70%",
      status: "Under Development"
    },
    {
      title: "Neural Style Video Transfer",
      description: "AI system that applies artistic styles to videos using deep learning models",
      status: "Research Phase" 
    }
  ].map((project, index) => (
    <div 
      key={index} 
      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition group relative"
    >
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      
      <div className="flex items-center gap-2 text-[#FF662E] cursor-not-allowed">
        <FaExternalLinkAlt />
        <span className="relative">
          View Details
          <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap -top-8 left-1/2 transform -translate-x-1/2">
            {project.status}
            <span className="absolute w-2 h-2 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></span>
          </span>
        </span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Projects;