import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const members = require("../../memberDetails.json");

const MemberPresentation = () => {
    return (
        <Container>
            <Row className="mt-4">
                {members.map(member => (
                    <Col lg={6} md={6} key={member.name}>
                        <Card className="my-2 mb-4">
                            <Card.Img variant="top" src={member.imgUrl} />
                            <Card.Body>
                                <Card.Header>{member.name}</Card.Header>
                                <Card.Text>{member.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}

export default MemberPresentation;