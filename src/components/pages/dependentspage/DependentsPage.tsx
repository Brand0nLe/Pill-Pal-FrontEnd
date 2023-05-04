

import React, { useState } from 'react'
import './DependentsPage.css'
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
// import { AddCircleIcon } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function DependentsPage() {
  const [allergies, setAllergies] = useState(['This', 'That', 'The other']);
  const [newAllergy, setNewAllergy] = useState('');
  const [diagnosis, setDiagnosis] = useState(['Alzheimer\'s', 'Diabetes Type 2', 'Hypertension']);
  const [newDiagnosis, setNewDiagnosis] = useState('');

  const handleAddAllergy = () => {
    setAllergies([...allergies, newAllergy]);
    setNewAllergy('');
  };

  const handleAddDiagnosis = () => {
    setDiagnosis([...diagnosis, newDiagnosis]);
    setNewDiagnosis('');
  };

  const handleAllergyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewAllergy(value);
  };

  const handleDiagnosisInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewDiagnosis(value);
  };


  return (
    <div className='parent-bg'>
      < Container >
        < Row className='justify-content-md-center mt-5' >
          < Col md={6}>
            <div className="profile-area">

              <div className="profile-picture-container">

                {/* <img id='profile-picture' src={} alt="" /> */}

              </div>
              <div className="profile-info">
                <input
                  className='input'
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Name' />
                <input
                  className='input'
                  type="text"
                  name="birthDate"
                  id="birthDate"
                  placeholder='Birth Date' />
                <input
                  className='input'
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Address Line 1' />
                <input
                  className='input'
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Address Line 2' />
                   <Button>
                      Save Profile
                    </Button>
              </div>
              {/* <img src={} alt="" id="medCardFront" />
                    <img src={} alt="" id="medCardBack" /> */}
            </div>
          </Col>
          < div className='tables-area'>

            <table id='allergies' className='my-tbl'>
              <thead>
                <tr>
                  <th>Allergies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="allergies-inp"
                      id="allergies-inp"
                      value={newAllergy}
                      onChange={handleAllergyInputChange}
                    />
                  </td>
                  <td>
                    <Button onClick={handleAddAllergy}>
                      <AddCircleIcon />
                    </Button>
                  </td>
                </tr>
                {allergies.map((allergy, index) => (
                  <tr key={index}>
                    <td>{allergy}</td>
                  </tr>
                ))}
              </tbody>
            </table>


            <table id='Diagnosis' className='my-tbl'>
              <thead>
                <tr>
                  <th>Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="diagnosis-inp"
                      id="diagnosis-inp"
                      value={newDiagnosis}
                      onChange={handleDiagnosisInputChange}
                    />
                  </td>
                  <td>
                    <Button onClick={handleAddDiagnosis}>
                      <AddCircleIcon />
                    </Button>
                  </td>
                </tr>
                {diagnosis.map((diag, index) => (
                  <tr key={index}>
                    <td>{diag}</td>
                  </tr>
                ))}
              </tbody>
            </table>


            <table id='doctorContact' className='my-tbl'>
              <thead>
                <tr>
                  <th>Doctor's Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <input
                  type="text"
                  name="dr-name"
                  id="dr-name" />
                </tr>
                <tr>
                <input
                  type="text"
                  name="dr-number"
                  id="dr-number" />
                </tr>
                <tr>
                <input
                  type="text"
                  name="dr-location"
                  id="dr-location" />
                </tr>
                <tr>
                <input
                  type="text"
                  name="dr-address1"
                  id="dr-address1" />
                </tr>
                <tr>
                <input
                  type="text"
                  name="dr-address2"
                  id="dr-address2" />
                </tr>
              </tbody>
            </table>

            <table id='pharmacyHours' className='my-tbl'>
              <thead>
                <tr>
                  <th>Pharmacy Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CVS Pharmacy</td>
                </tr>
                <tr>
                  <td>(209) 951-6544</td>
                </tr>
                <tr>
                  <td>6632 Pacific Ave.</td>
                </tr>
                <tr>
                  <td>Stockton, CA 95209</td>
                </tr>
                <tr>
                  <td>Mon-Fri 8AM-8PM | Sat-Sun 10AM-6PM | Lunch 12:30-1PM every day </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='active-meds-area'>
            <table id='activeMedsArea' className='horizontal-tbl'>
              <thead>
                <tr>
                  <th>Current Active Medications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Losartan 25 mg</th>
                  <td>Take 1 tablet everyday.</td>
                  <td>Harpreet Singh</td>
                </tr>
                <tr>
                  <th>Alprazolam 1 mg</th>
                  <td>Take 1 tablet daily as needed.</td>
                  <td>Harpreet Singh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
      </Container>
    </div>
  )
}


