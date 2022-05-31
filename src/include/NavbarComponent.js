import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import "../style/style.css"
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar className="navbarColor" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-white">SMKN 7 PONTIANAK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link text-white" to={`/smkn7ptk`}>Home</Link>
              <Link to={`/profil/smkn7ptk`} className="nav-link text-white">Kejuruan</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
