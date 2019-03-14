import React from 'react';
import {    
    Container, 
    Col,
    Row,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
} from 'reactstrap';
import '../style/AboutUs.css';
import manager from '../resources/CEO.jpg';
import managerSnd from '../resources/businessman.jpg';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);        
    };

    render() {
        return (            
            <Container fluid>
                <Row>
                    <Col lg={{size: 10, offset: 1}} className="justify-content-center">
                        <Card className="p-4">
                            <div className="aboutUs-card row no-gutters">
                                <Col lg="4"> 
                                    <CardImg top height="auto" width="80%" className="img-fluid" src={manager} alt="management" />
                                </Col>
                                <Col lg="8">
                                    <CardBody>
                                        <CardTitle className="text-uppercase font-weight-bold">Prezes</CardTitle>
                                        <CardSubtitle>Monneo S.A.</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                    
                                    </CardBody>
                                </Col>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{size: 10, offset: 1}} className="justify-content-center">
                        <Card className="p-4">
                            <div className="aboutUs-card row no-gutters">
                                <Col lg="4"> 
                                    <CardImg top height="auto" width="80%" className="img-fluid" src={managerSnd} alt="management" />
                                </Col>
                                <Col lg="8">
                                    <CardBody>
                                        <CardTitle className="text-uppercase font-weight-bold">Dyrektor Zarządzający</CardTitle>
                                        <CardSubtitle>Monneo S.A.</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                    
                                    </CardBody>
                                </Col>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutUs;