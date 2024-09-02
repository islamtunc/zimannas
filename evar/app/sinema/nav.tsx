// Bismillahirahmanirahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Sinema</Nav.Link>


            <Nav.Link href="/felsefe">....</Nav.Link>

            <Nav.Link href="/sinema">.....</Nav.Link>

            <Nav.Link href="/tarih">...</Nav.Link>

            <Nav.Link href="/sosyoloji">...</Nav.Link>

            <Nav.Link href="/kultursanat">...</Nav.Link>

            <Nav.Link href="/iletisim">...</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;