import './DependentsPage.css'
import {
  Row,
  Container,
  Col,
  Button
} from 'react-bootstrap';
// import { AddCircleIcon } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NavBar from '../../navbarheader/NavBarHeader';
import Card from '../../common/card/Card';
import Footer from '../../footer/Footer';

import React, { useState, useEffect } from 'react';

export default function DependentsPage() {
  const [dependentName, setDependentName] = useState('');
  const [dependents, setDependents] = useState<string[]>([]);

  // Load saved dependents from local storage on component mount
  useEffect(() => {
    const savedDependents = localStorage.getItem('dependents');
    if (savedDependents) {
      setDependents(JSON.parse(savedDependents));
    }
  }, []);

  // Save dependents to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('dependents', JSON.stringify(dependents));
  }, [dependents]);

  const handleAddDependent = () => {
    if (dependentName.trim() !== '') {
      const newDependents = [...dependents, dependentName];
      setDependents(newDependents);
      setDependentName('');
    }
  };

  return (
    <div className="dependents-parent">
      <NavBar />
      <div className="dependents-divide">
        {/* Left side */}
        <Col className="admin-container" md={4}>
          <Card name='ADMIN'/>
          <input
            type="text"
            value={dependentName}
            onChange={(e) => setDependentName(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddDependent}>
            Add Dependent
          </button>
        </Col>
        {/* right side */}
        <Col className="three-wide" md={8}>
          {dependents.map((dependent, index) => (
            <Card key={index} name={dependent} />
          ))}
        </Col>
      </div>
      <Footer />
    </div>
  );
}