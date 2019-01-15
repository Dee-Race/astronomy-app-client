import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavLink, NavbarBrand, Nav, NavItem } from "reactstrap";
import "../App.css";

export const NavbarFeatures = () => {
  return (
    <div>
      <Navbar color="blue" light expand="md">
        <NavbarBrand style={{ color: "white" }} href="/">
          AstronomyApp
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/new">
              New AstroNote
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/notes">
              All AstroNotes
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
