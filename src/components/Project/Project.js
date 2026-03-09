import "./Project.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import TTT from "../../assets/images/TTT.PNG";
import AppLogin from "../../assets/images/App-Login.jpg";
import ipay2 from "../../assets/images/ipay2.PNG";
import pic1 from "../../assets/images/pic1.PNG";
import pic2 from "../../assets/images/pic2.PNG";
import pic3 from "../../assets/images/pic3.PNG";
import awa from "../../assets/images/awa.PNG";
import yallah from "../../assets/yallah.PNG";
import vibes from "../../assets/vibes.png";
import dash from "../../assets/dashh.PNG";
import kree from "../../assets/cmpt.PNG";
import medical from "../../assets/medical.webp";
import visitMNow from "../../assets/visitMNOW.PNG";
import hkids from "../../assets/hkidsImag.webp";
import oarding from "../../assets/oarding.png";

const PROJECTS = [
  {
    title: "Boarding Agency",
    period: "2024",
    description:
      "A modern internship placement platform with AI-powered company matching, appointment booking, real-time messaging, and full authentication with OTP verification.",
    stack: ["React", "Vite", "Tailwind CSS", "React Router", "Lucide Icons"],
    github: "https://github.com/mooka007",
    live: "https://youtu.be/rLIxRYGAGq0",
    emoji: "🏢",
    image: oarding,
  },
  {
    title: "HKids — Reading Platform",
    period: "2024",
    description:
      "A child-friendly digital reading solution for young children to enjoy books independently, with an immersive distraction-free experience.",
    stack: ["React Native", "Express.js", "Sequelize", "SQL"],
    github: "https://github.com/mooka007",
    live: "https://youtu.be/u86mka684Ic",
    emoji: "📚",
    image: hkids,
  },
  {
    title: "Visit Now Morocco",
    period: "2024",
    description:
      "A React Native travel companion app for exploring Morocco — discover cultural landmarks and hidden gems across the country.",
    stack: ["React Native", "Laravel"],
    github: "https://github.com/mooka007",
    live: "https://youtu.be/UnavfFLa4ns",
    emoji: "🇲🇦",
    image: visitMNow,
  },
  {
    title: "Kree — Rental Car App",
    period: "2023",
    description:
      "A car rental app allowing users to search available cars, reserve vehicles, and manage their rental history with a clean user interface.",
    stack: ["React Native", "Express.js", "PostgreSQL"],
    github: "https://github.com/mooka007/rental_car",
    live: "https://youtu.be/ScRxYFDZ6S4",
    emoji: "🚗",
    image: kree,
  },
  {
    title: "Stock Management Dashboard",
    period: "2023",
    description:
      "A business dashboard to manage product sales, track total revenue, monitor debts, and manage inventory levels efficiently.",
    stack: ["React", "Express.js", "Node.js", "MongoDB", "JWT", "Nodemailer"],
    github: "",
    live: "https://youtu.be/vb-V_TKLAgk",
    emoji: "📊",
    image: dash,
  },
  {
    title: "Medicaligne.fr",
    period: "2023",
    description:
      "A responsive web application offering a smooth, modern user experience for accessing medical and health-related services.",
    stack: ["React", "Tailwind CSS", "Radix UI"],
    github: "",
    live: "https://youtu.be/rwwvVLMQxv4",
    emoji: "🏥",
    image: medical,
  },
  {
    title: "YallahGive.ma",
    period: "2023",
    description:
      "A full-stack donation platform for the Moroccan market, offering a seamless experience for creating and supporting people in need.",
    stack: ["React", "Tailwind CSS", "Express.js"],
    github: "https://github.com/mooka007/iPay.git",
    live: "https://youtu.be/Rpr8GUpSQ5g",
    emoji: "🤝",
    image: yallah,
  },
  {
    title: "Booking App Backend",
    period: "2023",
    description:
      "A secure, scalable back end for user-posted activities and bookings, with dedicated data modeling and integrated Stripe payment processing.",
    stack: ["Express.js", "Node.js", "MongoDB", "Stripe", "JWT", "Nodemailer"],
    github: "https://github.com/mooka007/Adavisor",
    live: "",
    emoji: "📅",
    image: vibes,
  },
  {
    title: "IPay",
    period: "2022",
    description:
      "A MERN stack peer-to-peer payment app for secure money transfers between friends with an intuitive Material-UI interface.",
    stack: ["React", "MUI", "Express.js", "MongoDB"],
    github: "https://github.com/mooka007/iPay.git",
    live: "https://www.youtube.com/watch?v=yZh67M_WGXE",
    emoji: "💸",
    image: ipay2,
  },
  {
    title: "Shopping Store",
    period: "2022",
    description:
      "A ReactJS shop with Redux state management, featuring product listings, cart management, and a full checkout process.",
    stack: ["React", "Redux", "Bootstrap"],
    github: "https://github.com/mooka007/ecomReact.git",
    live: "https://www.youtube.com/watch?v=W58BsdM4VhU",
    emoji: "🛒",
    image: pic1,
  },
  {
    title: "Portfolio",
    period: "2022",
    description:
      "A digital portfolio showcasing web apps and projects with a clean, responsive design.",
    stack: ["React", "Tailwind", "CSS3"],
    github: "https://github.com/mooka007/",
    live: "",
    emoji: "🗂️",
    image: pic3,
  },
  {
    title: "Rent-A-Car",
    period: "2022",
    description:
      "A car rental platform offering a wide vehicle selection for trips and temporary needs with a seamless online booking experience.",
    stack: ["React", "Node.js", "Tailwind"],
    github: "https://github.com/mooka007/Car/",
    live: "https://www.youtube.com/watch?v=qtDlWeXQxUI",
    emoji: "🚙",
    image: pic2,
  },
  {
    title: "School Management App",
    period: "2021",
    description:
      "A full management solution for educational institutions handling students, classes, and schedules.",
    stack: ["PHP", "Bootstrap", "JavaScript"],
    github: "https://github.com/mooka007/Managemen-School-App.git",
    live: "",
    emoji: "🎓",
    image: AppLogin,
  },
  {
    title: "Tic Tac Toe",
    period: "2021",
    description:
      "A simple but clean Tic Tac Toe game built with vanilla JavaScript.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/mooka007/JS-Projects/tree/master/tictactoe",
    live: "",
    emoji: "🎮",
    image: TTT,
  },
  {
    title: "printf",
    period: "2021",
    description:
      "A custom C implementation of the printf function — built during the 42 Network Piscine program.",
    stack: ["C Language"],
    github: "https://github.com/mooka007/_printf",
    live: "",
    emoji: "⌨️",
    image: awa,
  },
];

export default function Project() {
  return (
    <div>
      <p className="section-label">Check out my latest work</p>
      <p className="projects-sub">
        I've worked on a variety of projects — from mobile apps to full-stack
        platforms. Here are a few of my favorites.
      </p>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className="project-card" key={i}>
            {/* Project Image */}
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>

            {/* Links */}
            <div className="project-top">
              {/* <div className="project-emoji">{p.emoji}</div> */}
              <div className="project-links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    title="GitHub"
                  >
                    <FiGithub size={15} />
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    title="Demo"
                  >
                    <FiExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="project-body">
              <div className="project-title-row">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-period">{p.period}</span>
              </div>
              <p className="project-desc">{p.description}</p>
            </div>

            {/* Stack */}
            <div className="project-stack">
              {p.stack.map((t, j) => (
                <span className="stack-tag" key={j}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
