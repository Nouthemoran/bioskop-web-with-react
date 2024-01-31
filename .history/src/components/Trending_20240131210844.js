import { Card, Container, Image, Row, Col } from "react-bootstrap" 
import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infite from

const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={duneImage} alt="Dune Movies"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Card title</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
        </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={duneImage} alt="Dune Movies"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Card title</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
        </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={duneImage} alt="Dune Movies"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Card title</Card.Title>
        <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
        </div>
    </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending;