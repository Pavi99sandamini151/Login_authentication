import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return(
        <Container className="p-0 m-0 bg-black">
            <Row>
                <Col>
                    <Row>
                        <h3>About Us</h3>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Aim</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Vision</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Testimonials</a>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3>Services</h3>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Writing</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Internships</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Coding</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Teaching</a>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3>Contact Us</h3>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Writing</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Internships</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Coding</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Teaching</a>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3>Social Media</h3>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Facebook</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Instagram</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Twitter</a>
                    </Row>
                    <Row>
                        <a href="#" style={{textDecoration:'none',color:'#fff'}}>Youtube</a>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;