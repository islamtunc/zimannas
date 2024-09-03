// Bismillahirahmanirahim

"use client"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Nav } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        içerik
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tüm Yazılar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      
        <Nav.Link href="/sosyoloji">...</Nav.Link>

        <Nav.Link href="/sosyoloji">Sosyoloji</Nav.Link>





        <Nav.Link href="/sosyoloji">Sosyoloji</Nav.Link>

        <Nav.Link href="/sosyoloji">Sosyoloji</Nav.Link>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;