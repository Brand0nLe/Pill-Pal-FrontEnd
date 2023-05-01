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
<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img src={require("../../assets/images/LogoWithText.png")} alt="Logo" />
</div>
</Container>


      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <Form className="login-form" onSubmit={handleSubmit} >


              <p className="registrationText">
                Don't have an account?{'  '}
                <Link to="/register">Registration</Link>
              </p>



              <Form.Group className="mb-3" controlId="email">
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  className="login-input"
                  InputLabelProps={{
                    className: 'login-input-label, borderRadius'
                  }}
                  InputProps={{
                    className: 'login-input-field, borderRadius'
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">

                <p className="registrationText">
                  <Link to="forgotpasswordlinkgoeshere">Forgot Password?</Link>
                </p>

                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  className="login-input"
                  InputLabelProps={{
                    className: 'login-input-label, borderRadius'
                  }}
                  InputProps={{
                    className: 'login-input-field, borderRadius'
                  }}
                />
              </Form.Group>
              <Button variant="contained" type="submit" className="loginBtn">
                Log In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;