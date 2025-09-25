import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const testimonialsData = [
  {
    id: 1,
    name: "Derek Dunn",
    title: "Best User Exerience",
    text: "Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock.",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Best User Exerience",
    text: "This was one of the best experiences of my life. Highly recommend it!",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Best User Exerience",
    text: "Amazing! The service and the activities were top-notch.",
  },
  {
    id: 4,
    name: "Maria Johnson",
    title: "Best User Exerience",
    text: "Everything was perfectly organized. I will definitely come back!",
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 2;

  const indexOfLast = currentPage * testimonialsPerPage;
  const indexOfFirst = indexOfLast - testimonialsPerPage;
  const currentTestimonials = testimonialsData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left Side - Heading & Controls */}
        <Col md={4} className="mb-4 mb-md-0">
          <h6 className="text-uppercase text-muted">Testimonials</h6>
          <h2 className="fw-bold mb-4">
            What <br /> customers <br />{" "}
            <span className="text-primary">say about us.</span>
          </h2>

          <div className="d-flex align-items-center gap-3">
            <Button
              variant="outline-primary"
              size="sm"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              &lt;
            </Button>
            <span className="small">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              &gt;
            </Button>
          </div>
        </Col>

        {/* Right Side - Testimonial Cards */}
        <Col md={8}>
          <Row className="g-4">
            {currentTestimonials.map((t) => (
              <Col key={t.id} xs={12} md={6}>
                <Card className="h-100 text-start shadow-sm border-0 p-4">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>
                        {t.title}
                    </Card.Title>
                    <Card.Text className="fs-6 fst-italic mb-4">
                      “{t.text}”
                    </Card.Text>
                    <Card.Title className="fw-bold">{t.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
