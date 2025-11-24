import React from "react";
import { NavLink } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="navContainer">
      <NavLink to="/" className="navLink">
        <h1 className="navTitle">News Articles</h1>
      </NavLink>
      <a
        href="https://github.com/Tanjum786?tab=repositories"
        target="_blank"
        className="githubLink"
        rel="noreferrer"
        title="Github"
      >
        <FiGithub />
      </a>
    </nav>
  );
};
