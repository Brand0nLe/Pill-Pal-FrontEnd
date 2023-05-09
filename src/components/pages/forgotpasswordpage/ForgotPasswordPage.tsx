import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme();

const ForgotPasswordPage: any = () => {
return(
<>
    <Container className='LogoMargin'>
<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img src={require("../../assets/images/LogoWithText.png")} alt="Logo" />
</div>
</Container>

    <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<h1>TESTING TEXT FORGOT PW PAGE</h1>
        </Container>
</>
);
    };

export default ForgotPasswordPage;

