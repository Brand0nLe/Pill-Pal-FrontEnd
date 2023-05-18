import React, { useState } from "react";
import Calendar from "react-calendar";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { DisabledByDefaultOutlined, CheckBoxOutlined } from "@mui/icons-material";
import NavBar from "../../navbarheader/NavBarHeader";
import "./calendar/Calendar.css";
import "./SchedulePage.css";
import Footer from '../../footer/Footer';

interface Med {
  name: string;
  time: string;
}

interface MedsListProps {
  myDate: Date;
  onDateChange: (date: Date) => void;
}

const MedsList: React.FC<MedsListProps> = ({ myDate, onDateChange }) => {
  const [meds, setMeds] = useState<Med[]>([]);

  const handleDateChange = (date: Date) => {
    onDateChange(date);
  };

  return (
    <div>
      <Container>
        <Calendar
          value={myDate}
          onChange={handleDateChange}
          calendarType="US"
          locale="en-US"
          startWeekDay={0}
        />
        <ul>
          {meds.map((med: Med) => (
            <li key={med.name}>
              {med.name} - {med.time}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

const SchedulePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentDayOfWeek = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  const [showForm, setShowForm] = useState(false);
  const [medications, setMedications] = useState([
    {
      id: Date.now(),
      time: "",
      name: "",
      dose: "",
      instructions: "",
    },
  ]);

  const handleDisableClick = (id: number) => {
    setMedications((prevMedications) =>
      prevMedications.filter((medication) => medication.id !== id)
    );
  };

  const handleAddMedication = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const newMedication = {
      id: Date.now(),
      time: formData.get("time") as string,
      name: formData.get("name") as string,
      dose: formData.get("dose") as string,
      instructions: formData.get("instructions") as string,
    };

    setMedications((prevMedications) => [...prevMedications, newMedication]);

    form.reset();
    setShowForm(false);
  };

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <div className="schedule-parent">
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col lg={6}>
            <MedsList myDate={currentDate} onDateChange={handleDateChange} />
            <Button className="my-btn" onClick={handleAddMedication}>
              Add Medication
            </Button>
            <Modal show={showForm} onHide={() => setShowForm(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Add Medication</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form className="add-form-schedules-page" onSubmit={handleFormSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Medication Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Medication Name" required />
                  </Form.Group>
                  <Form.Group controlId="dose">
                    <Form.Label>Dosage (Strength)</Form.Label>
                    <Form.Control type="text" name="dose" placeholder="Dosage" required />
                  </Form.Group>
                  <Form.Group controlId="time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="text" name="time" placeholder="Time" required />
                  </Form.Group>
                  <Form.Group controlId="instructions">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control type="text" name="instructions" placeholder="Instructions" required />
                  </Form.Group>
                  <Form.Group controlId="StartDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="text" name="StartDate" placeholder="e.g. 01/01/2023" />
                  </Form.Group>
                  <Form.Group controlId="EndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="text" name="EndDate" placeholder="e.g. 01/01/2023 or N/A" />
                  </Form.Group>
                  <Form.Group controlId="ReasonForUse">
                    <Form.Label>Reason for Use</Form.Label>
                    <Form.Control type="text" name="ReasonForUse" placeholder="e.g. Asthma, Hypertension, etc." />
                  </Form.Group>
                  <Form.Group controlId="PrescribingDoctor">
                    <Form.Label>Prescribing Doctor</Form.Label>
                    <Form.Control type="text" name="PrescribingDoctor" placeholder="e.g. Harpreet Singh" />
                  </Form.Group>
                  <Form.Group controlId="DoctorContact">
                    <Form.Label>Doctor's Contact</Form.Label>
                    <Form.Control type="text" name="DoctorContact" placeholder="e.g. 209-123-4567" />
                  </Form.Group>
                  <Form.Group controlId="PharmacyLocation">
                    <Form.Label>Pharmacy Location</Form.Label>
                    <Form.Control type="text" name="PharmacyLocation" placeholder="e.g. CVS Pharmacy on Pacific Ave." />
                  </Form.Group>
                  <Form.Group controlId="PharmacyContact">
                    <Form.Label>Pharmacy Contact</Form.Label>
                    <Form.Control type="text" name="PharmacyContact" placeholder="e.g. 209-123-4567" />
                  </Form.Group>
                  <Form.Group controlId="SideEffects">
                    <Form.Label>Side Effects or Concerns</Form.Label>
                    <Form.Control type="text" name="SideEffects" placeholder="e.g. feeling dizzy, nauseous, unable to sleep, etc." />
                  </Form.Group>
                  <Form.Group controlId="AdditionalNotes">
                    <Form.Label>Additional Notes</Form.Label>
                    <Form.Control as="textarea" name="AdditionalNotes" placeholder="e.g. What meds you cannot take at the same time, what foods or drinks to avoid, taking the medication at a specific time of the day, or any other information that the user wants to put here, they can" />
                  </Form.Group>
                  <Button className='my-btn' type="submit">Save Med</Button>

                  <Button variant="secondary" onClick={() => setShowForm(false)}>
                    Close
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
            </Modal>
          </Col>
          <Col lg={6}>
            <div className="table-parent">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>{currentDayOfWeek} {currentDate.toLocaleDateString()}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medications.map(medication => (
                      <tr key={medication.id}>
                        <td>{medication.time}</td>
                        <td>{medication.name}</td>
                        <td>{medication.dose}</td>
                        <td>{medication.instructions}    </td>
                        <td>

                          <DisabledByDefaultOutlined onClick={() => handleDisableClick(medication.id)} />
                        </td>
                        <td>
                          <CheckBoxOutlined />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SchedulePage;