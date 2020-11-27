import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const ContactNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Mern App</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="active-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className="nav-link"
          activeClassName="active-link"
        >
          Contacts
        </NavLink>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="username" className="mr-sm-2" />
        <FormControl
          type="password"
          placeholder="password"
          className="mr-sm-2"
        />
        <Button variant="outline-info" className="login-btn">
          Login
        </Button>
      </Form> */}
    </Navbar>
  );
};

export default ContactNavbar;
