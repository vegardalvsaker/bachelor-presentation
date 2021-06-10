import React from 'react'
import Container from "react-bootstrap/Container";
import pic from "./group_working.jpg";

const GroupPicture = () => {
    return (
        <Container>
            <div style={{ width: "50%", overflow: "hidden" }}>
                <img src={pic} alt="Brukerfeil working" />
            </div>
        </Container>
    )
}

export default GroupPicture
