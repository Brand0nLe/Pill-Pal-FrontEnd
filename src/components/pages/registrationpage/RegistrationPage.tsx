import React, {useState}  from 'react';
// import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import '../loginpage/LoginPage.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem } from '../../services/DataService';

const theme = createTheme();


function RegistrationPage() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Handle registration form submit logic here
  // };

  const Id: number = 0;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const handleSubmit = async () => {
      let userData: object = {
          Id,
          Username,
          Password
      }
      console.log(userData);
      let data: boolean = await createAccount(userData);
      console.log(data);
      if(data == true){
        console.log("User successfully created!");
        // await GetLoggedInUserData(Username);
        // navigate("/Dashboard");
      }else console.log("User creation failed");
      console.log(userData);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="elliptical-shape" />

<Container className='LogoMargin'>
  <Col md={6}></Col>
<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img src={require("../../assets/images/LogoWithText.png")} alt="Logo" />
  </div>
</Container>

<Container>
  <Col md={6}></Col>
<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
<p className='RegistrationTxt'> Registration </p>
  </div>
</Container>
    
    <Container>
      <Row className="justify-content-md-center">
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
                onChange={({target: {value}}) => setUsername(value)}
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
                onChange={({target: {value}}) => setPassword(value)}
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
                onChange={({target: {value}}) => setCheckPassword(value)}
              />
            </Form.Group>
            {/* <Button variant="contained" type="submit" color="primary" onClick={handleSubmit}>
              Submit
              </Button> */}
            <Button variant="contained" type="submit" className='signupBtn'>
              Sign Up
            </Button>
            <div className="text-center mt-3">
            <Row className='spacing'>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
              </Row>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </ThemeProvider>
  );
}

// export default RegistrationPage;
