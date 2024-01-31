import {Col, Container, Row, Button} from "react-bootstrap";

const Intro = () => {
    return (
        <div className=" intro">
        <Container className="text-white d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">NONTON GRATIS</div> 
              <div className="title">GAK PAKAI KARCIS</div>
              <div className="introButton mt-4 text">
                <Button>Lihat Semua List</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro