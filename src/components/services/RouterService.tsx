import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../components/pages/loginpage/LoginPage';
import RegistrationPage from '../../components/pages/registrationpage/RegistrationPage';
import DashboardPage from '../../components/pages/dashboardpage/DashboardPage';
import DependentsPage from '../../components/pages/dependentspage/DependentsPage';
import SchedulePage from '../../components/pages/schedulepage/SchedulePage';
import HistoryPage from '../../components/pages/historypage/HistoryPage';

const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/dependentspage" element={<DependentsPage />} />
      <Route path="/dashboardpage" element={<DashboardPage />} />
      <Route path="/schedulepage" element={<SchedulePage />} />
      <Route path="/historypage" element={<HistoryPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
