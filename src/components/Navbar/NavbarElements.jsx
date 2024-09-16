import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffffff;
  box-shadow: ${(props) =>
    props.isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none"};
  height: 85px;
  display: flex;
  position: sticky; /* Make it sticky */
  top: 0; /* Stick to the top */
  border-radius: ${(props) =>
    props.isScrolled && !props.isOpen
      ? "0 0 30px 30px"
      : "0"}; /* Change border-radius based on scroll and menu state */
  transition: border-radius 0.3s ease-in-out, background-color 0.3s ease-in-out;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1560px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #404040;
  }
  &:hover {
    color: #606060;
  }
  @media screen and (max-width: 768px) {
    color: #ffffff;
    margin: 1rem 0;
    &.active {
      color: #dddddd;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #555;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) =>
      isOpen ? "block" : "none"}; /* Toggling display */
    position: absolute;
    top: 85px; /* Adjust position below the Nav */
    background-color: #555;
    padding: 1rem 0;
    margin-top: 0.4rem;
    flex-direction: column;
    width: 100%; /* Set width to 100% to match the Nav */
    left: 0; /* Align with the left side of the screen */
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 2000px;
  background: #fff;
  color: #808080;
  border: 1px solid #808080;
  padding: 10px 22px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #808080;
    color: #fff;
  }
`;
