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
import "../style/Contact.css";
import contact from "../resources/hand-of-a-businessman-signing.jpg";
import { Manager } from 'react-popper';
class Contact extends React.Component {
    constructor(props) {
        super(props);        
    };

    render() {
        return (
                <Row className="my-5">
                    <Col lg={{size:5, offset:1}}>              
                        <Form className="contact-form py-4" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSf8NGYcJwh57ZmVetgwCyLDeq3AGvAkL5mAXU6qGs24A_h0Dw/formResponse">
                            <Row>
                                <Col lg={{size:5, offset:1}}>
                                    <FormGroup>
                                        <Label htmlFor="exampleText">Imie</Label>
                                        <Input type="text" name="entry.145934358" id="exampleText" placeholder="imie"/>
                                    </FormGroup>
                                </Col>
                                <Col lg="5">
                                    <FormGroup>
                                        <Label htmlFor="exampleText">Nazwisko</Label>
                                        <Input type="text" name="entry.1122270318" id="exampleText" placeholder="nazwisko"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{size: 10, offset: 1}}>
                                    <FormGroup>
                                        <Label htmlFor="exampleEmail">Adres email</Label>
                                        <Input type="email" name="emailAddress" id="exampleEmail" placeholder="email@email.com" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="h-25"> 
                                <Col lg={{size: 10, offset: 1}}>
                                    <FormGroup>
                                        <Label htmlFor="exampleText">Wiadomość</Label>
                                        <Input type="textarea" name="entry.502403880" id="exampleText" placeholder="wiadomość"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row> 
                                <Col className="contact-form-clause text-left py-1" lg={{size:10, offset:1}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="entry.25648973"/>{' '}
                                            *Zgadzam się na przetwarzanie moich danych osobowych przez Monneo S.A. z siedzibą we Wrocławiu (...) przy ul. ..., jako administratora danych osobowych, w celu i zakresie niezbędnym do przygotowania i przekazania odpowiedzi na moją wiadomość, przesłaną do administratora za pomocą powyższego formularza kontaktowego.
                                        </Label>
                                    </FormGroup>                        
                                </Col>
                            </Row>
                            <Row> 
                                <Col className="contact-form-clause text-left py-1" lg={{size:10, offset:1}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="entry.1578856692"/>{' '}
                                            Zgadzam się na przetwarzanie moich danych osobowych przez  Monneo S.A. z siedzibą we Wrocławiu (...) przy ul. ..., jako administratora danych osobowych, w celach marketingowych, zgodnie z obowiązującymi przepisami prawa. Zostałem poinformowany o tym, że podanie ww. danych jest dobrowolne oraz że mam prawo do dostępu do swoich danych, ich poprawiania, a także wycofania udzielonej zgody w dowolnym momencie.
                                        </Label>
                                    </FormGroup>                        
                                </Col>
                            </Row>
                            <Row> 
                                <Col className="contact-form-clause text-left py-1" lg={{size:10, offset:1}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="entry.1858192379"/>{' '}
                                            TAK, chcę być informowany e-mailowo o ofertach docFlow S.A. Zgadzam się na przetwarzanie moich danych osobowych oraz otrzymywanie informacji handlowych wysyłanych przez docFlow S.A. z siedzibą we Wrocławiu.
                                        </Label>
                                    </FormGroup>                        
                                </Col>
                            </Row>
                            <Row className="py-2">
                                <Col lg={{size:4, offset:4}}>
                                    <Button>Wyślij</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>  
                    <Col lg="5"> 
                        <Card className="contact-card">
                            <CardImg top src={contact} alt="management" />
                            <CardBody className="contact-card-content py-5">
                                <CardTitle>Jeśli chcesz sie z nami skontaktować</CardTitle>
                                <CardSubtitle>napisz lub zadzwoń</CardSubtitle>
                                <CardText className="contact-card-text text-center py-5">
                                    <span>tel. 123 123 123</span>
                                    <span>email: biuro@monneo.pl</span>
                                    <span>adres: </span>
                                    <span>ul. ..........</span>
                                    <span>Wrocław</span>                                     
                                </CardText>                   
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
        )
    }
}

export default Contact;