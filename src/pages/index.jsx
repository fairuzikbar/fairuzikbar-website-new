import React from "react";
import "../assets/css/hero.css";
import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaSquareTwitter,
  FaFileArrowDown,
} from "react-icons/fa6";
import Profile from "../assets/img/profile.jpg";
import { useLanguage } from "../components/LanguageContext";
import translations from "../assets/json/translation.json";

const Home = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div className="home">
      <div className="hero-banner">
        <div className="profile-section">
          <img
            src={Profile} // Replace with your profile image URL
            alt="Profile"
            className="profile-photo"
          />
          <h1 className="name">Fairuz Ikbar</h1>
          <p className="occupation">QA Automation Engineer</p>
          <p className="bio">{t.hero.bio}</p>
          <NavLink to="/download-cv">
            <button className="contact-button">
              <FaFileArrowDown /> {t.hero.button}
            </button>
          </NavLink>
        </div>
        {/* <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareTwitter /> Twitter
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
