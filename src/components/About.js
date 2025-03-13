import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
        
        {/* Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a passionate <span className="text-blue-500 font-medium">Software Engineer</span> with expertise in 
          <span className="text-blue-500 font-medium"> Full-Stack Development, Cloud Computing, and AI-driven applications</span>. 
          I specialize in **building scalable, high-performance solutions** with **React.js, Node.js, Python, and AWS**.
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          With a background in **Computer Vision, Machine Learning, and API design**, I have worked on optimizing **real-time systems, 
          distributed applications, and cloud-native architectures**. I am passionate about **applying algorithms, performance tuning, 
          and best software engineering practices** to solve complex problems.
        </p>
      </div>
    </section>
  );
};

export default About;
