import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer style={{ position: 'relative', bottom: '0', width: '100%' }}>
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
      </footer>
    );
  };
  
  export default Footer;
  