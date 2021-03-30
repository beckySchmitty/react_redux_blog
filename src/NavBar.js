import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          MicroBlog
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/new">Add Blog Post</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
