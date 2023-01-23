import {Col, Container, Row, Button} from "react-bootstrap"
const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
              <Col>
              <div className="title">WINFILMS WELCOME</div>    
              <div className="introButton mt-4 d-flex justify-content-center">
                <Button variant="dark">Explore Dunia Film Mu🎥</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>      
    )
}

export default Intro