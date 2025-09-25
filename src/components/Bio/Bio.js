import { Tooltip } from "react-tooltip";

import "./Bio.css";

export const Bio = () => {
  const BIO = [
    {
      year: 2025,
      title: {
        where: "Udemy",
        cargo: "DevOps Beginners to Advanced with Projects",
        description:
          "Mastering the modern DevOps lifecycle: CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, cloud deployment strategies, and infrastructure as code (IaC) to enable rapid and reliable software delivery.",
      },
    },
    {
      year: 2023,
      title: {
        where: "Geeks Institute - LaStartUpStation",
        cargo: "Full-Stack Coding Bootcamp - MERN Stack Developer",
        description:
          "Intensive, project-driven bootcamp honing expertise in the full JavaScript stack. Built and deployed complex applications using React, Node.js, Express, and MongoDB, focusing on scalable architecture, RESTful API design, and agile methodologies.",
      },
    },
    {
      year: 2023,
      title: {
        where: "YouCode - Youssoufia",
        cargo: "Full Stack JavaScript Development",
        description:
          "Immersive two-year program at a pioneering coding school designed to train the developers of tomorrow. Gained profound mastery of both front-end and back-end JavaScript, building dynamic, user-centric web applications from the ground up in a collaborative, project-based environment.",
      },
    },
    {
      year: 2021,
      title: {
        where: "1337 - Ben Guerir",
        cargo: "Formation in C",
        description:
          "A transformative month at 42 Network's rigorous 'Pool' program. This wasn't just learning C; it was a mindset revolution. It rewired my problem-solving approach to pure logic and algorithmic thinking, fostering peer-to-peer learning, resilience, and unparalleled self-efficacy in tackling complex challenges from the ground up.",
      },
    },
    {
      year: 2021,
      title: {
        where: "World TESOL Academy",
        cargo: "TESOL Certificate",
        description:
          "Certified in Teaching English to Speakers of Other Languages, mastering methodologies for lesson planning, classroom management, and effective cross-cultural communication. This enhanced my ability to explain complex technical concepts clearly and collaborate in diverse global teams.",
      },
    },
    {
      year: 2019,
      title: {
        where: "Union It Services - Casablanca",
        cargo: "Network Technician Specialist",
        description:
          "Acquired hands-on expertise in building and maintaining robust network infrastructures. This included physical installation, configuring Cisco routers and switches, and administering Windows Server 2012 environments, forming a critical foundation for understanding full-stack application deployment and security.",
      },
    },
    {
      year: 2016,
      title: {
        where: "ISGI - Marrakech",
        cargo: "Computer Network Technician",
        description: "",
      },
    },
  ];

  return (
    <>
      <p className="purple-text text-center my-10">
        📚 Bio <span className="purple-smoke-text ">- So it started here</span>
      </p>
      <section className="container container-lines w-1/2  scrollable-projects ">
        {BIO.map((e, id) => (
          <div key={id} className="">
            <div className="line"></div>
            <div className="timeline-container hover:scale-105 transition-transform duration-300">
              <div className="line"></div>
              <div className="timeline-items">
                <div key={id} className="lines-item">
                  <span className="white-text text-figma">
                    {e.year} - {e.title.where}.
                  </span>
                  <br></br>
                  <span className="gray0-text">-/ {e.title.cargo}</span>
                  <br></br>
                  <span className="gray-text aaa">- {e.title.description}</span>
                  {/*  */}

                  {/* <div className="line"></div> */}
                </div>
              </div>
              {/* <div className="line"></div> */}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
