import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Users,
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Build stunning, responsive websites that engage your audience and drive conversions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Create powerful mobile applications for iOS and Android platforms.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Migrate and manage your infrastructure on secure cloud platforms.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Protect your business with enterprise-grade security solutions.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description:
      'Optimize your systems for speed, reliability, and scalability.',
  },
  {
    icon: Users,
    title: 'Consulting',
    description:
      'Expert guidance to transform your business digitally.',
  },
];

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    services.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Services</h2>
          <p className="lead text-muted">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        <Row className="g-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <Col lg={4} md={6} key={index}>
                <Card
                  className={`h-100 service-card ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon mb-3">
                      <IconComponent size={48} />
                    </div>
                    <Card.Title className="fw-bold mb-3">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
