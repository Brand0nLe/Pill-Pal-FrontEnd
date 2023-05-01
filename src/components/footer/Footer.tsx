import React from 'react';
import { Container } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <Container fluid className="py-3 d-flex justify-content-between align-items-center bg-dark text-white">
          <p className="m-0">© Pill Pal 2023. All rights reserved.</p>
          <div>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </Container>
        <div className="bg-secondary py-2">
          <Container>
            <p className="m-0 text-center">
              Thank you to the Pill Pal team for making this project possible!
              <Link to="/members" className="ms-2 text-white fw-bold">
                View our members' LinkedIn and GitHub profiles
              </Link>
            </p>
          </Container>
        </div>
      </footer>
    );
  }
  

  export default Footer;