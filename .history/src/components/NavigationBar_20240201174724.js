import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>MAN FILMS</Navbar.Brand>
                <Nav>
                    <Nav.Link hre>Trending</Nav.Link>
                    <Nav.Link hre>Superhero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
}
export default NavigationBar;