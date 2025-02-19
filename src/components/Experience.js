import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// ✅ Import Images Correctly
import impavidLogo from "../assets/images/impavid.png";
import techcitiLogo from "../assets/images/techciti.png";
import sbuLogo from "../assets/images/sbu.png";

const experiences = [
  {
    role: "Software Developer",
    company: "Impavid Technologies",
    location: "Bangalore, India",
    duration: "Sept 2022 - April 2023",
    description: [
      "Developed a full-stack web application using JavaScript, HTML, CSS (Frontend) and Node.js, Express, MongoDB (Backend), reducing page load time by 30%.",
      "Designed and optimized RESTful APIs, improving data retrieval speed by 25% and reducing server response time.",
      "Refactored front-end architecture with modular React components, accelerating development cycles by 40%.",
      "Implemented authentication using JWT & OAuth, enhancing security and reducing unauthorized access risks.",
      "Integrated MongoDB and MySQL for structured and unstructured data handling, optimizing database queries by 20%.",
    ],
    logo: impavidLogo,
  },
  {
    role: "Software Engineer Intern",
    company: "TechCiti Software",
    location: "Bangalore, India",
    duration: "Oct 2020 - Dec 2020",
    description: [
      "Developed a JavaScript-based payroll application using React.js (Frontend) and Node.js/Express (Backend), reducing load time by 20% and enhancing user experience.",
      "Designed and implemented a MySQL database schema for payroll processing, improving data accessibility by 30% and streamlining financial reporting.",
      "Optimized SQL queries and indexing, reducing database retrieval time by 40% and boosting system performance by 35%.",
      "Integrated REST APIs for automated payroll data management, improving processing efficiency and accuracy.",
    ],
    logo: techcitiLogo,
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Stony Brook University",
    location: "New York, USA",
    duration: "Aug 2024 - Dec 2024",
    description: [
      "Conducted weekly coding sessions for 40+ graduate students, providing guidance on Python, OpenCV, and Machine Learning concepts.",
      "Designed programming assignments and projects in computer vision, improving student understanding of image processing and object detection.",
      "Evaluated and debugged student code, providing structured feedback to improve efficiency and best practices in Python development.",
    ],
    logo: sbuLogo,
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
