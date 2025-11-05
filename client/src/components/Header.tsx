import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary fw-bold">
          <span className="d-inline-block me-2">💼</span>
          TechSolutions
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <X size={24} /> : <Menu size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#how-it-works" className="nav-link">
              How It Works
            </Nav.Link>
            <Nav.Link href="#testimonials" className="nav-link">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Item className="ms-2">
              <Button
                variant="primary"
                className="btn-primary"
                href="#contact"
              >
                Get Started
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
