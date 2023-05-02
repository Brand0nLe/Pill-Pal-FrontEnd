import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../navbarheader/NavBarHeader.css';

const NavBar: React.FC = () => {
  return (
    <Navbar className="NavColor" collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
        <img src={require("../assets/images/LogoWithText.png")} alt="Logo" width="auto" height="65" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto NavFont">
            <Nav.Item>
              <Nav.Link as={Link} to="/dependentspage">
                Profiles
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboardpage">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/schedulepage">
                Schedule
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/historypage">
                History
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;