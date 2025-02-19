import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/rk.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-12 w-12" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex gap-6 ${
            menuOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:shadow-none shadow-lg py-4 md:py-0`}
        >
          {["Home", "About", "Projects", "Skills", "Contact"].map((section, index) => (
            <li key={index} className="text-center md:text-left">
              <Link
                to={section.toLowerCase()}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer text-white px-4 py-2 transition duration-300 block ${
                  activeSection === section.toLowerCase()
                    ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                    : "hover:text-blue-400"
                }`}
                onSetActive={() => setActiveSection(section.toLowerCase())}
                onClick={() => {
                  setActiveSection(section.toLowerCase());
                  setMenuOpen(false);
                }}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
