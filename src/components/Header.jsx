import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Header() {
  const linkStyle = {
    color: 'orange',
    textDecoration: 'none',
  };

  const navbarToggleStyle = {
    borderColor: 'orange',
    backgroundColor: 'orange', // Add this line to set the background color
  };

  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={linkStyle}>
            <h1 className='header-h1'>Class Note</h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={navbarToggleStyle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="/courses" style={linkStyle} className="nav-link">
                Courses
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/my-account" style={linkStyle} className="nav-link">
                Account
              </Link>
            </Nav.Item>
            {/* Add the Logout link for smaller screens */}
            <Nav.Item>
              <Link to="/" style={linkStyle} className="nav-link d-lg-none">
                Logout
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
