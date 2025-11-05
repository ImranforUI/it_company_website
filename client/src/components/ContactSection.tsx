import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get in Touch</h2>
          <p className="lead text-muted">
            Have a question? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <Row className="g-5">
          <Col lg={6}>
            <div className="mb-4">
              <div className="d-flex align-items-start mb-4">
                <div className="bg-primary text-white p-3 rounded me-3">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Phone</h5>
                  <p className="text-muted mb-0">
                    <a href="tel:+919910180620" className="text-decoration-none">
                      +91 9910180620
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-primary text-white p-3 rounded me-3">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email</h5>
                  <p className="text-muted mb-0">
                    <a href="mailto:info@techsolutions.com" className="text-decoration-none">
                      info@techsolutions.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="bg-primary text-white p-3 rounded me-3">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Address</h5>
                  <p className="text-muted mb-0">
                    Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            {submitted && (
              <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
                Thank you for your message! We'll get back to you soon.
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="w-100 fw-bold"
              >
                Send Message
                <Send size={20} className="ms-2" />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
