import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className={isVisible ? 'animate-slide-in-left' : ''}>
            <div className="mb-4">
              <span className="badge bg-warning text-dark mb-3 p-2">
                <Zap size={16} className="me-2" />
                Innovative IT Solutions
              </span>
            </div>
            <h1 className="display-4 fw-bold mb-4">
              Transform Your Business with Cutting-Edge Technology
            </h1>
            <p className="lead mb-4 text-white-50">
              We deliver innovative IT solutions that help businesses scale, innovate, and succeed in the digital age. From web development to cloud solutions, we've got you covered.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="warning"
                size="lg"
                className="btn-accent fw-bold"
                href="#contact"
              >
                Get Started
                <ArrowRight size={20} className="ms-2" />
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="fw-bold"
                href="#how-it-works"
              >
                Learn More
              </Button>
            </div>
          </Col>
          <Col lg={6} className={isVisible ? 'animate-slide-in-right' : ''}>
            <div className="text-center">
              <div className="animate-float">
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="400" fill="transparent" />
                  
                  {/* Laptop illustration */}
                  <rect x="50" y="150" width="300" height="180" rx="10" fill="white" opacity="0.1" stroke="white" strokeWidth="2" />
                  <rect x="60" y="160" width="280" height="140" rx="5" fill="white" opacity="0.05" />
                  <rect x="80" y="310" width="240" height="8" rx="4" fill="white" opacity="0.2" />
                  
                  {/* Code symbols */}
                  <text x="100" y="220" fontSize="24" fill="white" opacity="0.4" fontFamily="monospace">&lt;</text>
                  <text x="280" y="220" fontSize="24" fill="white" opacity="0.4" fontFamily="monospace">/&gt;</text>
                  
                  {/* Decorative elements */}
                  <circle cx="120" cy="100" r="30" fill="white" opacity="0.1" />
                  <circle cx="320" cy="80" r="40" fill="white" opacity="0.08" />
                  <circle cx="80" cy="350" r="25" fill="white" opacity="0.1" />
                  
                  {/* Animated dots */}
                  <circle cx="150" cy="130" r="4" fill="white" opacity="0.6" />
                  <circle cx="200" cy="120" r="4" fill="white" opacity="0.4" />
                  <circle cx="250" cy="135" r="4" fill="white" opacity="0.5" />
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
