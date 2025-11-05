import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5" style={{ color: 'white' }}>
      <Container>
        <Row className="mb-4">
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">TechSolutions</h5>
            <p className="text-muted">
              Innovative IT solutions for your business growth and digital transformation.
            </p>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-muted text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-muted text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  App Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Cloud Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Consulting
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <div className="mb-2 d-flex align-items-center">
              <Phone size={18} className="me-2" />
              <a href="tel:+919910180620" className="text-muted text-decoration-none">
                +91 9910180620
              </a>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <Mail size={18} className="me-2" />
              <a href="mailto:info@techsolutions.com" className="text-muted text-decoration-none">
                info@techsolutions.com
              </a>
            </div>
            <div className="d-flex align-items-center">
              <MapPin size={18} className="me-2" />
              <span className="text-muted">Delhi, India</span>
            </div>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <p className="text-muted mb-0">
              &copy; 2025 TechSolutions. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#" className="text-muted text-decoration-none">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted text-decoration-none">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted text-decoration-none">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted text-decoration-none">
                <Github size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
