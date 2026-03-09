import "./About.css";
import { FiCalendar } from "react-icons/fi";

const EXPERIENCE = [
  {
    company: "ARH Media",
    role: "React Native Developer Intern",
    period: "Jan 2026 – Feb 2026",
    logo: "📱",
    highlights: [
      "1-month internship at ARH Media agency — Béni Mellal.",
      "Built a React Native mobile application during the training period.",
      "Worked across marketing digital, web development, and digital communication domains.",
      "Recognized for seriousness, motivation, and strong team integration.",
    ],
  },
  {
    company: "Freelancer",
    role: "Full-Stack Developer",
    period: "2024 – Present",
    logo: "💼",
    highlights: [
      "Developed client websites using MERN stack, WordPress, and Shopify.",
      "Integrated payment processors and managed end-to-end project delivery.",
      "Handled project scoping, communication, and deployment autonomously.",
    ],
  },
  {
    company: "M5 TECH SARL AU",
    role: "Web Developer — Technical Department",
    period: "2023 – 2024",
    logo: "🏢",
    highlights: [
      "Front-end development: UI implementation and responsive design.",
      "Back-end development: server-side logic and REST API building.",
      "Web integration: templates, components, and feature integration.",
      "Analysis & solution design: requirements gathering and technical planning.",
      "Database architecture, management, structure consistency, and updates.",
    ],
  },
  {
    company: "Services Online",
    role: "Digital Content Creator",
    period: "2022 – 2023",
    logo: "✍️",
    highlights: [
      "Created SEO-optimized blog content on nutrition and alimentation topics.",
      "Applied keyword research, content optimization tools, and analytics.",
      "Produced video and slide content for Facebook and TikTok to drive traffic.",
    ],
  },
  {
    company: "Giant Computer",
    role: "Computer Network Technician",
    period: "March – June 2018",
    logo: "🖥️",
    highlights: [
      "Installed, configured, and maintained computer systems and networking equipment.",
      "Set up CCTV wiring, camera monitoring systems, and peripheral devices.",
      "Managed IT inventory and resolved hardware issues.",
    ],
  },
  {
    company: "MenaraHolding — Marrakech",
    role: "Computer Network Technician",
    period: "Aug 2017 – Jan 2018",
    logo: "🌐",
    highlights: [
      "Provided helpdesk technical support to internal users.",
      "Conducted ISO 27001 information security training sessions.",
      "Installed and configured FTTH networks and network printers.",
    ],
  },
];

export default function About() {
  return (
    <div>
      <p className="section-label">Work Experience</p>
      <div className="exp-list">
        {EXPERIENCE.map((job, i) => (
          <div className="exp-card" key={i}>
            <div className="exp-header">
              <div className="exp-logo">{job.logo}</div>
              <div className="exp-info">
                <div className="exp-top">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-period">
                    <FiCalendar size={11} /> {job.period}
                  </span>
                </div>
                <span className="exp-role">{job.role}</span>
              </div>
            </div>
            <ul className="exp-highlights">
              {job.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
