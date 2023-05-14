

import React, {useState} from 'react';

import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import './SchedulePage.css'


export default function SchedulePage() {
  // save our current date and day of the week
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  // here lets create our useState for the form to add meds

  // delete this drug from the current display console log it

  const handleDisableClick = (id: number) => {
    setMedications(prevMedications => prevMedications.filter(medication => medication.id !== id));
  };
  const [medications, setMedications] = useState([
    { id: 1, time: '8:00 AM', name: 'Medication 1', dose: '10mg', instructions: 'Take with water' },
    { id: 2, time: '10:30 AM', name: 'Medication 2', dose: '20mg', instructions: 'Take with food' },
    
  ]);

  return (
    <>
    <button>Add Medication</button>
    <div className='table-parent'>
      <div>

        <table>
          <thead>
            <th>{currentDayOfWeek} {currentDate.toLocaleDateString()}</th>

          </thead>
          <tbody>
              {medications.map(medication => (
                <tr key={medication.id}>
                  <td id='time'>{medication.time}</td>
                  <td>{medication.name}</td>
                  <td>{medication.dose}</td>
                  <td>{medication.instructions}</td>
                  <td>
                    <DisabledByDefaultOutlinedIcon onClick={() => handleDisableClick(medication.id)} />
                  </td>
                  <td>
                    <CheckBoxOutlinedIcon />
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      

      </div>

    </div>
    
    </>
  )
}
