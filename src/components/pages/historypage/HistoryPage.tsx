import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWithPagination from './pagination/Pagination';
import './HistoryPage.css';
import NavBar from '../../navbarheader/NavBarHeader';



const theme = createTheme();

const HistoryPage: any = () => {
return(
    <div className='parent-bg'>

        <NavBar/>
    <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<h1>HISTORY PAGE</h1>
<>
<TableWithPagination/>
</>
<br></br>
        <br></br>
        <br></br>
        <br></br>
        </Container>
        </div>

        
);
    };

export default HistoryPage;