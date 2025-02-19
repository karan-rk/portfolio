import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
        
        {/* Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a passionate Software Engineer specializing in <span className="text-blue-500 font-medium">Full-Stack Development</span>, API design, and cloud-based applications. 
          My expertise includes working with <span className="font-medium text-blue-500">React.js, Node.js, Python, and AWS</span>. 
          I love building scalable solutions and optimizing performance for real-world applications.
        </p>
      </div>
    </section>
  );
};

export default About;
