import { Navbar, Nav, Container } from 'react-bootstrap'
export default function Banner () { 
    return (
            <Navbar id="banner" className='text-center'>
                <Container>
                    <Navbar.Brand ><h1>HOME GROCERY PRO</h1></Navbar.Brand>
                </Container>
            </Navbar>
    )
}