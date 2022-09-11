import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <div className="navbarContainer">
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;