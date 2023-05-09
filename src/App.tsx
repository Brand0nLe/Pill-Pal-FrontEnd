import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/loginpage/LoginPage';
import RegistrationPage from './components/pages/registrationpage/RegistrationPage';
import NavBar from './components/navbarheader/NavBarHeader';
import DashboardPage from './components/pages/dashboardpage/DashboardPage';
import DependentsPage from './components/pages/dependentspage/DependentsPage';
import SchedulePage from './components/pages/schedulepage/SchedulePage';
import HistoryPage from './components/pages/historypage/HistoryPage';
import Footer from './components/footer/Footer'

function App() {

  return (
    <Router>
      <div>
        {/* Conditionally render the NavBar component so it doesn't show on login and registration pages */}
        {window.location.pathname !== '/' && window.location.pathname !== '/login' && window.location.pathname !== '/register' && <NavBar />}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dependentspage" element={<DependentsPage />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
          <Route path="/schedulepage" element={<SchedulePage />} />
          <Route path="/historypage" element={<HistoryPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
      <div>    
    <Footer></Footer>
  </div>
    </Router>
    

  );
}

export default App;