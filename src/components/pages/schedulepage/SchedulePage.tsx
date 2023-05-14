

import React, { useState } from 'react';
import { DisabledByDefaultOutlined, CheckBoxOutlined } from '@mui/icons-material';
import './SchedulePage.css';

export default function SchedulePage() {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  const [showForm, setShowForm] = useState(false); // State for showing the medication form

  const [medications, setMedications] = useState([
    { id: 1, time: '8:00 AM', name: 'Medication 1', dose: '10mg', instructions: 'Take with water' },
    { id: 2, time: '10:30 AM', name: 'Medication 2', dose: '20mg', instructions: 'Take with food' },
  ]);

  const handleDisableClick = (id: number) => {
    setMedications(prevMedications => prevMedications.filter(medication => medication.id !== id));
  };

  const handleAddMedication = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const time = (event.target as HTMLFormElement).elements.time.value;
    const name = (event.target as HTMLFormElement).elements.name.value;
    const dose = (event.target as HTMLFormElement).elements.dose.value;
    const instructions = (event.target as HTMLFormElement).elements.instructions.value;


    const newMedication = {
      id: Date.now(),
      time,
      name,
      dose,
      instructions,
    };

    setMedications(prevMedications => [...prevMedications, newMedication]);

    // Reset the form and hide it
    (event.target as HTMLFormElement).reset();
    setShowForm(false);
  };

  return (
    <>
      <button className='my-btn' onClick={handleAddMedication}>Add Medication</button>
      {showForm && (
        <form className='add-form' onSubmit={handleFormSubmit}>
          <label htmlFor="name">Medication Name</label>
          <input
            type="text"
            name="name"
            placeholder="Medication Name" required />
          <label htmlFor="dose">Doseage (Strength)</label>
          <input
            type="text"
            name="dose"
            placeholder="Doseage" required />
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            placeholder="Time" required />
          <label htmlFor="instructions">Instrucitons</label>
          <input
            type="text"
            name="instructions"
            placeholder="Instructions" required />
          <label htmlFor="StartDate">Start Date</label>
          <input
            placeholder='e.g. 01/01/2023'
            type="text"
            name="StartDate"
            id="StartDate" />
          <label htmlFor="EndDate">End Date</label>
          <input
            placeholder='e.g. 01/01/2023 or N/A'
            type="text"
            name="EndDate"
            id="EndDate" />
          <label htmlFor="ReasonForUse">Reason for use</label>
          <input
            placeholder='e.g. Asthma, Hypertension, etc.'
            type="text"
            name="ReasonForUse"
            id="ReasonForUse" />
          <label htmlFor="PrescribingDoctor">Prescribing Doctor</label>
          <input
            placeholder='e.g. Harpreet Singh'
            type="text"
            name="PrescribingDoctor"
            id="PrescribingDoctor" />
          <label htmlFor="DoctorContact">Doctor's Contact</label>
          <input
            placeholder='e.g. 209-123-4567'
            type="text"
            name="DoctorContact"
            id="DoctorContact" />
          <div>
            <label htmlFor="PharmacyLocation">Pharmacy Location</label>
            <input
              placeholder='e.g. CVS Pharmacy on Pacific Ave.'
              type="text"
              name="PharmacyLocation"
              id="PharmacyLocation" />
            <label htmlFor="PharmacyContact">Pharmacy Contact</label>
            <input
              placeholder='e.g. 209-123-4567'
              type="text"
              name="PharmacyContact"
              id="PharmacyContact" />
            <label htmlFor="SideEffects">Side Effects or Concerns</label>
            <input
              placeholder='e.g. feeling dizzy, nauseous, unable to sleep, etc.'
              type="text"
              name="SideEffects"
              id="SideEffects" />
            <label htmlFor="AdditionalNotes">Additional Notes</label>
            <textarea
              name="AdditionalNotes"
              id="AdditionalNotes"
              placeholder='e.g. What meds you cannot take at the same time, what foods or drinks to avoid, taking the medication at a specific time of the day, or any other information that the user wants to put here, they can'>
            </textarea>





          </div>
          <button className='my-btn' type="submit">Add</button>
        </form>
      )}
      <div className="table-parent">
        <div>
          <table>
            <thead>
              <th>{currentDayOfWeek} {currentDate.toLocaleDateString()}</th>
            </thead>
            <tbody>
              {medications.map(medication => (
                <tr key={medication.id}>
                  <td>{medication.time}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

