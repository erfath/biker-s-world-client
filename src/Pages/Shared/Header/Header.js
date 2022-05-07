import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/bike.png';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='nav' sticky='top' variant="dark">
      <Container>
        <Navbar.Brand href="/"><img style={{ width: '50px' }} src={logo} alt="" /> <span style={{ fontSize: "40px" }}>Bikers World BD</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/manage">Manage Item</Nav.Link>
            <Nav.Link href="/additem">Add Item</Nav.Link>
            <Nav.Link href="/allitems">All Items</Nav.Link>
            <Nav.Link href="/blogs">My Blogs</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link  href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;