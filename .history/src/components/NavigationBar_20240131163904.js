import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <div>
        <Navbar>
            <Container>
                <NavBrand>MAN FILMS</NavbarBrand>
                <Nav>
                    <Nav.Link>Trending</Nav.Link>
                    <Nav.Link>Superhero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
}
export default NavigationBar;