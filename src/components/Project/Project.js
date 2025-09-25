import React from "react";
import "./Project.css";
import Line from "../../assets/images/line-purple.svg";
import TTT from "../../assets/images/TTT.PNG";
import Youtube from "../../assets/images/youtube.png";
import AppLogin from "../../assets/images/App-Login.jpg";
import ipay2 from "../../assets/images/ipay2.PNG";
import pic1 from "../../assets/images/pic1.PNG";
import pic2 from "../../assets/images/pic2.PNG";
import pic3 from "../../assets/images/pic3.PNG";
import awa from "../../assets/images/awa.PNG";
import yallah from "../../assets/yallah.PNG";
import vibes from "../../assets/vibes.png";

// console.log(yallah);
function Project() {
  const Experience = [
    {
      id: 0,
      title: "Booking App Backend",
      description:
        "This project implements a secure, scalable back end for user-posted activities and bookings, featuring dedicated data modeling and integrated payment processing.",
      image: { vibes },
      githubUrl: "https://github.com/mooka007/Adavisor",
      // demoUrl: "https://youtu.be/",
      technologies: [
        "Express js",
        "Node js",
        "MongoDB",
        "Stripe",
        "JWT",
        "Nodemailer",
        "sequelize",
      ],
      featured: true,
    },
    {
      id: 1,
      title: "YallahGive.ma",
      description:
        "is a full-stack donation platform designed for the Moroccan market. it offers a seamless user experience for creating and supporting people in need.",
      image: { yallah },
      githubUrl: "https://github.com/mooka007/iPay.git",
      demoUrl: "https://youtu.be/Rpr8GUpSQ5g",
      technologies: ["React js", "tailwind", "Express js"],
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio",
      description: "A digital portfolio showcasing web apps and projects.",
      image: { pic3 },
      githubUrl: "https://github.com/mooka007/",
      demoUrl: "https://www.youtube.com/watch?v=yZh67M_WGXEasd",
      technologies: ["React js", "Tailwind", "CSS3"],
      featured: true,
    },
    {
      id: 3,
      title: "IPay",
      description:
        "A MERN stack payment app for secure money transfers between friends with an intuitive Material-UI interface.",
      image: { ipay2 },
      githubUrl: "https://github.com/mooka007/iPay.git",
      demoUrl: "https://www.youtube.com/watch?v=yZh67M_WGXE",
      technologies: ["React js", "Mui", "Express js"],
      featured: true,
    },
    {
      id: 4,
      title: "Shopping Store",
      description:
        "A ReactJS shop store using Reactstrap and Redux for state management. Includes product listings, cart, and checkout process.",
      image: { pic1 },
      githubUrl: "https://github.com/mooka007/ecomReact.git",
      demoUrl: "https://www.youtube.com/watch?v=W58BsdM4VhU&t=61s",
      technologies: ["React js", "bootstrap", "CSS3"],
      featured: true,
    },
    {
      id: 5,
      title: "Tic Tac Toe",
      description: "A simple Tic tac toe game.",
      image: { TTT },
      githubUrl:
        "https://github.com/mooka007/JS-Projects/tree/master/tictactoe",
      demoUrl: "",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      featured: true,
    },
    {
      id: 6,
      title: "Managemen-School-App",
      description:
        "The Management School App website, built using PHP and JavaScript, offers seamless management solutions for educational institutions.",
      image: { AppLogin },
      githubUrl: "https://github.com/mooka007/Managemen-School-App.git",
      demoUrl: "",
      technologies: ["PHP - native", "Bootstrap", "JavaScript"],
      featured: true,
    },

    {
      id: 7,
      title: "Rent-A-Car",
      description:
        "A car rental platform offering a wide vehicle selection for trips and temporary needs. Provides a seamless online booking experience.",
      image: { pic2 },
      githubUrl: "https://github.com/mooka007/Car/",
      demoUrl: "https://www.youtube.com/watch?v=qtDlWeXQxUI",
      technologies: ["React js", "Node js", "Tailwind"],
      featured: true,
    },
    {
      id: 8,
      title: "printf",
      description:
        "A versatile function in programming languages that outputs formatted text to the console or other output streams",
      image: { awa },
      githubUrl: "https://github.com/mooka007/_printf",
      demoUrl: "",
      technologies: ["C Language"],
      featured: true,
    },
  ];
  return (
    ////////////////////////////

    <section className="my-20">
      <div className="purple-text text-center">
        ‍💻 Open Source -
        <span className="purple-smoke-text"> Visit my latest projects </span>{" "}
        <div className="resp ">
          {Experience.map((project) => (
            <div
              id="projects"
              key={project.id}
              className={`project-card ${
                project.featured ? "" : "col"
              } hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:rounded-xl `}
            >
              <div className="flex align-items-center flex-col ml-3">
                <div className="project-header">
                  <div className="project-box text-left">
                    <span className="white-text ">{project.title}</span>
                    <p className="gray-text text-box text-left">
                      {project.description}
                    </p>
                  </div>
                  <img className="project-line" src={Line} alt="abajo" />
                </div>
                <div className="project-details">
                  <img
                    src={
                      project.image.ipay2 ||
                      project.image.TTT ||
                      project.image.pic1 ||
                      project.image.pic2 ||
                      project.image.pic3 ||
                      project.image.AppLogin ||
                      project.image.awa ||
                      project.image.yallah
                    }
                    className="project-picture"
                    alt={`Project ${project.title}`}
                  />
                  <div className="details-left text-left">
                    <span className="white-text text-left">Technologies</span>
                    <div className="details-stack mb-2">
                      <ul className="gray-text text-left list-disc ml-6">
                        {project.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    {project.demoUrl && (
                      <div className="gray-text flex flex-col ">
                        Check demo on :{" "}
                        <div className="flex">
                          <div className="mx-1 mt-1">
                            <img
                              className="mb-1 little-icon-2"
                              src={Youtube}
                              alt="GitHub"
                            />{" "}
                          </div>
                          <div className="">
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              className="text-figma"
                            >
                              Youtube
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="gray-text flex flex-col mt-2 ">
                      A little star on{" "}
                      <div className="flex">
                        <div className="mx-1 mt-1">
                          <img
                            className="mb-1 little-icon-2"
                            src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                            alt="GitHub"
                          />{" "}
                        </div>
                        <div className="">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            className=" text-figma"
                          >
                            Github
                          </a>
                        </div>
                      </div>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
