import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/images/propic.png"; // ✅ Your Profile Image

const resumePath = "/KaranRajendraResume.pdf"; // ✅ Ensure it's in the public/ folder
const githubResumeURL =
  "https://github.com/karan-rk/portfolio/raw/main/public/KaranRajendraResume.pdf"; // ✅ GitHub fallback link

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
          href="https://www.linkedin.com/in/karanrajendra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-400 transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/karanrajendra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:karan@example.com"
          className="text-white text-2xl hover:text-red-400 transition-transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* ✅ Resume Buttons - Styled & Debugged */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* 📄 View Resume */}
        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all flex items-center justify-center w-64"
          onClick={async (e) => {
            try {
              const res = await fetch(resumePath, { method: "HEAD" });
              if (!res.ok) {
                alert("Resume not found! Trying alternative link...");
                window.open(githubResumeURL, "_blank");
                e.preventDefault();
              }
            } catch {
              alert("Error fetching resume.");
              e.preventDefault();
            }
          }}
        >
          📄 View My Resume
        </a>

        {/* ⬇️ Download Resume */}
        <a
          href={resumePath}
          download="KaranRajendraResume.pdf"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all flex items-center justify-center w-64"
          onClick={async (e) => {
            try {
              const res = await fetch(resumePath, { method: "HEAD" });
              if (!res.ok) {
                alert("Resume not found! Downloading from alternative link...");
                window.location.href = githubResumeURL;
                e.preventDefault();
              }
            } catch {
              alert("Error downloading resume.");
              e.preventDefault();
            }
          }}
        >
          ⬇️ Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
