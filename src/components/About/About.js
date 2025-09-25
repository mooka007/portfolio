import "./About.css";
// import iconImage from "../../assets/images/logo.jpg";
import iconImage from "../../assets/images/img.JPG";

export const About = () => {
  return (
    <section id="about" className="container container-about text-center">
      <div className="about-right hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:rounded-xl">
        <img src={iconImage} alt="" />
      </div>
      <div className="about-left">
        <span className="purple-text">
          <span className="purple-smoke-text"> My Name is </span>{" "}
          <span className="text-figma font-weight-bold">
            Mohammed Yassine Marzouki ✋
          </span>{" "}
        </span>
        <p className="gray-text w-75 mx-auto mt-4 mb-4">
          As a MERN stack developer, I specialize in utilizing MongoDB,
          Express.js, React, and Node.js to craft dynamic and engaging web
          applications. My expertise spans both front-end and back-end
          development, allowing me to create seamless user experiences and
          robust server-side logic. With a deep understanding of JavaScript, I
          excel at building scalable and efficient full-stack solutions that
          drive innovation in web development.
        </p>
        {/* <div className="d-flex justify-content-around">
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">Web development</p>
            </p>
            <li className="fw-4">
              Front-end / Back-end
              <ul className="tech-stack m-0 mx-2">
                <li>React js / Express Js</li>
              </ul>
            </li>
          </ul>
        </div> */}
        <div className="d-flex justify-content-around mt-20 mb-20">
          <div>
            <ul className="tech-stack list-disc text-start ml-8 text-center">
              <p className=" text-center">
                <p className="text-figma font-weight-bold m-0 ">Tools</p>
              </p>
              <li>Git Bash</li>
              <li>MongoDbCompass</li>
              <li>MySql</li>
              <li>Xampp</li>
              <li>Vs Code</li>
              <li>Postman</li>
              <li>Adobe XD</li>
              <li>Trello</li>
            </ul>
          </div>
          <div>
            <ul className="tech-stack list-disc text-start mr-8 text-center">
              <p className=" text-center">
                <span className="text-figma m-0 font-weight-bold">
                  Technologies
                </span>
              </p>
              {/* <li>HTML5</li> */}
              <li>Tailwind</li>
              <li>Express.js</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>PHP</li>
              <li>C Language</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
