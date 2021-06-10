import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./styles.module.css";
import classnames from "classnames";
import linkedIn from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
const members = require("../../memberDetails.json");

const MemberPresentation = () => {
    const cardStyles = classnames(styles.card, 'my-2 mb-4 border-top')
    return (
        <Container>
            <h1 className="text-center mb-4 pb-4">Medlemmene:</h1>
            <Row className="mt-4">
                {members.map(member => (
                    <Col lg={{ span: 4, offset: 2 }} md={6} key={member.name}>
                        <Card className={cardStyles}>
                            <Card.Img variant="top" src={member.imgUrl} />
                            <Card.Body>
                                <Card.Header className={styles.headerTitle}>{member.name}</Card.Header>
                                <Card.Text className="mt-2">{member.description}</Card.Text>
                                <div className="text-center">
                                    <Card.Link href={member.linkedInUrl}><img alt="Link to members LinkedIn profile" src={linkedIn} /></Card.Link>
                                    <Card.Link href={member.githubUrl}><img alt="Link to members GitHub profile" src={github} /></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}

export default MemberPresentation;