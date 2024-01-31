import {Col, Container, Row} from "react-bootstrap"
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css";

function App() {
  return (
    
    <div className="myBG">
      <NavigationBar/>
      <div className=" intro">
        <Container className="text-white d-flex justify-content-center align-items-center border">
          <Row>
            <Col>
              <div>NONTON GRATIS</div> <div>GAK PAKAI KARCIS
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  );
}

export default App;
