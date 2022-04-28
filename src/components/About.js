import { useEffect, useState } from "react";
import a from "../assets/SC.png";
import Animation from "./Animation";
import "./About.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Animation
              letterClass={letterClass}
              strArray={["M", "y", "", "P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
            />
          </h1>
          <p>
            Welcome to the projects section. In this section, I would like to
            introduce you to my passion for coding. I spend a lot of time
            learning to code, I try to be better at it day by day. Feel free to
            watch the projects!
          </p>
          <p align="LEFT">
            A few words about me - I am a young, ambitious person who would like
            to take the first steps in the IT industry. I want an internship
            that will allow me to spread my wings. I will be grateful for the
            recommendation.
          </p>
          <p>
            I am currently working on: HTML5, CSS3, Sass/SCSS, JavaScript
            ES6+,React & Hooks, CSS Modules, Styled Components, Git. I am
            constantly deepening my knowledge :)
          </p>
        </div>
        <div className="project">
          <img src={a} alt="project"></img>
          <div className="space">
            <button>Check Code</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
