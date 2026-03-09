import "./Bio.css";

const EDUCATION = [
  {
    year: "2025",
    where: "Udemy",
    cargo: "DevOps: Beginners to Advanced with Projects",
  },
  {
    year: "2025",
    where: "Geeks Institute · LaStartUpStation",
    cargo: "Full-Stack Bootcamp — MERN Stack Developer",
  },
  {
    year: "2023",
    where: "YouCode — Youssoufia",
    cargo: "Full Stack JavaScript Development (2 years)",
  },
  {
    year: "2021",
    where: "1337 · Ben Guerir (42 Network)",
    cargo: "Formation in C — Piscine Program",
  },
  { year: "2021", where: "World TESOL Academy", cargo: "TESOL Certificate" },
  {
    year: "2019",
    where: "Union IT Services · Casablanca",
    cargo: "Network Technician Specialist",
  },
  {
    year: "2016",
    where: "ISGI · Marrakech",
    cargo: "Computer Network Technician Diploma",
  },
];

const SKILLS = [
  "React",
  "React Native",
  "Node.js",
  "Express",
  "JavaScript",
  "TypeScript",
  "Python",
  "MySQL",
  "MongoDB",
  "Sequelize",
  "Tailwind CSS",
  "REST API",
  "JWT Auth",
  "Stripe",
  "Firebase",
  "Git",
  "Docker",
  "FastAPI",
  "Expo",
  "Cloudinary",
];

export const Bio = () => (
  <div>
    {/* Education */}
    {/* <p className="section-label">Education</p>
    <div className="edu-list">
      {EDUCATION.map((item, i) => (
        <div className="edu-item" key={i}>
          <div className="edu-left">
            <span className="edu-year">{item.year}</span>
            <div className="edu-line" />
          </div>
          <div className="edu-card">
            <p className="edu-where">{item.where}</p>
            <p className="edu-cargo">{item.cargo}</p>
          </div>
        </div>
      ))}
    </div> */}

    {/* Skills */}
    <p className="section-label" style={{ marginTop: "2.5rem" }}>
      Skills
    </p>
    <div className="skills-grid">
      {SKILLS.map((s, i) => (
        <span className="skill-tag" key={i}>
          {s}
        </span>
      ))}
    </div>
  </div>
);
