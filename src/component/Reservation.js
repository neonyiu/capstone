import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from 'react-bootstrap/Modal';
import restaurantImage from "../assets/restaurant.png";

export const Reservation = (props) => {
    const {show, setShow} = props;
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };

    return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)} className="bg-white">
        <Modal.Header closeButton>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <img src={restaurantImage} class="img-fluid d-inline-block w-100 " alt="restaurant"/>
                </Col>
                <h3 className="text-center mt-4 markazi-text-l text-info">
                    Reservations
                </h3>
            </Row>
            <Row className="justify-content-center">
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Select a date</Form.Label>
                        <Form.Control type="date" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="time">
                        <Form.Label>Select a time</Form.Label>
                        <Form.Control type="time" step="900" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="dinerNum">
                        <Form.Label>Select number of diner(s)</Form.Label>
                        <Form.Select aria-label="No. of diner(s)" required>
                            <option>Open this select menu</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9+ (please specify in remark)</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="occasion">
                        <Form.Label>Select occasion</Form.Label>
                        <Form.Select aria-label="occasion">
                            <option>Open this select menu</option>
                            <option value="annivesary">Annivesary</option>
                            <option value="birthday">Birthday</option>
                            <option value="Celebration">Celebration</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="remark">
                        <Form.Label>Remark (opt.)</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>
                </Col>
            </Row>
        <Modal.Footer className="justify-content-center">
          <Button variant="info" type="submit">Submit</Button>
        </Modal.Footer>
        </Modal.Body>
        </Form>
      </Modal>
    )
}