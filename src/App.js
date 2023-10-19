import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

function App() {
  return  (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" style={{ paddingLeft: '15px' }}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <div className="d-flex">
          <div className="sidebar">
            <Nav className="flex-column">
              <Nav.Link href="#item1">Item 1</Nav.Link>
              <Nav.Link href="#item2">Item 2</Nav.Link>
              <Nav.Link href="#item3">Item 3</Nav.Link>
            </Nav>
          </div>
          <div className="flex-grow-1 p-3">
            {/* Your page content goes here */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
