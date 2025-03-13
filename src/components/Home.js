import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/images/propic.png"; // ✅ Your Profile Image

// ✅ Corrected Resume Path for GitHub Pages
const resumePath = "https://karan-rk.github.io/portfolio/KaranRajendraResume.pdf?v=" + new Date().getTime();

const githubResumeURL = "https://raw.githubusercontent.com/karan-rk/portfolio/main/KaranRajendraResume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-20 px-6"
      style={{
        background: "linear-gradient(to bottom, #0f172a, #1e293b)", // ✅ Dark Gradient
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* ✅ Profile Image */}
      <img
        src={profileImg}
        alt="Karan Rajendra"
        className="h-40 w-40 rounded-full border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      />

      {/* ✅ Title with Typewriter Effect */}
      <h1 className="text-5xl font-extrabold mt-6">Hi, I'm Karan Rajendra</h1>
      <h2 className="text-xl font-medium text-gray-300 mt-2">
        <Typewriter
          options={{
            strings: ["Software Engineer", "AI & Full Stack Developer"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h2>

      <p className="mt-4 max-w-2xl text-gray-300 leading-relaxed">
        Currently pursuing my Master's in Computer Engineering at Stony Brook
        University. Passionate about building scalable systems, AI-powered
        applications, and cloud solutions.
      </p>

      {/* ✅ Social Media Icons */}
      <div className="mt-4 flex gap-6">
      <a
  href="https://www.linkedin.com/in/karanr3/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white text-2xl hover:text-blue-400 transition-transform hover:scale-110"
>
  <FaLinkedin />
</a>

        <a
          href="https://github.com/karan-rk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:notkaranrk@gmail.com"
          className="text-white text-2xl hover:text-red-400 transition-transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* ✅ Resume Buttons */}
<div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
  {/* 📄 View Resume */}
  <a
    href={`${resumePath}?v=${new Date().getTime()}`} // Force fresh load
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all flex items-center justify-center w-64"
  >
    📄 View My Resume
  </a>

  {/* ⬇️ Download Resume */}
  <a
    href={`${resumePath}?v=${new Date().getTime()}`} // Force fresh load
    download="KaranRajendraResume.pdf"
    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all flex items-center justify-center w-64"
  >
    ⬇️ Download My Resume
  </a>
</div>

    </section>
  );
};

export default Home;
