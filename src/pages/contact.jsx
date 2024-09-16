import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaBehance,
  FaGithub,
} from "react-icons/fa6";
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Whether you have a project in mind, a question to ask, or just want to
          connect, feel free to reach out! I’d love to hear from you.
        </p>
      </div>

      <div className="map-section">
        <iframe
          title="Jakarta Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.6563887077!2d106.66470238333572!3d-6.229379590088342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1726467044830!5m2!1sen!2sid"
          width="100%"
          height="350"
          style={{
            border: 0,
            borderRadius: "10px",
            filter: "grayscale(100%)", // Apply grayscale filter
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>
              Email:{" "}
              <a href="mailto:your.email@example.com">
                fairuzikbar.space@gmail.com
              </a>
            </span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Location: Jakarta, Indonesia</span>
          </div>
        </div>

        <div className="social-media">
          <h2>Stay Connected</h2>
          <p>
            Let’s stay in touch through social media. Follow my journey, see my
            latest updates, and feel free to reach out!
          </p>
          <div className="social-grid">
            <a
              href="https://instagram.com/fairuzikbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com/in/fairuzikbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://youtube.com/fairuzikbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="social-icon" />
              <span>YouTube</span>
            </a>
            <a
              href="https://behance.net/fairuzikbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="social-icon" />
              <span>Behance</span>
            </a>
            <a
              href="https://github.com/fairuzikbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
