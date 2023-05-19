import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/services/RouterService';
import './App.css';


const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
