import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = () => {
    return (
        <>
        <main className="Container">
        <section className="hero">
            <Row className="justify-content-md-center">
                <Col md={4}>hero text</Col>
                <Col md={4}>hero image</Col>
            </Row>
        </section>
        <section className="highlights">
            <Row className="justify-content-md-center">
                <Col md={12}>hgihlight</Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={2}>highlight card</Col>
                <Col md={2}>highlight card</Col>
                <Col md={2}>highlight card</Col>
            </Row>
        </section>
        <section className="testimonial">
            <Row className="text-align-center">
                testimontial
            </Row>
            <Row className="justify-content-md-center">
                <Col md={2}>card</Col>
                <Col md={2}>card</Col>
                <Col md={2}>card</Col>
                <Col md={2}>card</Col>
            </Row>
        </section>
        <section className="about">
            <Row className="justify-content-md-center">
                <Col md={4}>text</Col>
                <Col md={4}>image</Col>
            </Row>
        </section>
        </main>
        <footer className="container footer">
            <Row className="justify-content-md-center">
                <Col md={2}>image</Col>
                <Col md={2}>1</Col>
                <Col md={2}>2</Col>
                <Col md={2}>3</Col>
            </Row>
        </footer>
        </>
    )
};

export default Main;