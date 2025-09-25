import { Navbar, Container, Nav, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';


const rows = [
  // row 1: wider left card
  [
    { id: 1, title: 'Explore Lagos', img: '/src/assets/rafting.png', colMd: 7 },
    { id: 2, title: 'Weekend Getaway', img: '/src/assets/naturewalk.png', colMd: 5 },
  ],
  // row 2: equal halves
  [
    { id: 3, title: 'Adventure Trips', img: '/src/assets/bikeriding.png', colMd: 4 },
    { id: 4, title: 'City Breaks', img: '/src/assets/bungee.png', colMd: 4 },
    { id: 5, title: 'City Breaks', img: '/src/assets/winetasting.png', colMd: 4 },
  ],
  // row 3: even wider left
  [
    { id: 6, title: 'Luxury Escapes', img: '/src/assets/farmvisit.png', colMd: 8 },
    { id: 7, title: 'Budget Finds', img: '/src/assets/coffeetasting.png', colMd: 4 },
  ],
  // row 4: wider right
  [
    { id: 8, title: 'Cultural Trails', img: '/src/assets/camping.png', colMd: 4 },
    { id: 9, title: 'Food Tours', img: '/src/assets/bikeriding.png', colMd: 8 },
  ],
];


const Hero = () => {
    return (
        <Container style={{ marginTop: '60px' }} className="container-md">
            <br/>
            <div className="d-flex flex-column gap-3 text-left my-4">
            <h1 className="fw-bold" style={{fontSize: "50px"}}>
                Find An <br /> Experience
            </h1>
            <p className="text-muted">
                To find you the best experiences, we will ask you a few questions <br />
                and show you experiences based on your preferences.
            </p>

            <p className="fw-semibold mt-4">How much time do you have?</p>
            <div className="d-flex justify-content-start gap-4 flex-wrap">
                <div className="form-check d-flex align-items-center gap-2">
                <input className="form-check-input" type="checkbox" id="weekend" />
                <label className="form-check-label fw-semibold" htmlFor="weekend">A weekend</label>
                </div>

                <div className="form-check d-flex align-items-center gap-2">
                <input className="form-check-input" type="checkbox" id="week" />
                <label className="form-check-label fw-semibold" htmlFor="week">A week</label>
                </div>

                <div className="form-check d-flex align-items-center gap-2">
                <input className="form-check-input" type="checkbox" id="month" />
                <label className="form-check-label fw-semibold" htmlFor="month">A month</label>
                </div>

                <div className="form-check d-flex align-items-center gap-2">
                <input className="form-check-input" type="checkbox" id="days" />
                <label className="form-check-label fw-semibold" htmlFor="days">A few days, specify.</label>
                </div>
            </div>

            <p className="fw-semibold mt-4">What are your interests?</p>
            </div>

            {rows.map((pair, rowIndex) => (
            <Row key={`row-${rowIndex}`} className="g-3 mb-3">
                {pair.map((card) => (
                <Col key={card.id} xs={12} md={card.colMd}>
                    <Card className="h-100 text-white border-0 position-relative">
                    {/* Background image */}
                    <Card.Img 
                        src={card.img} 
                        alt={card.title} 
                        style={{ height: '240px', objectFit: 'cover' }} 
                    />
                    
                    {/* Overlay with centered content */}
                    <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-50">
                        <Card.Title className="fw-bold">{card.title}</Card.Title>
        
                    </Card.ImgOverlay>
                    </Card>
                </Col>
                ))}
            </Row>
            ))}
            <Button style={{backgroundColor: "#FF5200", padding: "10px 30px"}} size="sm">Set</Button>

        </Container>
    )
}

export default Hero