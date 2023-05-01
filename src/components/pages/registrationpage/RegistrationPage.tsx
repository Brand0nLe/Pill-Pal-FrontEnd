import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../registrationpage/RegistrationPage.css';

const theme = createTheme();


function RegistrationPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle registration form submit logic here
  };

  return (
    <ThemeProvider theme={theme}>

<Container>
  <Col md={6}></Col>
<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img src={require("../../assets/images/LogoWithText.png")} alt="Logo" />
  </div>
</Container>

<Container>
  <Col md={6}></Col>
<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
<h2> Registration </h2>
  </div>
</Container>
    
    <Container>
      <Row className="justify-content-md-center mt-1">
        <Col md={6}>
          <Form className="registration-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex">
              <TextField
                label="First Name"
                fullWidth
                className="registration-input mr-2"
                InputLabelProps={{
                  className: 'registration-input-label, borderRadius'
                }}
                InputProps={{
                  className: 'registration-input-field, borderRadius'
                }}
              />
              <TextField
                label="Last Name"
                fullWidth
                className="registration-input"
                InputLabelProps={{
                  className: 'registration-input-label, borderRadius'
                }}
                InputProps={{
                  className: 'registration-input-field, borderRadius'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <TextField
                label="Email"
                type="email"
                fullWidth
                className="registration-input"
                InputLabelProps={{
                  className: 'registration-input-label, borderRadius'
                }}
                InputProps={{
                  className: 'registration-input-field, borderRadius'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <TextField
                label="Password"
                type="password"
                fullWidth
                className="registration-input"
                InputLabelProps={{
                  className: 'registration-input-label, borderRadius'
                }}
                InputProps={{
                  className: 'registration-input-field, borderRadius'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                className="registration-input"
                InputLabelProps={{
                  className: 'registration-input-label, borderRadius'
                }}
                InputProps={{
                  className: 'registration-input-field, borderRadius'
                }}
              />
            </Form.Group>
            <Button variant="contained" type="submit" className='signupBtn'>
              Sign Up
            </Button>
            <div className="text-center mt-3">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </ThemeProvider>
  );
}

export default RegistrationPage;
