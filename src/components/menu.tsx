import React, {useEffect, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
// @ts-ignore
import {Link, useLocation } from "react-router-dom";
import Sidenav from "./common/sidenav";
import Header from "./common/header";
import photo from "../assets/home.png";
import Footer from "./common/footer";

const Menu = () => {
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
                    <h1>menu page</h1>
                    <Image src={photo} width='100%' fluid/>
                </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    );
};

export default Menu;