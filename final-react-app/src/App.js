import logo from './logo.svg';
import './App.css';
import CallAPI from './rest/api';
import React from 'react';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Banner from './components/banner';
import RightContainer from './components/rightContainer';

function App() {
  let [ area ] = useState('');
  let [ areas, setAreas ] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      await fetchAreas();
      console.log(areas);
    }
    fetchData();
  }, []);

  const fetchAreas = async () => {
    const addAreas = await CallAPI.get();
    setAreas(...areas, addAreas);
  }



  return (
    <Container bg="light" fluid className='fullApp'>
      <Row bg="primary" text='white'>
        <Banner />
      </Row>
      <Row bg="dark" text="white">
        {/* <Navbar /> */}
      </Row>
      <Row>
        <Col sm={4}>
          <AreasList areas={areas} />
        </Col>
        <Col sm={8}>
          <RightContainer />
        </Col>
      </Row>

    </Container>
  );
}

function AreasList(props) {
  let { areas } = props;
  return (
    <>
    {
      areas.map((area, index) => {
        return (
          <Card className="areaCard p-2" bg="primary" text="white" key={index}>
            <Card.Header>{area.name}</Card.Header>
          </Card>
        )
        console.log(area.name);
      })
    }
    </>
  )

}

function ItemsList(props) {
  let { area }  = props;
  area.map((item, index) => {
    return (
      <Card className="itemCard" key={index}>
        <Card.Header>{item.name}</Card.Header>
        <Button variant="danger">Delete</Button>
      </Card>
    )
  })
}




export default App;
