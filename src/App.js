import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

import Item1 from './components/item1/item1';
import Item2 from './components/item2/item2';
import Item3 from './components/item3/item3';

function App() {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Router>
      <div>
      <Navbar
          bg="light"
          expand="lg"
          fixed="top"
          expanded={expanded}
          onToggle={handleToggle}
          style={{ paddingLeft: '15px' }}
        >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/item1">Item 1</Nav.Link>
              <Nav.Link as={Link} to="/item2">Item 2</Nav.Link>
              <Nav.Link as={Link} to="/item3">Item 3</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid style={{ paddingTop: expanded ? '142px' : '56px' }}>
          <div className="d-flex">
              <div className="sidebar" style={{ top: expanded ? '142px' : '56px' }}>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/item1">Item 1</Nav.Link>
                  <Nav.Link as={Link} to="/item2">Item 2</Nav.Link>
                  <Nav.Link as={Link} to="/item3">Item 3</Nav.Link>
                </Nav>
            </div>
            <div className="flex-grow-1 p-3 content-area">
              <div className="content-area">
                <Routes>
                    <Route path="/item1" element={<Item1 />} />
                    <Route path="/item2" element={<Item2 />} />
                    <Route path="/item3" element={<Item3 />} />
                </Routes>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
