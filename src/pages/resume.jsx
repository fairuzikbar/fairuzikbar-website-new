import React from "react";
import "../assets/css/resume.css"; // Custom styling here

const Resume = () => {
  return (
    <div className="resume-container">
      <section className="resume-header">
        <h1>Resume</h1>
        <p>
          Below is a detailed summary of my professional experience, education,
          and skills as a Software Quality Assurance Automation Engineer & Big
          Data Engineer.
        </p>
      </section>

      <section className="resume-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Bachelor of Applied Science (BASc)</h3>
            <span className="timeline-duration">
              Heavy Equipment Engineering | Universitas Gadjah Mada
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
              Bank Mandiri | November 2023 - Present
            </span>
            <p>
              <ul>
                <li>Testing API & mobile applications using Katalon Studio</li>
                <li>Build automation dashboard using ReactJs</li>
                <li>Enhance API for automation dashboard</li>
              </ul>
            </p>
          </div>
          <div className="timeline-item">
            <h3>Big Data Engineer</h3>
            <span className="timeline-duration">
              Bank OCBC | October 2022 - October 2023
            </span>
            <p>
              <ul>
                <li>Migrate SAS Language to Hive SQL and Python (Jupyter)</li>
                <li>UAT script Webstatement Phase 2 using python</li>
                <li>Replicate table using Airflow</li>
                <li>Enhancement existing function in postgreSQL</li>
                <li>
                  Create new report services using Business Intelligence
                  Microsoft Visual Studio
                </li>
                <li>Create function for reporting services using Hive SQL</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <div className="resume-bottom">
        <section className="resume-section skills-section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>NodeJs and ReactJs</li>
            <li>QA Automation (Selenium, Katalon Studio, Postman)</li>
            <li>Big Data Tools (postgreSQL, mySQL, etc)</li>
          </ul>
        </section>

        <section className="resume-section certifications-section">
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
