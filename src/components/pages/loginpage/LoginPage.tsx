import React, {useState}  from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import '../loginpage/LoginPage.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem } from '../../services/DataService';

export default function Login() {
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
        if(token.token != null){
          localStorage.setItem("token", token.token);
          // await GetLoggedInUserData(Username);
          navigate("/Dashboard");
        }
        console.log(userData);
    }
  



// Define Material UI theme
const theme = createTheme();

// function LoginPage() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Handle login form submit logic here
//   };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>
            <h2>Login</h2>
            <Form className="login-form">
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
              <Form>
                        <Form.Group className="mb-3" controlId="Username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            onChange={({target: {value}}) => setUsername(value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={({target: {value}}) => setPassword(value)} 
                            />
                        </Form.Group>
                        <Button 
                        // variant="primary" 
                        onClick={handleSubmit}
                        >
                            Login
                            </Button>
                    </Form>
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

// export LoginPage;