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
import faker from 'faker';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);        
    };

    render() {
        return (            
            <div>
                <Card>
                    <CardImg top width="100%" src={faker.image.people()} alt="management" />
                    <CardBody>
                        <CardTitle>Zarząd</CardTitle>
                        <CardSubtitle>Monneo S.A.</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                    
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AboutUs;