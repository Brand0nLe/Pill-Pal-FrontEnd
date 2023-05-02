import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './calendar/Calendar';
import dayjs from 'dayjs';

const SchedulePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<dayjs.Dayjs>(dayjs());

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (

    <Container>
          <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1 className="text-center">Schedule Page</h1>
      <Row className="justify-content-center">
        <Col md={4}>
          <Calendar selectedDate={selectedDate} handleDateChange={handleDateChange} />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;


