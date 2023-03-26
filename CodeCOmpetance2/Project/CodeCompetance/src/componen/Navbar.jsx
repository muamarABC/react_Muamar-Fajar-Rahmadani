import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import f from '../gambar/f.png'
import { useNavigate } from "react-router-dom";

function CollapsibleExample() {
    const navigasi = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">FajarJaya</Navbar.Brand>
        <img src={f} style={{ width: "5%" }}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#layanan">Layanan</Nav.Link>
            <Nav.Link onClick={() => navigasi('/About')}>About Us</Nav.Link>
            <Nav.Link onClick={() => navigasi('/contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;