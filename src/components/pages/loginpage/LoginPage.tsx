import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import '../loginpage/LoginPage.css';

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
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
