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
        <p className="hero-title">Full-Stack Js Developer</p>
        <p className="hero-location">
          <FiMapPin size={13} /> Beni Mellal, Morocco
        </p>
        <p className="hero-bio">
          I'm a passionate developer focused on building{" "}
          <a href="#projects">real-world web & mobile apps</a> with React,
          Node.js, and React Native. I love clean code,{" "}
          <a href="#about">great UX</a>, and turning ideas into products.
        </p>
        <p className="hero-cta">Let's create something meaningful together.</p>
      </div>
      <div className="hero-avatar">
        <div className="hero-avatar-inner">
          <img src={ana} alt="Yassine Marzouki" className="avatar-img" />
        </div>
      </div>
    </div>
  );
}
