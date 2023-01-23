import {Navbar, Container, Nav} from "react-bootstrap"
const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>WINFILM</Navbar.Brand>
                    <Nav> 
                        <Nav.Link>Superhero</Nav.Link>
                        <Nav.Link>Trending</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar