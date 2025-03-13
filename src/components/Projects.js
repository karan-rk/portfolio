import React, { useState } from "react";
import Modal from "react-modal";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

// ✅ Import Images Correctly
import infectiousImage from "../assets/images/infectious.jpg";
import covid19Image from "../assets/images/covid19.jpeg";
import busImage from "../assets/images/buw.png";

const projects = [
  {
    title: "Infectious Disease Simulation Model",
    description:
      "Developed a high-performance disease spread simulation using C++ and OOP principles, processing 300,000+ agents with O(n log n) efficiency.",
    details:
      "This project models real-world disease transmission using SIR and SEIR frameworks. Features include high-speed data processing, dynamic visualization, and optimized algorithms to track infection trends in large populations.",
    techStack: ["C++", "OOP", "Data Structures", "Python (Visualization)"],
    link: "https://github.com/karan-rk/infectious-disease-simulator",
    image: infectiousImage,
    liveDemo: "", // Placeholder for live demo
  },
  {
    title: "COVID-19 Detection from X-Rays",
    description:
      "Designed and trained a deep learning model (CNN) for detecting COVID-19 from X-rays, achieving 98.7% accuracy and real-time classification.",
    details:
      "This AI-powered system uses Convolutional Neural Networks (CNNs) to classify COVID-19 cases from chest X-rays. Leveraging TensorFlow and Flask, the model allows real-time diagnosis via a REST API, aiding medical professionals in rapid decision-making.",
    techStack: ["Python", "TensorFlow", "CNN", "Flask"],
    link: "https://github.com/karan-rk/COVID-19-Detection-from-X-Rays.git",
    researchPaper:
      "https://ijarcce.com/papers/using-machine-learning-techniques-to-detect-covid-19-infected-patients-x-ray/",
    image: covid19Image,
    liveDemo: "", // Placeholder for live demo
  },
  {
    title: "Bus Ticket Management System",
    description:
      "Engineered a full-stack Bus Ticket Management System, automating ticketing operations for 15+ routes and improving processing efficiency by 25%.",
    details:
      "Built a PHP-MySQL web application enabling users to book bus tickets securely. Integrated QR-based verification for authentication, optimized SQL queries for fast lookups, and implemented a payment gateway for seamless transactions.",
    techStack: ["PHP", "MySQL", "QR Verification", "Payment Processing"],
    link: "https://github.com/karan-rk/bus-ticket-system",
    image: busImage,
    liveDemo: "", // Placeholder for live demo
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ Open Modal Function
  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  // ✅ Close Modal Function
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-gray-900 py-12 px-6 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        🚀 Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => openModal(project)}
          >
            {/* ✅ Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mt-2 transition-opacity duration-300 hover:opacity-80"
            />

            {/* ✅ Project Title */}
            <h3 className="text-2xl font-semibold mt-4 text-blue-300">
              {project.title}
            </h3>

            <p className="text-gray-300 mt-2">{project.description}</p>

            {/* ✅ Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal for Project Details */}
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto text-center relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <FaTimes size={24} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold mt-4">{selectedProject.title}</h2>
            <p className="text-gray-300 mt-2">{selectedProject.details}</p>

            {/* ✅ Project Links */}
            <div className="mt-5 flex flex-wrap gap-3 justify-center">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition text-center"
              >
                <FaGithub /> GitHub
              </a>

              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition text-center"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
