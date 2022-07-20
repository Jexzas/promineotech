import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Banner () { 
    return (
            <Navbar id="banner" className='text-center'>
                <Container>
                    <Navbar.Brand ><h1><Link to="/">HOME GROCERY PRO</Link></h1></Navbar.Brand>
                </Container>
            </Navbar>
    )
}