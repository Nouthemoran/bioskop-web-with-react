import { Card, Container, Image, Row, Col } from "react-bootstrap" 
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import lightyear from "../assets/images/superhero/spiderman-cover.jpg"
import morbius from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={antman} alt="Dune Movies" className="trendingImages"/>
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
      <Image src={avenger} alt="Dune Movies" className="trendingImages"/>
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
      <Image src={batman} alt="Dune Movies" className="trendingImages"/>
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
      <Image src={robinhood} alt="Dune Movies" className="trendingImages"/>
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
      <Image src={lightyear} alt="Dune Movies" className="trendingImages"/>
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
      <Image src={morbius} alt="Dune Movies" className="trendingImages"/>
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

export default SuperHero;