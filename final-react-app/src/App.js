import logo from './logo.svg';
import './App.css';
import { CallAPI } from './rest/api';
import React from 'react';
import { Col, Row, Container, Card, Button, Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import AreaList from './components/AreaList';
import ItemList from './components/ItemList';

function App() {
  const [ areas, setAreas ] = useState([]);


  const fetchAreas = async () => {
    let newAreas = await CallAPI.get();
    setAreas(...areas, newAreas);
  }

  useEffect(() => {
    fetchAreas();

  }, []);


  return (
    <>
    <Navbar bg="dark" text="white" className="container-fluid row mx-auto"><NavLink to="/Home" className="text-decoration-none"><h1>Grocery Pro</h1></NavLink></Navbar>
    <Navbar className="bg-danger container-fluid row mx-auto">
      <Routes>
        <Route exact path={"/Home" || "/"} element={<h1>Home</h1>}/>
        <Route path="Refrigerator" element={<h1>Refrigerator</h1>}/>
        <Route path="Pantry" element={<h1>Pantry</h1>}/>
        <Route path="Freezer" element={<h1>Freezer</h1>}/>
        <Route path="FruitsBasket" element={<h1>Fruits Basket</h1>}/> 
      </Routes>
      </Navbar>
    <Container fluid className='row mx-auto p-0 bottomContainer'>
      <Container className='col-sm-4 p-2 text-center bg-primary'>
        <AreaList areas={areas} className="mx-auto my-auto"></AreaList>
      </Container>
      <Container className='col-sm-8 p-4 bg-success'>
        <ItemList fetchAreas={fetchAreas} areas={areas}></ItemList>
      </Container>
    </Container>
    </>
  )
}
export default App;

