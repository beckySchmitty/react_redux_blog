import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="Nav-container">
      <header className="Nav-header jumbotron mt-2">
      <Navbar expand="md">
          <h1 className="App-title display-4">
        <NavLink exact to="/" className="Nav-header">
          MicroBlog
        </NavLink>
        </h1>

        <Nav >
            <NavLink className="Nav-link" to="/">Blog</NavLink>
            <NavLink className="Nav-link" to="/new">Add Blog Post</NavLink>
        </Nav>
      </Navbar>
      </header>
    </div>
  );
}

export default NavBar;
