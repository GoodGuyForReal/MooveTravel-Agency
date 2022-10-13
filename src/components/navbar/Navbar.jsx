import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


function MNavbar() {
  return (
    <Navbar className='nav' expand="lg">
      <Container>
        <Navbar.Brand className='brandtext' href="#home">Moove.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="itemlist ms-auto ">
            <Nav.Link className='navitem 'href="#home">Home</Nav.Link>
            <Nav.Link className='navitem ' href="#link">About Us</Nav.Link>
            <Nav.Link className='navitem ' href="#link">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MNavbar;