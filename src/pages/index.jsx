import React from "react";
import "../assets/css/hero.css";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaSquareTwitter } from "react-icons/fa6";
import Profile from "../assets/img/profile.jpg";

const Home = () => {
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
          <p className="bio">
            Graduate of Bachelor of Applied Engineering with a background in
            Heavy Equipment Engineering who switched to the IT field by studying
            Full Stack Development using NodeJs and Angular for ±3 months. I
            previously worked as a Big Data Engineer at OCBC NISP and currently
            have a career as a Software Quality Assurance Automation Engineer at
            Bank Mandiri.
          </p>
          <NavLink to="/resume">
            <button className="contact-button">See my resume</button>
          </NavLink>
        </div>
        <div className="social-links">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
