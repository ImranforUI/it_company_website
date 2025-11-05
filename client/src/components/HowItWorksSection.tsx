import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MessageSquare, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description:
      'We start by understanding your business goals, challenges, and requirements through detailed consultation.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Planning & Design',
    description:
      'Our team creates a comprehensive plan and design strategy tailored to your specific needs.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Development & Launch',
    description:
      'We build, test, and deploy your solution with precision and expertise.',
  },
];

export default function HowItWorksSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    steps.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section id="how-it-works" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">How It Works</h2>
          <p className="lead text-muted">
            Our proven process ensures successful project delivery
          </p>
        </div>

        <Row className="g-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isVisible = visibleSteps.includes(index);
            return (
              <Col lg={4} key={index}>
                <div
                  className={`position-relative ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <span className="badge bg-primary text-white p-2">
                          <IconComponent size={24} />
                        </span>
                      </div>
                      <h6 className="text-muted mb-2">STEP {step.number}</h6>
                      <Card.Title className="fw-bold mb-3">
                        {step.title}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {step.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y">
                      <div
                        style={{
                          width: '40px',
                          height: '2px',
                          backgroundColor: '#0d6efd',
                          opacity: 0.3,
                        }}
                      />
                    </div>
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
