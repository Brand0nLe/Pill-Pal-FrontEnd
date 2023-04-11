import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../registrationpage/RegistrationPage.css';

function RegistrationPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle registration form submit logic here
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2>Registration</h2>
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
  );
}

export default RegistrationPage;
