import React from 'react';
import {    
    Container, 
    Col,
    Row,    
    Button
    } from 'reactstrap';

const NotFound = () => {
    return (
        <Container fluid>
            <Col lg={{size:4, offset:4}}>
                <Row>
                    Nie znaleziono strony
                </Row>
                <Row>
                    <Button outline color="secondary" size="lg">
                        Przejdź do strony głównej 
                    </Button>
                </Row>
            </Col>            
        </Container>
    )
}

export default NotFound;