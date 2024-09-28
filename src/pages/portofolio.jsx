import React from "react";
import "../assets/css/portofolio.css";
import { useLanguage } from "../components/LanguageContext";
import translations from "../assets/json/translation.json";

const Portfolio = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div className="portfolio-container">
      <section className="portfolio-header">
        <h1>Portfolio</h1>
        <p>{t.portofolio.intro}</p>
      </section>

      <section className="portfolio-section">
        <h2 className="section-title">Projects Overview</h2>
        <div className="portfolio-item">
          <h3>{t.portofolio.overview.first.title}</h3>
          <p>{t.portofolio.overview.first.desc}</p>
        </div>
        <div className="portfolio-item">
          <h3>{t.portofolio.overview.second.title}</h3>
          <p>{t.portofolio.overview.second.desc}</p>
        </div>
        <div className="portfolio-item">
          <h3>{t.portofolio.overview.third.title}</h3>
          <p>{t.portofolio.overview.third.desc}</p>
        </div>
        <div className="portfolio-item">
          <h3>{t.portofolio.overview.fourth.title}</h3>
          <p>{t.portofolio.overview.fourth.desc}</p>
        </div>
        <div className="portfolio-item">
          <h3>{t.portofolio.overview.fifth.title}</h3>
          <p>{t.portofolio.overview.fifth.desc}</p>
        </div>
      </section>

      <section className="portfolio-section">
        <h2 className="section-title">Case Studies</h2>
        <div className="portfolio-item">
          <h3>{t.portofolio.case.first.title}</h3>
          <p>{t.portofolio.case.first.desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
