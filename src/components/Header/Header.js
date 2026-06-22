import "./Header.css";
import { FiMapPin } from "react-icons/fi";
import ana from "../../assets/images/ana.png";

export default function Header() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-name">
          Hi, I'm Yassine <span className="wave">👋</span>
        </h1>
        <p className="hero-title">Full-Stack JavaScript Developer</p>
        <p className="hero-location">
          <FiMapPin size={13} /> CasaBlanca, Morocco
        </p>
        <p className="hero-bio">
          I build <a href="#projects">websites, mobile apps, and SaaS products</a>{" "}
          with React, Node.js, Express, React Native, PostgreSQL, and MongoDB.
          I also bring AI into products through RAG features, smarter search,
          document reasoning, and context-aware assistants.
        </p>
        <p className="hero-cta">
          Open to Full Stack and React Native roles where I can bring energy,
          ownership, and useful products to life.
        </p>
      </div>
      <div className="hero-avatar">
        <div className="hero-avatar-inner">
          <img src={ana} alt="Yassine Marzouki" className="avatar-img" />
        </div>
      </div>
    </div>
  );
}
