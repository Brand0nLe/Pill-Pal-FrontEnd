

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
      <button onClick={handleAddMedication}>Add Medication</button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="time" placeholder="Time" required />
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="dose" placeholder="Dose" required />
          <input type="text" name="instructions" placeholder="Instructions" required />
          <button type="submit">Add</button>
        </form>
      )}
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

