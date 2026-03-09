import "./Footer.css";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-title">Get in Touch</h2>
      <p className="footer-sub">
        Want to chat? Just shoot me a direct message on{" "}
        <a
          href="https://wa.me/212631383272"
          target="_blank"
          rel="noreferrer"
          // className="footer-icon-link"
        >
          WhatsApp
        </a>{" "}
        or <a href="mailto:marzoukimohammedyassine@gmail.com">email</a> and I'll
        respond whenever I can.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/mooka007"
          target="_blank"
          rel="noreferrer"
          className="footer-icon-link"
        >
          <FiGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammedyassinemarzoukia57306151/"
          target="_blank"
          rel="noreferrer"
          className="footer-icon-link"
        >
          <FiLinkedin size={18} />
        </a>
        <a
          href="mailto:marzoukimohammedyassine@gmail.com"
          className="footer-icon-link"
        >
          <FiMail size={18} />
        </a>
        <a
          href="https://wa.me/212631383272"
          target="_blank"
          rel="noreferrer"
          className="footer-icon-link"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>
      <p className="footer-copy">
        © 2025 Mohammed Yassine Marzouki · Built with React
      </p>
    </div>
  );
}
