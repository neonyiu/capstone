import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';

const items = [
    {label: "HOME", path: "/home"},
    {label: "ABOUT", path: "/about"},
    {label: "MENU", path: "/menu"},
    {label: "RESERVATION", path: "/reservation"},
    {label: "ORDER ONLINE", path: "/order"},
    {label: "LOG IN", path: "/login"},];

const NavItems = () => {

  return (
    <Navbar expand="lg" className="header justify-content-lg-center">
            <Col lg={2}>
                <Navbar.Brand href="#home">
                    <img src="Logo.svg" alt="Little Lemon logo"/>
                </Navbar.Brand>
            </Col>
            <Col lg={6}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav col-lg-6">
                <Nav className="d-flex justify-content-between w-100">
                    {items.map(i => (<Nav.Link className="lg" href={i.path} key={i.label}>{i.label}</Nav.Link>))}
                </Nav>
                </Navbar.Collapse>
            </Col>
    </Navbar>
  );
}

export default NavItems;