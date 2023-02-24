import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../src/assets/images/logos.png'

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
};

export default NavbarComponent;
