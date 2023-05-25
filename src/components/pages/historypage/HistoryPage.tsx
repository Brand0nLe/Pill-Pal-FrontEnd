import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWithPagination from './pagination/Pagination';
import './HistoryPage.css';
import NavBar from '../../navbarheader/NavBarHeader';



const theme = createTheme();

const HistoryPage: any = () => {
    return (
        <div className='history-parent'>

            <NavBar />
            <Container className="mt-5">
                <>
                    <TableWithPagination />
                </>

            </Container>


        </div>


    );
};

export default HistoryPage;