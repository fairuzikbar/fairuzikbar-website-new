import React from "react";
import "../assets/css/resume.css"; // Custom styling here
import { useLanguage } from "../components/LanguageContext";
import translations from "../assets/json/translation.json";

const Resume = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div className="resume-container">
      <section className="resume-header">
        <h1>Resume</h1>
        <p>{t.resume.intro}</p>
      </section>

      <section className="resume-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>{t.resume.education.first.title}</h3>
            <span className="timeline-duration">
              {t.resume.education.first.major} | Universitas Gadjah Mada
              <br />
              2016 - 2021 | GPA 3.58 / 4.00
            </span>
          </div>
        </div>
      </section>

      <section className="resume-section experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Software Quality Assurance Automation Engineer</h3>
            <span className="timeline-duration">
              Bank Mandiri | {t.resume.experience.first.period}
            </span>
            <p>
              <ul>
                <li>{t.resume.experience.first.desc.first}</li>
                <li>{t.resume.experience.first.desc.second}</li>
                <li>{t.resume.experience.first.desc.third}</li>
              </ul>
            </p>
          </div>
          <div className="timeline-item">
            <h3>Big Data Engineer</h3>
            <span className="timeline-duration">
              Bank OCBC | {t.resume.experience.second.period}
            </span>
            <p>
              <ul>
                <li>{t.resume.experience.second.desc.first}</li>
                <li>{t.resume.experience.second.desc.second}</li>
                <li>{t.resume.experience.second.desc.third}</li>
                <li>{t.resume.experience.second.desc.fourth}</li>
                <li>{t.resume.experience.second.desc.fifth}</li>
                <li>{t.resume.experience.second.desc.sixth}</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <div className="resume-bottom">
        <section className="skills-section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>NodeJs and ReactJs</li>
            <li>QA Automation (Selenium, Katalon Studio, Postman)</li>
            <li>Big Data Tools (postgreSQL, mySQL, etc)</li>
          </ul>
        </section>

        <section className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <ul className="certifications-list">
            <li>Alibaba Cloud Certified Associate (ACA) Big Data</li>
            <li>SQL (Advanced) by HackerRank</li>
            <li>Python 101 for Data Science by IBM</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
