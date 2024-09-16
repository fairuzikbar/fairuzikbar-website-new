import React from "react";
import "../../assets/css/footer.css"; // Add CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Fairuzikbar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
