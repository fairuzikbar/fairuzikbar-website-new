import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu
  const [isScrolled, setIsScrolled] = useState(false); // State to control menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Remove border-radius when scrolling
      } else {
        setIsScrolled(false); // Add border-radius when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  // Close menu when a NavLink is clicked
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav isScrolled={isScrolled} isOpen={isOpen}>
        <NavLink
          to="/"
          style={{
            color: "#404040",
            fontSize: "20px",
            fontWeight: "600",
            padding: "0 1rem",
            margin: "0",
          }}
          onClick={handleNavLinkClick}
        >
          Fairuzikbar
        </NavLink>
        <Bars onClick={toggleMenu} /> {/* Toggle on click */}
        <NavMenu isOpen={isOpen}>
          <NavLink to="/about" onClick={handleNavLinkClick}>
            About
          </NavLink>
          <NavLink to="/resume" onClick={handleNavLinkClick}>
            Resume
          </NavLink>
          <NavLink to="/portofolio" onClick={handleNavLinkClick}>
            Portofolio
          </NavLink>
          <NavLink to="/contact" onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </NavMenu>
        {/* <ThemeToggle /> */}
      </Nav>
    </>
  );
};

export default Navbar;
