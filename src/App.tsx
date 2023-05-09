import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import AppRoutes from './components/services/RouterService';


const App = () => {
  return (
    <Router>
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
