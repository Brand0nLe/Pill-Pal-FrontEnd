

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



interface DependentsPageProps {
  onSaveProfile: (
    doctorContact: DoctorContactData,
    pharmacyHours: PharmacyHoursData,
    name: string,
    birthDate: string,
    address1: string,
    address2: string
  ) => void;
}

interface DoctorContactData {
  name: string;
  number: string;
  location: string;
  address1: string;
  address2: string;
}

interface PharmacyHoursData {
  name: string;
  number: string;
  address1: string;
  address2: string;
  hours: string;
}



export default function DependentsPage(DependentsPageProps: any) {

  const [allergies, setAllergies] = useState(['This', 'That', 'The other']);
  const [newAllergy, setNewAllergy] = useState('');
  const [diagnosis, setDiagnosis] = useState(['Alzheimer\'s', 'Diabetes Type 2', 'Hypertension']);
  const [newDiagnosis, setNewDiagnosis] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [doctorContact, setDoctorContact] = useState<DoctorContactData>({
    name: '',
    number: '',
    location: '',
    address1: '',
    address2: '',
  });
  const [pharmacyHours, setPharmacyHours] = useState<PharmacyHoursData>({
    name: '',
    number: '',
    address1: '',
    address2: '',
    hours: '',
  });



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

  const handleSaveProfile = () => {
    DependentsPageProps.onSaveProfile(doctorContact, pharmacyHours, name, birthDate, address1, address2);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBirthDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  };

  const handleAddress1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(event.target.value);
  };

  const handleAddress2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(event.target.value);
  };

  const handleDoctorContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDoctorContact((prevDoctorContact) => ({
      ...prevDoctorContact,
      [name]: value,
    }));
  };
  const handlePharmacyHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPharmacyHours((prevPharmacyHours) => ({
      ...prevPharmacyHours,
      [name]: value
    }));
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
                  placeholder='Name'
                  value={name}
                  onChange={handleNameChange} />
                <input
                  className='input'
                  type="text"
                  name="birthDate"
                  id="birthDate"
                  placeholder='Birth Date'
                  value={birthDate}
                  onChange={handleBirthDateChange} />
                <input
                  className='input'
                  type="text"
                  name="address1"
                  id="address1"
                  placeholder='Address Line 1'
                  value={address1}
                  onChange={handleAddress1Change} />
                <input
                  className='input'
                  type="text"
                  name="address2"
                  id="address2"
                  placeholder='Address Line 2'
                  value={address2}
                  onChange={handleAddress2Change} />

                <Button onClick={handleSaveProfile}>
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
                    placeholder='Doctor Name'
                    type="text"
                    name="dr-name"
                    id="dr-name"
                    value={doctorContact.name}
                    onChange={handleDoctorContactChange} />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="dr-number"
                    id="dr-number"
                    value={doctorContact.number}
                    onChange={handleDoctorContactChange} />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="dr-location"
                    id="dr-location"
                    value={doctorContact.location}
                    onChange={handleDoctorContactChange} />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="dr-address1"
                    id="dr-address1"
                    value={doctorContact.address1}
                    onChange={handleDoctorContactChange} />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="dr-address2"
                    id="dr-address2"
                    value={doctorContact.address2}
                    onChange={handleDoctorContactChange} />
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
                  <input
                    type="text"
                    name="pharm-name"
                    id="pharm-name" />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="pharm-number"
                    id="pharm-number" />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="pharm-address1"
                    id="pharm-address1" />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="pharm-address2"
                    id="pharm-address2" />
                </tr>
                <tr>
                  <input
                    type="text"
                    name="pharm-hours"
                    id="pharm-hours" />
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
                  <td>Medication Name will appear </td>
                  <td>Directions for use</td>
                  <td>Prescribing Doctor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='add-medication-history' id='AddMedHistory'>
            <h1>Add Medication History</h1>
            <div className='add-form'>
              <div>

              <label htmlFor="MedName">Medication Name</label>
              <input
                placeholder='e.g. Aspirin'
                type="text"
                name="MedName"
                id="MedName" />
                </div>
              <div>
                <label htmlFor="Dosage">Dosage (Strength)</label>
                <input
                  placeholder='e.g. 81 mg'
                  type="text"
                  name="Dosage"
                  id="Dosage" />
              </div>
              <div>
                <label htmlFor="Directions">Directions for use</label>
                <input
                  placeholder='e.g. Take 1 tablet by mouth daily'
                  type="text"
                  name="Directions"
                  id="Directions" />
              </div>
              <div>
                <label htmlFor="StartDate">Start Date</label>
                <input
                  placeholder='e.g. 01/01/2023'
                  type="text"
                  name="StartDate"
                  id="StartDate" />
              </div>
              <div>
                <label htmlFor="EndDate">End Date</label>
                <input
                  placeholder='e.g. 01/01/2023 or N/A'
                  type="text"
                  name="EndDate"
                  id="EndDate" />
              </div>
              <div>
                <label htmlFor="ReasonForUse">Reason for use</label>
                <input
                  placeholder='e.g. Asthma, Hypertension, etc.'
                  type="text"
                  name="ReasonForUse"
                  id="ReasonForUse" />
              </div>
              <div>
                <label htmlFor="PrescribingDoctor">Prescribing Doctor</label>
                <input
                  placeholder='e.g. Harpreet Singh'
                  type="text"
                  name="PrescribingDoctor"
                  id="PrescribingDoctor" />
              </div>
              <div>
                <label htmlFor="DoctorContact">Doctor's Contact</label>
                <input
                  placeholder='e.g. 209-123-4567'
                  type="text"
                  name="DoctorContact"
                  id="DoctorContact" />
              </div>
              < Button className='my-btn' >Save Medication</Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}


