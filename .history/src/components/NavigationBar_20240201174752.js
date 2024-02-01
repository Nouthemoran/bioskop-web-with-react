import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>MAN FILMS</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">Trending</Nav.Link>
                    <Nav.Link href="#superhero">Superhero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
}
export default NavigationBar;