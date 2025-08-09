import React from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 font-[Poppins]">
        {/* Name & Role */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-[#FF662E]">Komal Kumar</span>
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 mb-6">
          Data Analyst & Frontend Developer
        </h2>

        {/* Caption */}
        <p className="max-w-2xl text-gray-500 mb-8">
          I transform complex data into actionable insights and craft beautiful,
          high-performance web interfaces. From predictive models to pixel-perfect
          designs, I bridge the gap between data and user experience.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-10">
          <Link
            to="/projects"
            className="text-[#FF662E] border border-[#FF662E] px-6 py-3 rounded-full font-medium hover:bg-[#FF662E] hover:text-white transition flex items-center gap-2"
          >
            <span>View Projects</span>
          </Link>
          <a
            href="/resume.pdf"
            download
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium hover:text-[#FF662E] transition flex items-center gap-2"
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </section>

      <About />
      <Projects />
       <Contact />
    </>
  );
};

export default Home;
