// src/components/NavbarComponent.jsx
import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { FaRegCalendarAlt, FaSearch } from 'react-icons/fa';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container className="container-md d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand className="fw-bold">Travelsy</Navbar.Brand>

        {/* Toggler for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Nav links centered */}
          <Nav
            as="ul"
            className="mx-auto my-2 my-lg-0 d-flex gap-3"
            style={{ listStyle: 'none' }}
          >
            <Nav.Item as="li">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#destinations">Destinations</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Right-side controls */}
          <div className="d-flex align-items-center gap-2">
            <Button variant="primary" className="d-flex align-items-center">
              <FaRegCalendarAlt className="me-2" />
              Reservation
            </Button>

            <Button variant="outline-secondary" className="d-flex align-items-center">
              <FaSearch />
            </Button>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="link"
                id="dropdown-avatar"
                className="p-0 border-0"
              >
                <img
                  src="https://via.placeholder.com/34"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: 34, height: 34, objectFit: 'cover' }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
