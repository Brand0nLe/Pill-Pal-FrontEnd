import React, {useState}  from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import '../loginpage/LoginPage.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem } from '../../services/DataService';

export default function RegistrationPage() {
  let navigate = useNavigate();

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
        navigate("/Dashboard");
      }else console.log("User creation failed");
      console.log(userData);
  }
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
                  className: 'registration-input-label'
                }}
                InputProps={{
                  className: 'registration-input-field'
                }}
              />
              <TextField
                label="Last Name"
                fullWidth
                className="registration-input"
                InputLabelProps={{
                  className: 'registration-input-label'
                }}
                InputProps={{
                  className: 'registration-input-field'
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
                  className: 'registration-input-label'
                }}
                InputProps={{
                  className: 'registration-input-field'
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
                  className: 'registration-input-label'
                }}
                InputProps={{
                  className: 'registration-input-field'
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
                  className: 'registration-input-label'
                }}
                InputProps={{
                  className: 'registration-input-field'
                }}
                onChange={({target: {value}}) => setCheckPassword(value)}
              />
            </Form.Group>
            <Button variant="contained" type="submit" color="primary" onClick={handleSubmit}>
              Submit
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

// export default RegistrationPage;
