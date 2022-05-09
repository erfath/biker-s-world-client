import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/bike.png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth)

  }
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-primary' sticky='top' variant="dark">
      <Container>
        <Navbar.Brand href="/"><img style={{ width: '50px' }} src={logo} alt="" /> <span style={{ fontSize: "40px" }}>Bikers World BD</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            {
              user && <>
                <Nav.Link as={Link} to="manage">Manage Item</Nav.Link>
                <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                <Nav.Link as={Link} to="allitems">All Items</Nav.Link>
              </>
            }
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="blogs">My Blogs</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            {
              user ?
                <button className='btn btn-primary' onClick={handleSignout}>Signout</button>

                :
                <Nav.Link href="/login">
                  Login
                </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;