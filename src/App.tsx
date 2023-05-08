import React from 'react';
import './App.css';
import LoginPage from '../src/components/pages/loginpage/LoginPage';
import DashboardPage from './components/pages/dashboardpage/DashboardPage';
import DependentsPage from './components/pages/dependentspage/DependentsPage';



function App() {
  // const handleSaveProfile = (
  //   doctorContact: DoctorContactData,
  //   pharmacyHours: PharmacyHoursData,
  //   name: string,
  //   birthDate: string,
  //   address1: string,
  //   address2: string
  // ) => {
  //   console.log(doctorContact);
  //   console.log(pharmacyHours);
  //   console.log(name);
  //   console.log(birthDate);
  //   console.log(address1);
  //   console.log(address2);
  // }
  return (
    <div className="App">
      < DependentsPage />

    </div>
  );
}

export default App;
