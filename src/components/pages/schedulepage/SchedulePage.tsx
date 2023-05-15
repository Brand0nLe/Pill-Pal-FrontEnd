import "./calendar/Calendar.css";
import "../schedulepage/SchedulePage.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './calendar/Calendar.css';
import '../schedulepage/SchedulePage.css';
import NavBar from '../../navbarheader/NavBarHeader';
import { Button, Modal } from 'react-bootstrap';

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [medications, setMedications] = useState<{ name: string; time: string; }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newMedication, setNewMedication] = useState({ name: "", time: "" });

  useEffect(() => {
    const storedMedications = localStorage.getItem("medications");
    if (storedMedications) {
      setMedications(JSON.parse(storedMedications));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medications));
  }, [medications]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAddMedication = () => {
    if (newMedication.name && newMedication.time) {
      setMedications([...medications, newMedication]);
      setNewMedication({ name: "", time: "" });
      setShowModal(false);
    }
  };

  return (
    <div className="wrapper-parent">
      <NavBar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="calendar-container">
              <Calendar value={selectedDate} onChange={handleDateChange} />
              <Button
                className="btn mt-3"
                onClick={() => setShowModal(true)}
              >
                Add Medication
              </Button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="medication-list-container">
              <h2>Medications for {selectedDate.toLocaleDateString()}</h2>
              <ul>
                {medications.map((medication, index) => (
                  <li key={index}>
                    <span>{medication.name}</span>
                    <span>{medication.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Medication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="medName">Medication Name</label>
            <input
              type="text"
              className="form-control"
              id="medName"
              value={newMedication.name}
              onChange={(e) =>
                setNewMedication({
                  ...newMedication,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="medTime">Medication Time</label>
            <input
              type="text"
              className="form-control"
              id="medTime"
              value={newMedication.time}
              onChange={(e) =>
                setNewMedication({
                  ...newMedication,
                  time: e.target.value,
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddMedication}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SchedulePage;
