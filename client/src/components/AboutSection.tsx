import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Expert Team of Developers',
  'Proven Track Record',
  'Customer-Centric Approach',
  '24/7 Support',
  'Scalable Solutions',
  'Latest Technologies',
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className={isVisible ? 'animate-slide-in-left' : ''}>
            <div className="mb-4">
              <h6 className="text-primary fw-bold">ABOUT US</h6>
              <h2 className="display-5 fw-bold mb-4">
                Transforming Ideas into Reality
              </h2>
              <p className="lead text-muted mb-4">
                With over 8 years of experience in the IT industry, we've helped
                hundreds of businesses achieve their digital transformation goals.
                Our team of expert developers, designers, and consultants work
                together to deliver innovative solutions that drive growth.
              </p>
            </div>

            <div className="mb-4">
              {features.map((feature, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <CheckCircle size={24} className="text-primary me-3" />
                  <span className="fw-500">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              className="fw-bold"
              href="#contact"
            >
              Get in Touch
              <ArrowRight size={20} className="ms-2" />
            </Button>
          </Col>

          <Col lg={6} className={isVisible ? 'animate-slide-in-right' : ''}>
            <div className="position-relative">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="400" fill="transparent" />

                {/* Team illustration */}
                <circle cx="200" cy="150" r="50" fill="#0d6efd" opacity="0.1" />
                <circle cx="200" cy="150" r="40" fill="#0d6efd" opacity="0.2" />

                {/* People silhouettes */}
                <circle cx="150" cy="200" r="20" fill="#667eea" opacity="0.6" />
                <rect x="140" y="225" width="20" height="40" fill="#667eea" opacity="0.6" />

                <circle cx="200" cy="180" r="22" fill="#764ba2" opacity="0.6" />
                <rect x="189" y="205" width="22" height="45" fill="#764ba2" opacity="0.6" />

                <circle cx="250" cy="200" r="20" fill="#667eea" opacity="0.6" />
                <rect x="240" y="225" width="20" height="40" fill="#667eea" opacity="0.6" />

                {/* Decorative elements */}
                <rect x="80" y="320" width="240" height="4" rx="2" fill="#0d6efd" opacity="0.3" />
                <circle cx="100" cy="100" r="15" fill="#ffc107" opacity="0.3" />
                <circle cx="320" cy="320" r="20" fill="#198754" opacity="0.2" />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
