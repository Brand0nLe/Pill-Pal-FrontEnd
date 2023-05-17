
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import '../loginpage/LoginPage.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem } from '../../services/DataService';
import Footer from '../../footer/Footer';



// Define Material UI theme
const theme = createTheme();

function LoginPage() {
  let navigate = useNavigate();

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = async () => {
    let userData: any = {
      Username,
      Password
    }
    console.log(userData);
    let token = await login(userData);
    if (token.token != null) {
      localStorage.setItem("token", token.token);
      // await GetLoggedInUserData(Username);
      navigate("/DashboardPage");
    } else alert("User could not be found. Please check login information");
    console.log(userData);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className='login-parent'>
      <div className="elliptical-shape" />
      <Container>



      <div className='LogoMargin'>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={require("../../assets/images/LogoWithText.png")} alt="Logo" />
        </div>
      </div>


        <div>
          <Row className="">
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
                    onChange={({ target: { value } }) => setUsername(value)}
                    InputLabelProps={{
                      className: 'login-input-label, borderRadius'
                    }}
                    InputProps={{
                      className: 'login-input-field, borderRadius'
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">

                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    className="login-input"
                    onChange={({ target: { value } }) => setPassword(value)}
                    InputLabelProps={{
                      className: 'login-input-label, borderRadius'
                    }}
                    InputProps={{
                      className: 'login-input-field, borderRadius'
                    }}
                  />
                </Form.Group>
                <Button variant="contained" onClick={handleSubmit} className="loginBtn">
                  Log In
                </Button>
              </Form>
            </Col>
          </Row>
        </div>

        </Container>
        <Footer />

        </div>
    </ThemeProvider>
  );
}

export default LoginPage;