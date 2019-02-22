import React from 'react';
import {    
    Container, 
    Col,
    Row,
    Card, 
    CardImg,  
    CardBody,
    CardTitle, 
    CardText,
    CardSubtitle,
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from 'reactstrap';
import faker from 'faker';
import "../style/Contact.css";
import management from "../resources/management.png";
import { Manager } from 'react-popper';
class Contact extends React.Component {
    constructor(props) {
        super(props);        
    };

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col lg={{size:8, offset:2}}> 
                        <Card>
                            <CardImg top src={management} alt="management" />
                            <CardBody className="card">
                                <CardTitle>Jeśli chcesz sie z nami skontaktować</CardTitle>
                                <CardSubtitle>napisz lub zadzwoń</CardSubtitle>
                                <CardText className="contact-card-text">
                                    <span>tel. 123 123 123</span>
                                    <span>email:biuro@monneo.pl</span>
                                    <span>adres: </span>
                                    <span>ul. ..........</span>
                                    <span>Wrocław</span>                                     
                                </CardText>                   
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col lg={{size:3, offset:3}}>
                            <FormGroup>
                                <Label for="exampleText">Imie</Label>
                                <Input type="text" name="name" id="exampleText" placeholder="imie"/>
                            </FormGroup>
                        </Col>
                        <Col lg="3">
                            <FormGroup>
                                <Label for="exampleText">Nazwisko</Label>
                                <Input type="text" name="surname" id="exampleText" placeholder="nazwisko"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size:6, offset:3}}>
                            <FormGroup>
                                <Label for="exampleEmail">Adres email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row> 
                        <Col lg={{size:6, offset:3}}>
                            <FormGroup>
                                <Label for="exampleText">Wiadomość</Label>
                                <Input type="textarea" name="message" id="exampleText" placeholder="wiadomość"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row> 
                        <Col className="contact-form-clause" lg={{size:6, offset:3}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    *Zgadzam się na przetwarzanie moich danych osobowych przez Monneo S.A. z siedzibą we Wrocławiu (...) przy ul. ..., jako administratora danych osobowych, w celu i zakresie niezbędnym do przygotowania i przekazania odpowiedzi na moją wiadomość, przesłaną do administratora za pomocą powyższego formularza kontaktowego.
                                </Label>
                            </FormGroup>                        
                        </Col>
                    </Row>
                    <Row> 
                        <Col className="contact-form-clause" lg={{size:6, offset:3}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Zgadzam się na przetwarzanie moich danych osobowych przez  Monneo S.A. z siedzibą we Wrocławiu (...) przy ul. ..., jako administratora danych osobowych, w celach marketingowych, zgodnie z obowiązującymi przepisami prawa. Zostałem poinformowany o tym, że podanie ww. danych jest dobrowolne oraz że mam prawo do dostępu do swoich danych, ich poprawiania, a także wycofania udzielonej zgody w dowolnym momencie.
                                </Label>
                            </FormGroup>                        
                        </Col>
                    </Row>
                    <Row> 
                        <Col className="contact-form-clause" lg={{size:6, offset:3}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    TAK, chcę być informowany e-mailowo o ofertach docFlow S.A. Zgadzam się na przetwarzanie moich danych osobowych oraz otrzymywanie informacji handlowych wysyłanych przez docFlow S.A. z siedzibą we Wrocławiu.
                                </Label>
                            </FormGroup>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size:2, offset:5}}>
                            <Button>Wyślij</Button>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        )
    }
}

export default Contact;