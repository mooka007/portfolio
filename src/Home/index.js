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
          <About />
        </section>
        <section id="education" className="section">
          <Bio />
        </section>
        <section id="projects" className="section">
          <Project />
        </section>
        <section id="contact" className="section">
          <Footer />
        </section>
      </main>
    </div>
  );
}
