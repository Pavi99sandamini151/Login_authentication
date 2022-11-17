import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import photo from "../../assets/food.png";

const Header = () => {
    return(
        <Container className="m-0 p-0 border border-1 border-success">
            <Row className="m-0">
                <Col className="p-0 border border-1 border-primary">
                    A
                </Col>
                <Col xs={5} className="p-0 border border-1 border-success" style={{float:'right'}}>
                    <Image src={photo} width="15%"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;