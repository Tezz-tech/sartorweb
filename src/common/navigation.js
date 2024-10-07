import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.webp";
import "../styles/navigation.css";
import React, { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Navigation = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const target = document.getElementById("google-calendar-button");

      if (target) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ02yJ6YdpzwSzn8_tuf7bkFOuaboUIiuPiIatY9AM2QtmKDQ8o_4PX88GVRd8wIhDSd5kh013n7?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target,
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
    <div className="navigation-container ps-4 pe-4">
      <Navbar collapseOnSelect expand="lg" bg="dark" className="container" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="img-fluid" style={{ height: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="mr-auto nav-links3 w-100 d-flex align-items-center justify-content-around">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ color: 'white' }}>
              Our Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" style={{ color: 'white' }}>
              Blogs
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto w-100 d-flex align-items-center justify-content-around">
            <button className="book"><a href="https://mailchi.mp/sartor.ng/free-30mins-business-consulting-discovery-call">Book a Consultation</a></button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    <div className="mt-5 mb-3"></div>
    </>
  );
};

export default Navigation;
