import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const header=()=> {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    </Container>
  </Navbar>
    </>
  )
}

export default header;
