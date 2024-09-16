import React from "react";
import "../assets/css/about.css"; // Custom styling

const About = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Me</h1>
        <p>
          Hello! I'm Fairuz Ikbar, a Software Quality Assurance Automation
          Engineer with a passion for technology and continuous learning. With a
          background in heavy machinery engineering, I transitioned into the
          world of IT, focusing on software testing and automation.
        </p>
      </section>

      <div className="about-content">
        <section className="about-background">
          <h2>My Journey</h2>
          <p>
            I started my career with a degree in Heavy Equipment Engineering but
            soon realized my true interest lies in the tech world. After diving
            into full stack development, I specialized in QA automation,
            ensuring software products maintain their highest quality.
          </p>
        </section>

        <section className="about-skills">
          <h2>Expertise</h2>
          <ul>
            <li>Big Data Engineering</li>
            <li>QA Automation Engineering</li>
            <li>Test Automation with Katalon Studio</li>
            <li>Full Stack Development with NodeJs & React</li>
            <li>Agile Methodologies & Collaboration Tools</li>
          </ul>
        </section>
      </div>

      {/* <div className="about-bottom">
        <section className="about-interests">
          <h2>Interests</h2>
          <p>
            Outside of work, I love exploring the latest tech trends, hiking in the mountains, and learning new programming languages. I’m also a big fan of contributing to open-source projects and participating in tech communities.
          </p>
        </section>
      </div> */}
    </div>
  );
};

export default About;
