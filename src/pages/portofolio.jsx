import React from "react";
import "../assets/css/portofolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <section className="portfolio-header">
        <h1>Portfolio</h1>
        <p>
          A collection of my professional accomplishments and project work in
          Software Quality Assurance Automation and Big Data Engineering.
        </p>
      </section>

      <section className="portfolio-section">
        <h2 className="section-title">Projects Overview</h2>
        <div className="portfolio-item">
          <h3>Banking Application Test Automation</h3>
          <p>
            Developed automated test cases for critical mobile banking
            applications using Selenium and Katalon Studio, significantly
            reducing post-release issues.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>API Test Automation</h3>
          <p>
            Developed API automated test cases for Backend applications using
            Katalon Studio, significantly reducing manual testing time.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Migrate SAS to SQL</h3>
          <p>
            Migrated from SAS language (*.sas) to SQL (*.sql), ensuring data
            accuracy by comparing outputs from the original SAS to the SQL
            queries until the results matched.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Data Workflow Transition</h3>
          <p>
            Migrated from Informatica to Airflow for data extraction by
            deploying table in Airflow. Configured scheduling and table
            dependencies to streamline data workflows and ensure efficient data
            processing.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Microsoft BI Report Creation</h3>
          <p>
            Developed new reporting services using Microsoft Business
            Intelligence in Visual Studio, enhancing data visualization and
            reporting capabilities to support informed decision-making and
            operational efficiency.
          </p>
        </div>
      </section>

      <section className="portfolio-section">
        <h2 className="section-title">Case Studies</h2>
        <div className="portfolio-item">
          <h3>Streamlining TOML Workflows with Python</h3>
          <p>
            Simplified the workflow for building TOML files using Python,
            enhancing efficiency and automation in configuration management and
            reducing manual effort.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
