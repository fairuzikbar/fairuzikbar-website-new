import React from "react";
import { useLanguage } from "./LanguageContext.jsx"; // Adjust path if needed
import { FaGlobe } from "react-icons/fa6";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  return (
    <button
      style={{
        height: "30px",
        display: "flex",
        alignItems: "center",
        padding: "0",
        justifyItems: "center",
        justifyContent: "center",
        background: "none",
        color: "#555",
      }}
      onClick={toggleLanguage}
    >
      <FaGlobe style={{ paddingRight: "5px" }} />
      {language === "en" ? "ID" : "EN"}
    </button>
  );
};

export default LanguageToggle;
