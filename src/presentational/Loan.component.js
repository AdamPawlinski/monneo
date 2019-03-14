import React from 'react';
import ReactStrap, {
    Collapse,     
    Container, 
    Col,
    Row,
    Card,
    CardColumns,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
    } from 'reactstrap';
    import application from '../resources/application.png';
    import verification from '../resources/verification.png';
    import moneyPay from '../resources/money-payment.png';    

    import "../style/Loan.css";

    const Loan = () => {
        return (
            <Container fluid className="loan-container">
                    <Row className="loan-container-header">
                        <Col className="justify-content-center text-center" lg={{size: 4, offset: 4}}>
                            <h4 className="h4">Twój kredyt</h4>
                            <h3 className="h3">W 3 prostych krokach</h3>
                        </Col>
                    </Row>
                    <CardColumns>
                        <Card className="loan-container-card">
                            <CardImg className="loan-container-card-image" top src={application} alt="wniosek" />
                            <CardBody>
                                <CardTitle className="loan-container-card-title">Złóż wniosek</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                      
                            </CardBody>
                        </Card>                                          
                        <Card className="loan-container-card">
                            <CardImg className="loan-container-card-image" top width="100%" src={verification} alt="weryfikacja" />
                            <CardBody>
                                <CardTitle className="loan-container-card-title">Zweryfikuj swoją tożsamość</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                    
                            </CardBody>
                        </Card>                   
                        <Card className="loan-container-card">
                            <CardImg className="loan-container-card-image" top width="100%" src={moneyPay} alt="wypłata pieniędzy" />
                            <CardBody>
                                <CardTitle className="loan-container-card-title">Uzyskaj pożyczkę</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                       
                            </CardBody>
                        </Card>
                    </CardColumns>
                        <Card className="loan-container-card loan-documents-card mb-5">
                            <CardImg className="loan-container-card-image" top src={application} alt="wniosek" />
                            <CardBody>
                                <CardTitle className="loan-container-card-title">Ważne dokumenty i inormacje</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Zapoznaj się z poniższymi dokumentami:</CardText>                                
                            </CardBody>  
                            <ul className="list-group list-group-flush text-algin-left">
                                <li class="list-group-item"><a href="#" className="card-link">Umowa</a></li>
                                <li class="list-group-item"><a href="#" className="card-link">Regulamin</a></li>
                                <li class="list-group-item"><a href="#" className="card-link">Klauzule ochrony danych osobowych</a></li>
                            </ul>                          
                        </Card>
                </Container>
        )
    }

    export default Loan;