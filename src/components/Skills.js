import React from "react";
import { FaCode, FaDatabase, FaTools, FaServer, FaCloud } from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    icon: <FaCode size={28} className="text-blue-500" />,
    items: ["Python", "Java", "JavaScript", "C++", "SQL", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaServer size={28} className="text-green-500" />,
    items: ["React.js", "Node.js", "Express.js", "Flask", "OpenCV", "TensorFlow"],
  },
  {
    category: "Databases",
    icon: <FaDatabase size={28} className="text-red-500" />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud size={28} className="text-purple-500" />,
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Kafka", "CI/CD (GitHub Actions)"],
  },
  {
    category: "Tools & Platforms",
    icon: <FaTools size={28} className="text-yellow-500" />,
    items: ["Git", "Linux", "JIRA", "Postman", "Nginx"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">🛠 Skills</h2>
      
      <div className="max-w-5xl mx-auto space-y-8">
        {skills.map((skillSet, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-gray-200 mb-3">
              {skillSet.icon} {skillSet.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillSet.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-blue-300 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
