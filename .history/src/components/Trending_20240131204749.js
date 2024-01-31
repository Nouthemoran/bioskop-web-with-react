import { Card, Container, Row, Col } from "react-bootstrap" 
import duneImage from "../assets/images/trending/dune.jpg"
const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="movieImage">
                    <Card className=" text-dark text-center">
      <Card.Img src={duneImage} alt="Dune Movies" className="" />
      
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending;