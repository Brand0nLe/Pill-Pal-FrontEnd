import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { DisabledByDefaultOutlined, CheckBoxOutlined } from "@mui/icons-material";
import NavBar from "../../navbarheader/NavBarHeader";
import "./calendar/Calendar.css";
import "./SchedulePage.css";
import MedsList from "./medlist/MedList";

const getTimeAsDate = (timeString: string) => {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  return date;
};

const SchedulePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentDayOfWeek = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  const [showForm, setShowForm] = useState(false);
  const [medications, setMedications] = useState<
    { id: string; time: string[]; name: string; dose: string; instructions: string }[]
  >([]);

  useEffect(() => {
    const storedMedications = localStorage.getItem("medications");
    if (storedMedications) {
      setMedications(JSON.parse(storedMedications));
    }
  }, []);

  const handleDisableClick = (id: string) => {
    setMedications((prevMedications) =>
      prevMedications.filter((medication) => medication.id !== id)
    );
  
    localStorage.setItem(
      "medications",
      JSON.stringify(medications.filter((medication) => medication.id !== id))
    );
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const timeString = formData.get("time") as string;
    const times = timeString.split(",").map((time) => time.trim());

    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i;
    if (!times.every((time) => timeRegex.test(time))) {
      alert(
        "Please enter time in the correct format: HH:mm (24-hour format). For example: 08:00, 13:00, 15:30. Double check to make sure you did not forget any commas."
      );
      return;
    }

    const newMedications = times.map((time, index) => ({
      id: `${Date.now()}-${index}`,
      time: [time],
      name: formData.get("name") as string,
      dose: formData.get("dose") as string,
      instructions: formData.get("instructions") as string,
    }));

    const updatedMedications = [...medications, ...newMedications];
    setMedications(updatedMedications);
    localStorage.setItem("medications", JSON.stringify(updatedMedications));

    form.reset();
    setShowForm(false);
  };

  const handleAddMedicationClick = () => {
    setShowForm(true);
  };

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
  };

  const sortedMedications = [...medications].sort((a, b) => {
    const aFirstTime = getTimeAsDate(a.time[0]).getTime();
    const bFirstTime = getTimeAsDate(b.time[0]).getTime();
    return aFirstTime - bFirstTime;
  });

  return (
    <div className="schedule-parent">
      <NavBar />
      <Container className="schedule-container mt-5">
        <Row>
          <Col lg={6}>
            <MedsList myDate={currentDate} onDateChange={handleDateChange} />
            <div className="add-medication-btn-container">
              <button className="my-btn" onClick={handleAddMedicationClick}>
                Add Medication
              </button>
            </div>

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
                    <Form.Control type="text" name="time" placeholder="08:00, 13:00, 15:30" required />
                    <Form.Text className="text-muted">
                      Please enter the times separated by commas in the format hh:mm. For example: 08:00, 13:00, 15:30
                    </Form.Text>
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
                  <button className='form-save-btn' type="submit">Save Med</button>

                  <button onClick={() => setShowForm(false)}>
                    Close
                  </button>
                </Form>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
              </Modal>
          </Col>

          <Col lg={6}>
            {medications.length > 0 ? (
              <div className="table-parent">
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          {currentDayOfWeek} {currentDate.toLocaleDateString()}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedMedications.map((medication) =>
                        medication.time.map((time, index) => (
                          <tr key={medication.id + index}>
                            <td>
                              {new Date(getTimeAsDate(time)).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                            <td>{medication.name}</td>
                            <td>{medication.dose}</td>
                            <td>{medication.instructions}</td>
                            <td>
                              <DisabledByDefaultOutlined onClick={() => handleDisableClick(medication.id)} />
                            </td>
                            <td>
                              <CheckBoxOutlined />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div>No medications found! Please click the "Add Medication" button to start adding meds!</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SchedulePage;