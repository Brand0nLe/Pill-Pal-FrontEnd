import React from 'react';
import './App.css';
import LoginPage from '../src/components/pages/loginpage/LoginPage';
import DashboardPage from './components/pages/dashboardpage/DashboardPage';
import DependentsPage from './components/pages/dependentspage/DependentsPage';



function App() {
  return (
    <div className="App">
      {/* < DashboardPage /> */}
      < DependentsPage />

    </div>
  );
}

export default App;
