import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './calendar/Calendar.css';
import NavBar from '../../navbarheader/NavBarHeader';
import { Button } from 'react-bootstrap';


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
      <NavBar/>
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
      {showModal && (
        <div className="modal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Medication</h5>
                <Button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </Button>
              </div>
              <div className="modal-body">
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
                </div>
              <div className="modal-footer">
                <Button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddMedication}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SchedulePage;