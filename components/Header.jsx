import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md font-[Poppins]">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-5 px-4">
        {/* Logo - Link to Home */}
        <Link
          to="/"
          className="text-lg font-semibold hover:text-[#FF662E] transition"
          aria-label="Go to homepage"
        >
          Komal Palwai
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8 bg-gray-100 rounded-full px-6 py-2 text-base font-medium max-w-full overflow-x-auto no-scrollbar">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition whitespace-nowrap hover:text-[#FF662E] ${
                isActive ? "text-[#FF662E]" : "text-gray-800"
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition whitespace-nowrap hover:text-[#FF662E] ${
                isActive ? "text-[#FF662E]" : "text-gray-800"
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition whitespace-nowrap hover:text-[#FF662E] ${
                isActive ? "text-[#FF662E]" : "text-gray-800"
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            Contact
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/komalkumarpalwai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition hover:text-[#FF662E]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/komal-reddy-palwai-816824266/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition hover:text-[#FF662E]"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
