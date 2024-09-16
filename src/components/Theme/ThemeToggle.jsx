// src/components/ThemeToggle.js
import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "../../assets/css/themetoggle.css"; // Import CSS for custom styles

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme; // Apply theme to body
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme; // Apply theme to body
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
};

export default ThemeToggle;
