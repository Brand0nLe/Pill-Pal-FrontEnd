import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import '../loginpage/LoginPage.css';
import { Link } from 'react-router-dom';

// Define Material UI theme
const theme = createTheme();

function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login form submit logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>
            <h2>Login</h2>
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  className="login-input"
                  InputLabelProps={{
                    className: 'login-input-label'
                  }}
                  InputProps={{
                    className: 'login-input-field'
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  className="login-input"
                  InputLabelProps={{
                    className: 'login-input-label'
                  }}
                  InputProps={{
                    className: 'login-input-field'
                  }}
                />
              </Form.Group>
              <Button variant="contained" type="submit" color="primary">
                Submit
              </Button>
            </Form>
            <div className="text-center mt-3">
              <p>
                Don't have an account? <Link to="/register">Registration</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;