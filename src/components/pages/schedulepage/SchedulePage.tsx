import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstComponent from './calendar/Calendar';
import dayjs from 'dayjs';
import NavBar from '../../navbarheader/NavBarHeader';



const SchedulePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<dayjs.Dayjs>(dayjs());

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (

    <Container>
      <NavBar/>
          <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1 className="text-center">Schedule Page</h1>
      <Row className="justify-content-center">
        <Col md={4}>
        <FirstComponent/>
                </Col>
      </Row>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </Container>
  );
};

export default SchedulePage;


