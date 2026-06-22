import { useState, useEffect } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import { Bio } from "../components/Bio/Bio";
import Project from "../components/Project/Project";
import Footer from "../components/Footer/Footer";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [openSections, setOpenSections] = useState({
    experience: false,
    skills: false,
    projects: false,
  });

  const toggleSection = (section) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <div className={`layout ${dark ? "dark" : ""}`}>
      {/* Top bar with mode toggle */}
      <div className="topbar">
        <button className="mode-btn" onClick={() => setDark(!dark)}>
          {dark ? <FiSun size={14} /> : <FiMoon size={14} />}
          {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>

      {/* Centered content */}
      <main className="main-content">
        <section id="about" className="section">
          <Header />
        </section>
        <section id="experience" className="section">
          <button
            className="section-toggle"
            type="button"
            onClick={() => toggleSection("experience")}
            aria-expanded={openSections.experience}
          >
            <span>Work Experience</span>
            <span className="section-toggle__icon">
              {openSections.experience ? "−" : "+"}
            </span>
          </button>
          {openSections.experience && (
            <div className="section-toggle-content">
              <About />
            </div>
          )}
        </section>
        <section id="education" className="section">
          <button
            className="section-toggle"
            type="button"
            onClick={() => toggleSection("skills")}
            aria-expanded={openSections.skills}
          >
            <span>Skills</span>
            <span className="section-toggle__icon">
              {openSections.skills ? "−" : "+"}
            </span>
          </button>
          {openSections.skills && (
            <div className="section-toggle-content">
              <Bio />
            </div>
          )}
        </section>
        <section id="projects" className="section">
          <button
            className="section-toggle"
            type="button"
            onClick={() => toggleSection("projects")}
            aria-expanded={openSections.projects}
          >
            <span>Check out my latest work</span>
            <span className="section-toggle__icon">
              {openSections.projects ? "−" : "+"}
            </span>
          </button>
          {openSections.projects && (
            <div className="section-toggle-content">
              <Project />
            </div>
          )}
        </section>
        <section id="contact" className="section">
          <Footer />
        </section>
      </main>
    </div>
  );
}
