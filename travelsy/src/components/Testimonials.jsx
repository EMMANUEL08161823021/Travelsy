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
    title: "Friendly Staff",
    text: "“Winds sweeping across arid regions lift and transport loose sand grains over time. As the wind slows, particles settle, forming gentle mounds that gradually rise into dunes. Softer deposits shift frequently, while denser patches resist motion. This constant balance of movement and stability.",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Best User Exerience",
    text: "“When a river flows across soft sediments, the water moves faster on the outer curve and slower on the inner curve. The faster flow erodes soil, while the slower flow deposits it. This alternating erosion and deposition shift the channel over time, gradually forming sweeping bends known as meanders that characterize mature river systems.”",
  },
  {
    id: 4,
    name: "Maria Johnson",
    title: "Glaciers Valley",
    text: "“As massive glaciers move slowly downhill, their weight and embedded debris scrape against underlying rock layers. Softer sections wear away quickly, while harder sections endure, creating uneven surfaces. Over thousands of years, this grinding action transforms V-shaped river valleys into broad U-shaped troughs. These valleys remain long after the ice has melted, marking past glacial activity.”",
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
        <br/>
        <br/>
      <Row className="align-items-start">
        {/* Left Side - Heading & Controls */}
        <Col md={4} className="mb-4 mb-md-0">
          <h6 className="text-uppercase text-muted">Testimonials</h6>
          <h2 className="fw-bold mb-4" style={{fontSize: "50px"}}>
            What <br /> customers <br />{" "}
            <span style={{color: "#FF5200"}}>say about us.</span>
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

        <br/>
        <br/>
    </Container>
  );
};

export default Testimonials;
