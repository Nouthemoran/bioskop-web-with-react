import { Card } from "react-bootstrap" 
import duneImage from "../assets/images/trending/dune.jpg"
const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
           <Card className="bg-dark text-white">
      <Card.Img src={duneImage} alt="Dune Movies" className="movieImage" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
        </div>
    )
}

export default Trending;