import React, {useState} from 'react';

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { BookingForm } from "./BookingForm";
import { ReactComponent as MotorSvg } from '../assets/bike-delivery-icon.svg';
import bruchettaImage from "../assets/bruchetta.svg";
import chanImage from "../assets/chan.png";
import chefImage from "../assets/chef.png";
import francisImage from "../assets/francis.png";
import greekSaladImage from "../assets/greek salad.jpg";
import jomiImage from "../assets/jomi.png";
import karlImage from "../assets/karl.png";
import lemonDessertImage from "../assets/lemon dessert.jpg";
import logoImage from "../assets/square-logo.png";
import restaurantFoodImage from "../assets/restaurantfood.jpg";
import starImage from "../assets/star.png";

const Link = ({href, label}) => {
    return (<p><a href={href} className="link-dark">{label}</a></p>)
}

const highlightsCards = [
    {
        name: "Greek salad",
        price: 12.88,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: greekSaladImage,
    },
    {
        name: "Bruchetta",
        price: 15.88,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: bruchettaImage,
    },
    {
        name: "Lemon Dessert",
        price: 8.28,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: lemonDessertImage,
    },
];

const testimonialsCards = [
    { name: "Jomi", star: 5, image: jomiImage, alt: "Jomi profile", },
    { name: "Karl", star: 5,  image: karlImage, alt: "Karl Profile", },
    { name: "Chan", star: 4, image: chanImage, alt: "Chan Profile", },
    { name: "Francis",star: 5, image: francisImage, alt: "Francis Profile", },
];

const Main = () => {
    const [showReservation, setShowReservation] = useState(false);
    const [availableTimes, setAvailableTimes] = useState(['16:00:-18:00', '18:00-20:00', '20:00-22:00']);

    return (
        <>
        <main className="Container gx-1">
        <BookingForm show={showReservation} setShow={setShowReservation} availableTimes={availableTimes}/>
        <section className="hero">
            <Row className="justify-content-md-center">
                <Col md={4} className="d-flex align-items-start flex-column mb-2">
                    <h1 className="mb-4 markazi-text-h">Little Lemon</h1>
                    <p><small className="fs-lg">Hong Kong</small></p>
                    <p className="fs-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Col><Button className="btn btn-info mt-5 px-4 py-2 w-100" onClick={() => setShowReservation(true)}>Reverse a table</Button></Col>
                </Col>
                <Col md={4} className="pt-3">
                    <img src={restaurantFoodImage} class="img-fluid rounded" alt="Restaurant food"/>
                </Col>
            </Row>
        </section>
        <section>
            <Row className="justify-content-center">
                <Col className="d-flex flex-row justify-content-between" md={8}>
                    <div><h2 className="my-auto markazi-text-h flex-start">Specials</h2></div>
                    <div><Button className="flex-end btn btn-info py-2 flex-end">Open Menu</Button></div>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-4 pb-5">
                <Col md={8} className="d-flex flex-wrap justify-content-center pb-5">
                {
                    highlightsCards.map(i => (
                            <Card className="px-0 mt-3 mx-3" style={{ width: '16rem'}}>
                            <Card.Img variant="top" src={ i.image || "holder.js/100px180"} style={{ height: '11rem' }}/>
                            <Card.Body style={{height: "16rem"}}>
                                <Card.Title>{i.name}</Card.Title>
                                <Card.Text>
                                {i.description}
                                </Card.Text>
                                <Card.Link href="#" style={{textDecoration: "none", color: "black"}}>Order a delivery<MotorSvg className="mx-3" style={{ width: "1.3rem", height: "auto" }}/></Card.Link>
                            </Card.Body>
                            </Card>
                    ))
                }
                </Col>
            </Row>
        </section>
        <section className="testimonial pt-5" style={{ background: "#f4c241" }}>
            <h3 className="text-center mt-4 markazi-text-l pb-5">
                Testimontials
            </h3>
            <Row className="justify-content-md-center mt-4 pb-5">
                <Col md={8} className="d-flex flex-wrap justify-content-center pb-5">
                {
                    testimonialsCards.map(i => (
                            <Card className="px-0 pt-2 mx-2 mt-2" style={{ width: '12rem'}}>
                            <Card.Body style={{height: "12rem"}}>
                                <Row>
                                    <Col>
                                    {Array.from(Array(i.star).keys()).map(_ => <img src={starImage} className="img-fluid d-inline-block mb-2" alt="star" style={{ width: '1rem', height: "auto"}}/>)}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src={i.image} class="img-fluid rounded d-inline-block" alt={i.alt} style={{ width: '5rem', height: "auto"}}/>
                                    </Col>
                                    <Col>
                                        {i.name}
                                    </Col>
                                </Row>
                                <Card.Link href="#" className="pt-2" style={{textDecoration: "none", color: "black"}}>Review page</Card.Link>
                            </Card.Body>
                            </Card>
                    ))
                }
                </Col>
            </Row>
        </section>
        <section className="about pt-4">
            <Row className="justify-content-md-center gx-1">
                <Col md={4} classNmae="align-items-start flex-column">
                    <h1 className="mb-1 markazi-text-h pt-5">Little Lemon</h1>
                    <p><small className="fs-lg">Hong Kong</small></p>
                    <p className="fs-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                <Col md={4}>
                    <img src={chefImage} class="img-fluid pt-5" alt="Chef"/>
                </Col>
            </Row>
        </section>
        </main>
        <footer className="container footer px-4">
            <Row className="justify-content-center gx-1">
                <Col md={2}><img src={logoImage} class="img-fluid" alt="Little lemon logo" style={{ width: "7rem" }}/></Col>
                <Col md={2} className="pt-1-md">
                    <h6>Doormat<br/>Navigation</h6>
                    <Link href="#" label="Home"/>
                    <Link href="#" label="About"/>
                    <Link href="#" label="menu"/>
                    <Link href="#" label="Reservations"/>
                    <Link href="#" label="Order Online"/>
                    <Link href="#" label="Login"/>
                </Col>
                <Col md={2}>
                    <h6>Contact</h6>
                    <Link href="#" label="Addres"/>
                    <Link href="#" label="phone number"/>
                    <Link href="#" label="email"/>
                </Col>
                <Col md={2}>
                    <h6>Social media link</h6>
                    <Link href="#" label="Facebook"/>
                    <Link href="#" label="Instagram"/>
                </Col>
            </Row>
        </footer>
        </>
    )
};

export default Main;