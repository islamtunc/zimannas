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
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/psikoloji">Psikoloji</Nav.Link>


            <Nav.Link href="/felsefe">Felsefe</Nav.Link>

            <Nav.Link href="/sinema">Sinema</Nav.Link>

            <Nav.Link href="/tarih">Edebiyat</Nav.Link>

            <Nav.Link href="/sosyoloji">Sosyoloji</Nav.Link>

            <Nav.Link href="/kultursanat">Kültür Sanat</Nav.Link>

            <Nav.Link href="/iletisim">İletişim</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;