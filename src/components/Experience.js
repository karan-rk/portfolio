import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// ✅ Import Images Correctly
import impavidLogo from "../assets/images/impavid.png";
import sbuLogo from "../assets/images/sbu.png";

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "Stony Brook University",
    location: "New York, USA",
    duration: "Aug 2024 - Present",
    description: [
      "Teaching Assistant for ESE 568 (Computer Vision) under Prof. Murali Subbarao, guiding graduate students in advanced computer vision concepts.",
      "Conducted weekly office hours, mentoring students on Python, OpenCV, and image processing techniques for coursework and projects.",
      "Designed and graded assignments focused on stereo vision, augmented reality, and deep learning applications in computer vision.",
      "Provided debugging support and optimized student code to improve efficiency and adherence to best software engineering practices.",
    ],
    logo: sbuLogo,
  },
  {
    role: "Software Developer",
    company: "Impavid Technologies",
    location: "Bangalore, India",
    duration: "Sept 2022 - April 2023",
    description: [
      "Developed a scalable full-stack web application using **React.js, Node.js, Express, and MongoDB**, enhancing system performance by 40%.",
      "Implemented **JWT-based authentication** and OAuth 2.0 to ensure secure user access and data protection.",
      "Optimized **backend APIs and database queries**, reducing server response time by 25% and improving data retrieval efficiency.",
      "Designed a **role-based access control system**, allowing granular permission management for different user levels.",
      "Refactored the **React.js frontend architecture** into reusable, modular components, speeding up development time by 50%.",
      "Integrated AWS S3 for cloud-based file storage, improving reliability and scalability.",
    ],
    logo: impavidLogo,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">💼 Experience</h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start hover:shadow-xl transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-16 h-16 rounded-lg mr-6 shadow-md border-2 border-white transition-transform hover:scale-110"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-200">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} - {exp.location}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>

              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start text-gray-300 transition duration-200 hover:text-blue-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <FaCheckCircle className="text-green-400 mr-2 mt-1" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
