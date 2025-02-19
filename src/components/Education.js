import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "M.S. in Computer Engineering",
    school: "Stony Brook University, New York",
    year: "August 2023 - May 2025",
    gpa: "GPA: 3.84/4.0",
    coursework: "Advanced Algorithms, Computer Networks, Robotics & Computer Vision",
  },
  {
    degree: "B.E. in Computer Science",
    school: "Visvesvaraya Technological University, Bangalore, India",
    year: "August 2017 - August 2022",
    gpa: "GPA: 6.42/10.0",
    coursework: "AI & ML, Database Systems, Data Mining & Analysis, Product Design & Strategy",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">🎓 Education</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gray-800"
          >
            <div className="flex items-center justify-center gap-3 text-blue-400 mb-3">
              <FaGraduationCap className="text-2xl" />
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <FaUniversity className="text-xl" />
              <p className="text-lg">{edu.school}</p>
            </div>
            <p className="text-gray-400 text-sm mt-2">{edu.year}</p>
            <p className="text-blue-300 font-semibold mt-1">{edu.gpa}</p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
