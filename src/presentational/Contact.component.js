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
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from 'reactstrap';



class Contact extends React.Component {
    constructor(props) {
        super(props);        
    };

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardImg top width="100%" src="../resources/management.png" alt="management" />
                    <CardBody>
                        <CardTitle>Monneo S.A</CardTitle>
                        <CardSubtitle>Monneo S.A.</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                    
                    </CardBody>
                </Card>
                <Form>
                    <Row>
                        <Col lg={{size:5, offset:1}}>
                            <FormGroup>
                                <Label for="exampleText">Imie</Label>
                                <Input type="text" name="name" id="exampleText" />
                            </FormGroup>
                        </Col>
                        <Col lg="5">
                            <FormGroup>
                                <Label for="exampleText">Nazwisko</Label>
                                <Input type="text" name="surname" id="exampleText" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleEmail">Adres email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Wiadomość</Label>
                        <Input type="textarea" name="message" id="exampleText" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Klauzula marketingowa
                        </Label>
                    </FormGroup>
                    <Button>Wyślij</Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default Contact;