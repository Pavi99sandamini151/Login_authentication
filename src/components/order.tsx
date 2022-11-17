import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import Sidenav from "./common/sidenav";
import Header from "./common/header";
import photo from "../assets/home.png";
import Footer from "./common/footer";

const Order = () => {
    return(
        <Container>
            <Row className='m-0 justify-content-end'>
                <Header/>
            </Row>
            <Row className='m-0'>
                <Col className='p-0'>
                    <Sidenav/>
                </Col>
                <Col className='p-0 mt-4'>
                    <h1>Order page</h1>
                    <Image src={photo} width='100%' fluid/>
                </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    );
};

export default Order;