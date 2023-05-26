
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import '../loginpage/LoginPage.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem, GetNewId } from '../../services/DataService';
import '../registrationpage/RegistrationPage.css';





function RegistrationPage() {
  const navigate = useNavigate();

  const Id: number = 0;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const handleSubmit = async () => {
    let userData: object = {
      Id,
      firstName,
      lastName,
      Username,
      Password
    }
    if (Password == checkPassword) {

      console.log(userData);
      let data: boolean = await createAccount(userData);
      console.log(data);
      if (data == true) {
        alert("User successfully created!");
        let newId: any = await GetNewId()
        console.log(newId);
        sessionStorage.setItem("UserId", newId);
        // await GetLoggedInUserData(Username);
        navigate("/firsttimeuserpage");
      } else console.log("User creation failed");
      console.log(userData);
    } else alert("Passwords did not match");
  }

  return (
      <div className='registration-parent'>
        <div className="elliptical-shape" />
        <Container>
          <div className='LogoMargin'>
            <Col md={6}></Col>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={require("../../assets/images/LogoWithText.png")} alt="Logo" />
            </div>
          </div>




          <div>
            <Col md={6}></Col>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            </div>
          </div>

          <Row className="justify-content-md-center">
            <Col md={6}>
              <Form className="registration-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                  <TextField
                    label="First Name"
                    fullWidth
                    className="registration-input mr-2"
                    onChange={({ target: { value } }: any) => setFirstName(value)}
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
                    onChange={({ target: { value } }: any) => setLastName(value)}
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
                    onChange={({ target: { value } }: any) => setUsername(value)}
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
                    onChange={({ target: { value } }: any) => setPassword(value)}
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
                    onChange={({ target: { value } }: any) => setCheckPassword(value)}
                    InputLabelProps={{
                      className: 'registration-input-label, borderRadius'
                    }}
                    InputProps={{
                      className: 'registration-input-field, borderRadius'
                    }}
                  />
                </Form.Group>
                <Button variant="contained" onClick={handleSubmit} className='signupBtn'>
                  Sign Up
                </Button>

                <div className="text-center mt-3">
                  <Row>
                    <p>
                      Already have an account? <Link to="/newaccount">Login</Link>
                    </p>
                  </Row>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>

      </div>
  );
}

export default RegistrationPage;
