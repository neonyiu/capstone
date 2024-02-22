import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const items = [
    {label: "HOME", path: "#home"},
    {label: "ABOUT", path: "#about"},
    {label: "MENU", path: "/menu"},
    {label: "RESERVATION", path: "/reservation"},
    {label: "ORDER ONLINE", path: "/order"},
    {label: "LOG IN", path: "/login"},];

const NavItems = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="Logo.svg" alt="Little Lemon logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {items.map(i => (<Nav.Link href={i.path}>{i.label}</Nav.Link>))}
                        
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavItems;