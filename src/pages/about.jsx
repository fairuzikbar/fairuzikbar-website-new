import React from "react";
import "../assets/css/about.css"; // Custom styling
import { useLanguage } from "../components/LanguageContext";
import translations from "../assets/json/translation.json";

const About = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Me</h1>
        <p>{t.about.intro}</p>
      </section>

      <div className="about-content">
        <section className="about-background">
          <h2>My Journey</h2>
          <p>{t.about.journey}</p>
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
