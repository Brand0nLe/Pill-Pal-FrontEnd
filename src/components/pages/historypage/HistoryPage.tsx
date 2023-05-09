import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWithPagination from './pagination/Pagination';
import './HistoryPage.css'


const theme = createTheme();

const HistoryPage: any = () => {
return(
    <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<h1>HISTORY PAGE</h1>
<TableWithPagination/>
        </Container>
);
    };

export default HistoryPage;

