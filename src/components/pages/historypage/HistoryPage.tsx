import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWithPagination from './pagination/Pagination';
import './HistoryPage.css';
import NavBar from '../../navbarheader/NavBarHeader';




const HistoryPage: any = () => {
    return (
        <div className='history-parent'>

            <NavBar />
            <Container className="mt-5">
                <>
                    <TableWithPagination />
                </>

            </Container>

            <div className='bottomspace'></div>

        </div>


    );
};

export default HistoryPage;