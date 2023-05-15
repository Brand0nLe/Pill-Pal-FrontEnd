import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../navbarheader/NavBarHeader.css';

const NavBar: React.FC = () => {
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <Navbar className="NavColor" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
          <Nav>
            <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
