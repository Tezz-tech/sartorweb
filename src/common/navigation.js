import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/icons/5amas-logo.svg';

export default function Navigation() {
  return (
    <div className='container'>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand>
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
                Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
                Help
            </Nav.Link>
            <Nav.Link as={Link} to="/open-store">
                Open your store
            </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <Button variant="outline-primary" className="mr-2">
                Login
            </Button>
            <Button variant="primary">Sign up</Button>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}
