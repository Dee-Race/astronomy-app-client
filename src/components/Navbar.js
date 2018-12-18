import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="astronomy-app">
        AstronomyApp
      </a>
      <NavLink to="/" className="home-button">
        Home
      </NavLink>
      <NavLink to="/about" className="about-button">
        About
      </NavLink>
      <NavLink to="/new" className="new-button">
        New AstroNote
      </NavLink>
      <NavLink to="/notes" className="all-notes-button">
        All AstroNotes
      </NavLink>
    </div>
  );
};
