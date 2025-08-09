import React from "react";
import { FaJs, FaPython, FaNodeJs, FaDatabase, FaCode, FaCogs } from "react-icons/fa";
import { SiMongodb, SiReact, SiTailwindcss, SiSalesforce } from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h1>

      {/* Description */}
      <p className="max-w-2xl text-center text-gray-600 mb-12">
        I'm a passionate <span className="font-semibold">B.Tech 4th-year student</span> 
        in Computer Science & Engineering (Data Science) with over{" "}
        <span className="font-semibold">2 years of experience</span> working with 
        cutting-edge AI technologies and advanced frontend development. I specialize 
        in creating visually appealing, high-performance web applications using modern 
        tech stacks like <strong>React.js</strong>, <strong>Tailwind CSS</strong>,{" "}
        <strong>Node.js</strong>, and <strong>MongoDB</strong>.
        <br /><br />
        I'm highly proficient in <strong>JavaScript</strong>, <strong>Python</strong>, 
        <strong> C#</strong>, and <strong>SQL</strong>, with intermediate skills in 
        data analysis—bridging the gap between software engineering and data-driven 
        insights. I focus on building intelligent, scalable, and seamless solutions.
      </p>

      {/* Tech Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tech I Work With</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <TechCard icon={<FaJs className="text-yellow-500 text-4xl" />} name="JavaScript" />
        <TechCard icon={<FaPython className="text-blue-500 text-4xl" />} name="Python" />
        <TechCard icon={<FaCode className="text-purple-500 text-4xl" />} name="C#" />
        <TechCard icon={<FaDatabase className="text-green-500 text-4xl" />} name="SQL" />
        <TechCard icon={<SiReact className="text-blue-400 text-4xl" />} name="React.js" />
        <TechCard icon={<SiTailwindcss className="text-teal-400 text-4xl" />} name="Tailwind CSS" />
        <TechCard icon={<FaNodeJs className="text-green-600 text-4xl" />} name="Node.js" />
        <TechCard icon={<SiMongodb className="text-green-700 text-4xl" />} name="MongoDB" />
        <TechCard icon={<FaCogs className="text-orange-500 text-4xl" />} name="UiPath Studio" />
        <TechCard icon={<SiSalesforce className="text-blue-600 text-4xl" />} name="Salesforce" />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © 2025 Komal Kumar Reddy. All rights reserved.
      </footer>
    </div>
  );
}

function TechCard({ icon, name }) {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      {icon}
      <p className="text-gray-700 font-medium mt-2">{name}</p>
    </div>
  );
}