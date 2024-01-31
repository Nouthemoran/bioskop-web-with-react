import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <Navbar>
            <Nav>
                <Nav.Link>Trending</Nav.Link>
                <Nav.Link>Super</Nav.Link>
            </Nav>
        </Navbar>
    );
}
export default NavigationBar;