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
import faker from 'faker';
class Contact extends React.Component {
    constructor(props) {
        super(props);        
    };

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardImg top width="100%" src={faker.image.people()} alt="management" />
                    <CardBody>
                        <CardTitle>Jeśli chcesz sie z nami skontaktować</CardTitle>
                        <CardSubtitle>napisz lub zadzwoń</CardSubtitle>
                        <CardText>  
                            tel. 123 123 123
                            email:biuro@monneo.pl
                            adres: 
                            ul. ..........
                            Wrocław
                        </CardText>                    
                    </CardBody>
                </Card>
                <Form>
                    <Row>
                        <Col lg={{size:4, offset:2}}>
                            <FormGroup>
                                <Label for="exampleText">Imie</Label>
                                <Input type="text" name="name" id="exampleText" placeholder="imie"/>
                            </FormGroup>
                        </Col>
                        <Col lg="4">
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
                        <Col lg={{size:8, offset:2}}>
                            <FormGroup>
                                <Label for="exampleText">Wiadomość</Label>
                                <Input type="textarea" name="message" id="exampleText" placeholder="wiadomość"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row> 
                        <Col lg={{size:8, offset:2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    *Zgadzam się na przetwarzanie moich danych osobowych przez Monneo S.A. z siedzibą we Wrocławiu (...) przy ul. ..., jako administratora danych osobowych, w celu i zakresie niezbędnym do przygotowania i przekazania odpowiedzi na moją wiadomość, przesłaną do administratora za pomocą powyższego formularza kontaktowego.
                                </Label>
                            </FormGroup>                        
                        </Col>
                    </Row>
                    <Row> 
                        <Col lg={{size:8, offset:2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Zgadzam się na przetwarzanie moich danych osobowych przez  Monneo S.A. z siedzibą we Wrocławiu (...) przy ul. ..., jako administratora danych osobowych, w celach marketingowych, zgodnie z obowiązującymi przepisami prawa. Zostałem poinformowany o tym, że podanie ww. danych jest dobrowolne oraz że mam prawo do dostępu do swoich danych, ich poprawiania, a także wycofania udzielonej zgody w dowolnym momencie.
                                </Label>
                            </FormGroup>                        
                        </Col>
                    </Row>
                    <Row> 
                        <Col lg={{size:8, offset:2}}>
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