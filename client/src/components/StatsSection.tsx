import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const stats = [
  {
    number: 150,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    number: 120,
    label: 'Happy Clients',
    suffix: '+',
  },
  {
    number: 8,
    label: 'Years Experience',
    suffix: '+',
  },
  {
    number: 45,
    label: 'Team Members',
    suffix: '+',
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.number;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, 30);

      return () => clearInterval(timer);
    });
  }, []);

  return (
    <section className="stats-section">
      <Container>
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} sm={6} key={index} className="stat-item">
              <div className="stat-number animate-fade-in-up">
                {counts[index]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
