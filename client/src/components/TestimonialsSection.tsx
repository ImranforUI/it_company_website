import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Tech Startup Inc.',
    text: 'TechSolutions transformed our business with their innovative web development. Highly professional and results-driven!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'E-commerce Solutions',
    text: 'Outstanding mobile app development. The team delivered exactly what we needed on time and within budget.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Finance Corp',
    text: 'Their cloud solutions have significantly improved our infrastructure. Excellent support and expertise.',
    rating: 5,
  },
  {
    name: 'Neha Singh',
    company: 'Digital Marketing Agency',
    text: 'Professional, reliable, and always available. The best IT partner we could ask for.',
    rating: 5,
  },
  {
    name: 'Vikram Reddy',
    company: 'Manufacturing Co.',
    text: 'Great consulting services. They understood our business needs and provided perfect solutions.',
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    company: 'Healthcare Services',
    text: 'Exceptional cybersecurity implementation. We feel much more secure now.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCards >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - visibleCards) : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
          <p className="lead text-muted">
            Trusted by businesses across various industries
          </p>
        </div>

        <div className="position-relative">
          <Row className="g-4">
            {testimonials
              .slice(currentIndex, currentIndex + visibleCards)
              .map((testimonial, index) => (
                <Col
                  key={index}
                  lg={4}
                  md={6}
                  className="animate-fade-in-up"
                >
                  <Card className="h-100 testimonial-card">
                    <Card.Body>
                      <div className="mb-3 d-flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="text-warning"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <Card.Text className="testimonial-text">
                        "{testimonial.text}"
                      </Card.Text>
                      <div>
                        <p className="testimonial-author mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-muted small">{testimonial.company}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>

          {/* Navigation Buttons */}
          {testimonials.length > visibleCards && (
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button
                className="btn btn-outline-primary rounded-circle p-2"
                onClick={prevSlide}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="btn btn-outline-primary rounded-circle p-2"
                onClick={nextSlide}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
