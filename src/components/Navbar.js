import React from "react";
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
            <NavLink style={{ color: "white" }} href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} href="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} href="/new">
              New AstroNote
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} href="/notes">
              All AstroNotes
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
