import './DependentsPage.css'
import NavBar from '../../navbarheader/NavBarHeader';
import Card from '../../common/card/Card';
import Footer from '../../footer/Footer';
import React, { useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import AddNewBtn from '../../assets/images/add new dependent button.png'
import AdminCard from '../../common/admin-card/AdminCard';

export default function DependentsPage() {
  const [dependentName, setDependentName] = useState('');
  const [dependents, setDependents] = useState<string[]>(() => {
    const savedDependents = localStorage.getItem('dependents');
    return savedDependents ? JSON.parse(savedDependents) : [];
  });

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
      <Container className="dependents-divide">
        {/* Left side */}
        <Col className="admin-container" xs={12} md={4}>
          {/* <Card name='ADMIN' /> */}
          < AdminCard />
          <input
            type="text"
            value={dependentName}
            onChange={(e) => setDependentName(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddDependent}>
            <img src={AddNewBtn} alt="" />
          </button>
        </Col>
        {/* right side */}
        <Col className="three-wide" xs={12} md={8}>
          {dependents.map((dependent, index) => (
            <Card key={index} name={dependent} />
          ))}
        </Col>
      </Container>
    </div>
  );
}