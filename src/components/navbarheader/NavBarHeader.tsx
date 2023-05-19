import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../navbarheader/NavBarHeader.css';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const handleLogout = () => {
    window.location.href = '/login';
  };

  const handleNavItemClick = (path: string) => {
    setActivePage(path);
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
              <Nav.Link
                as={Link}
                to="/dependentspage"
                onClick={() => handleNavItemClick('/dependentspage')}
                className={activePage === '/dependentspage' ? 'active' : ''}
              >
                Profiles
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/dashboardpage"
                onClick={() => handleNavItemClick('/dashboardpage')}
                className={activePage === '/dashboardpage' ? 'active' : ''}
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/schedulepage"
                onClick={() => handleNavItemClick('/schedulepage')}
                className={activePage === '/schedulepage' ? 'active' : ''}
              >
                Schedule
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/historypage"
                onClick={() => handleNavItemClick('/historypage')}
                className={activePage === '/historypage' ? 'active' : ''}
              >
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
