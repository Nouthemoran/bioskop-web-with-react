import {Col, Container, Row} from "react-bootstrap"
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css";

function App() {
  return (
    
    <div className="myBG">
      <NavigationBar/>
      <div>
        <Container>
          <Row>
            <Col>TE</Col>
          </Row>
        </Container>
      </div>
    </div>

  );
}

export default App;
