import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import classnames from "classnames";

const NavigationBar = () => {
    const navstyles = classnames(styles.bgPrimary, 'sticky-top')

    return (
        <Navbar className={navstyles} variant="dark">
            <Container>
                <Navbar.Brand className="mx-auto "><h3>Brukerfeil</h3></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;