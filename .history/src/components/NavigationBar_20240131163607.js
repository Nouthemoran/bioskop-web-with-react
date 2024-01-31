import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        
        <Navbar>
            <Container>
                <Nav.Link>Trending</Nav.Link>
                <Nav.Link>Superhero</Nav.Link>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;