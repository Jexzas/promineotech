import { Card } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import CallAPI from '../rest/api';

export default function RightContainer() {
    return (
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Refrigerator" element={<Area location="Refrigerator"/> }/>
        <Route path="/Pantry" element={<Area location="Pantry"/>}/>
        <Route path="/Freezer" element={<Area location="Freezer"/>}/>
        <Route path="/Fruits%20Basket"  element={<Area location="Fruits Basket"/>}/>
        </Routes>
    )
}

function Home (props) {
    return (
        <h1>You have not selected an area to view.</h1>
    )
}

function Area (props) {
    const { location } = props;
    // const deleteItem = () => {
    //     CallAPI.put()
    // }
    return (
        <Card>
            <Card.Header>{location}</Card.Header>

        </Card>
    )
}

