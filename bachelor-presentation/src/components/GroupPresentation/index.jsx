import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import styles from "./styles.module.css";
import classnames from "classnames";

const GroupPresentation = () => {
    const jumboStyles = classnames(styles.jumbo, 'text-light');

    return (
        <div>
            <Jumbotron className={jumboStyles}>
                <Container>
                    <h1>Brukerfeil</h1>
                    <p className={styles.paragraph}>Vi er en gjeng på seks kamerater som jobber sammen i gruppe. Gruppen er en sammensveiset gjeng som er glad i teknologi og utvikling.
                        Medlemmene har blandet bakgrunner og erfaringer, men sammen utfyller vi hverandre. Vi har erfaringer ved utviklingsprosjekter med både planlegging- og design,
                    og selve utviklingen. </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default GroupPresentation
