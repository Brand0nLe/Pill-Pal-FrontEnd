import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/services/RouterService';
import './App.css';
import Footer from './components/footer/Footer';


const App = () => {
  return (
      <div>
    <Router>
      <AppRoutes />
    </Router>
      <Footer/>
    </div>
  );
};

export default App;
