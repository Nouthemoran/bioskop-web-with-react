import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <div>
        <Navbar>
            <Container>
                <Nav.Link>Trending</Nav.Link>
                <Nav.Link>Superhero</Nav.Link>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;