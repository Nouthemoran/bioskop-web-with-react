import { Card, Container, Image, Row, Col } from "react-bootstrap" 
import duneImage from "../assets/images/trending/dune.jpg"
const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="movieImage">
                    <Card className=" text-white movieImage">
      <Image src={duneImage} alt="Dune Movies"/>
      <div className="bg-dark">
        .p-2 
        <Card.Title className="text-center">Card title</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
    </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending;