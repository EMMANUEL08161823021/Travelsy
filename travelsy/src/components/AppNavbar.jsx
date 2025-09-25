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
              <Nav.Link href="#home">Camping Locations</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#destinations">Activities</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#about">Equipment</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#contact">Blogs</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Right-side controls */}
          <div className="d-flex align-items-center gap-2">
            <Button style={{backgroundColor: "#FF5200", padding: "10px 30px"}} className="d-flex align-items-center">
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
                  src="/src/assets/image.png"
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
