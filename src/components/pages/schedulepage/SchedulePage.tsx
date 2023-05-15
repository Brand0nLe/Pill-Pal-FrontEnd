import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavBar from '../../navbarheader/NavBarHeader';
import './SchedulePage.css';

const SchedulePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className='parent-bg'>

      <NavBar />
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-center">Schedule Page</h1>
      <Row className="justify-content-center">
        <Col md={4}>
          <Calendar value={selectedDate} onChange={handleDateChange} />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
    </div>
  );
};

export default SchedulePage;
