import React from 'react';
import {NavLink} from 'react-router-dom';
import {    
    Container, 
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardDeck,
    CardTitle, 
    CardSubtitle,
    Jumbotron,
    Button,
    Form,
    FormGroup   
} from 'reactstrap';
import faker from 'faker';
import '../style/Home.css';
import shakingHands from '../resources/shaking-hands.png';
import money from '../resources/money.png';
import mobilePhones from '../resources/mobile-phones.png';
import application from '../resources/application.png';
import verification from '../resources/verification.png';
import moneyPay from '../resources/money-payment.png';
import { ReactComponent as Arrow } from '../resources/angle-down-solid.svg';

// const items = [
//     {
//       id: 1,
//       src: '../resources/shaking-hands.png',
//       altText: 'Monneo - Weź pożyczke i ciesz sie życiem',
//       caption: 'Weź pożyczke i ciesz sie życiem'
//     },
//     {
//       id: 2,
//       src: '../resources/money.png',
//       altText: 'Slide 2',
//       caption: 'Slide 2'
//     },
//     {
//       id: 3,
//       src: '../resources/mobile-phones.png',
//       altText: 'Slide 3',
//       caption: 'Slide 3'
//     }
// ];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            moneyValue: 1500,
            timeValue: 12
            // activeIndex: 0             
        };
        // this.next = this.next.bind(this);
        // this.previous = this.previous.bind(this);
        // this.goToIndex = this.goToIndex.bind(this);
        // this.onExiting = this.onExiting.bind(this);
        // this.onExited = this.onExited.bind(this);        
    };

    moneyValueHandler(e) {
        this.setState({
            moneyValue: e.target.value
        });
    }

    timeValueHandler(e) {
        this.setState({
            timeValue: e.target.value
        });
    }

    // onExiting() {
    //     this.animating = true;
    // }

    // onExited() {
    //     this.animating = false;
    // }

    // next() {
    //     if (this.animating) return;
    //     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    //     this.setState({ activeIndex: nextIndex });
    // }

    // previous() {
    //     if (this.animating) return;
    //     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    //     this.setState({ activeIndex: nextIndex });
    // }

    // goToIndex(newIndex) {
    //     if (this.animating) return;
    //     this.setState({ activeIndex: newIndex });
    // }    

    render() {
        // const { activeIndex } = this.state;  
        // const slides = items.map((item) => {
        //     return (
        //         <CarouselItem
        //             onExiting={this.onExiting}
        //             onExited={this.onExited}
        //             key={item.id}
        //         >
        //         <img src={shakingHands} alt={item.altText} />
        //         <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        //         </CarouselItem>
        //     );
        // });

        return (            
            <Container fluid>
                <Jumbotron className="jumbotron align-items-center w-100">
                    <Row>
                        <Col className="jumbotron-left-container" lg={{size:5, offset:1}}> 
                            <Card className="jumbotron-card-container border-0 px-2">
                                <CardBody> 
                                    <CardSubtitle className="jumbotron-header-subtitle text-left">
                                        Jeśli potrzebujesz pieniędzy... 
                                    </CardSubtitle>  
                                    <CardTitle className="jumbotron-header-title text-left"> 
                                        Monneo
                                    </CardTitle>
                                    <CardDeck className="jumbotron-card-deck">
                                        <Card className="jumbotron-card bg-transparent border-0 mx-1 py-4">
                                            <CardTitle className="jumbotron-card jumbotron-card-title">0%</CardTitle>                                            
                                            <CardSubtitle className="jumbotron-card-subtitle">odsetek</CardSubtitle>
                                        </Card>
                                        <Card className="jumbotron-card bg-transparent border-0 mx-1 py-4">                                                                 
                                            <CardSubtitle className="jumbotron-card-subtitle">do</CardSubtitle>
                                            <CardTitle className="jumbotron-card-title">3000 PLN</CardTitle>
                                        </Card>
                                        <Card className="jumbotron-card bg-transparent border-0 mx-1 py-4">
                                            <CardTitle className="jumbotron-card-title">bez</CardTitle>                             
                                            <CardSubtitle className="jumbotron-card-subtitle">zbędnych formalności</CardSubtitle>
                                        </Card>
                                    </CardDeck>                                
                                </CardBody>
                            </Card>                           
                        </Col>
                        <Col className="jumbotron-right-container">
                            <div>
                                <Form className="jumbotron-form-money align-items-center" action="" method="POST">
                                    <FormGroup className="justify-content-between align-items-center py-3" row> 
                                        <label htmlFor="money">Ile chcesz pożyczyć?</label> 
                                        <h3 className="d-inline-block">{this.state.moneyValue} PLN</h3>
                                        <input className="form-control-range form-range-slider" value={this.state.moneyValue} onChange={e => this.moneyValueHandler(e)} type="range" name="" min="100" max="1500" step="50" id="money"/>
                                    </FormGroup>
                                    <FormGroup className="justify-content-between align-items-center py-3" row> 
                                        <label htmlFor="time">Na jak długo?</label> 
                                        <h3 className="d-inline-block">{this.state.timeValue} miesięcy</h3>
                                        <input className="form-control-range form-range-slider" value={this.state.timeValue} onChange={e => this.timeValueHandler(e)} type="range" name="" min="1" max="12" step="1" id="time"/>
                                    </FormGroup>
                                    <input className="py-2 px-3" type="submit"/>
                                </Form>
                            </div>
                        </Col>
                        <div className="arrow-container">
                            <div className="arrow-background">
                                <Arrow className="arrow"/>
                            </div>                            
                        </div>
                    </Row>
                    

                    {/* <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        pause={'hover'}
                        interval={6000}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel> */}
                </Jumbotron>
                <Row className="second-container w-100">
                    <Col className="second-container-left align-items-center" lg="6">
                        <div className="second-container-left-content text-left px-5">
                            <span>___</span>
                            <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        </div>                                              
                    </Col>                     
                    <Col className="second-container-right" lg="6">  
                        <div className="second-container-right-content text-left px-5">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor.
                            </p>
                        </div>              
                    </Col>   
                </Row>                
                <Container fluid className="third-container w-100">
                    <Row className="third-container-header">
                        <Col className="justify-content-center text-center" lg={{size: 4, offset: 4}}>
                            <h4 className="h4">Twój kredyt</h4>
                            <h3 className="h3">W 3 prostych krokach</h3>
                        </Col>
                    </Row>
                    <Row className="third-container-cards">                    
                        <Col lg="4">
                            <Card className="third-container-card">
                                <CardImg className="third-container-card-image" top src={application} alt="wniosek" />
                                <CardBody>
                                    <CardTitle className="third-container-card-title">Złóż wniosek</CardTitle>
                                    <CardSubtitle>Monneo S.A.</CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                      
                                </CardBody>
                            </Card>                                          
                        </Col>
                        <Col lg="4">  
                            <Card className="third-container-card">
                                <CardImg className="third-container-card-image" top width="100%" src={verification} alt="weryfikacja" />
                                <CardBody>
                                    <CardTitle className="third-container-card-title">Zweryfikuj swoją tożsamość</CardTitle>
                                    <CardSubtitle>Monneo S.A.</CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                    
                                </CardBody>
                            </Card>                   
                        </Col> 
                        <Col lg="4">  
                            <Card className="third-container-card">
                                <CardImg className="third-container-card-image" top width="100%" src={moneyPay} alt="wypłata pieniędzy" />
                                <CardBody>
                                    <CardTitle className="third-container-card-title">Uzyskaj pożyczkę</CardTitle>
                                    <CardSubtitle>Monneo S.A.</CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                       
                                </CardBody>
                            </Card>                   
                        </Col>   
                    </Row>
                </Container>
                <Row className="fourth-container w-100">
                    <Col className="fourth-container-left" lg="6">
                        <div  className="fourth-container-left-content">                            
                            <h3 className="h3 text-right">Szybkie i łatwe pożyczki online</h3>
                            <p className="text-right">
                                W Monneo szybko zrozumieliśmy, że nasi klienci zasługują na całe nasze zaufanie, dlatego skupiamy się na prostocie i przejrzystości jako dwóch naszych podstawowych cechach. W Monneo nie ma czasu oczekiwania, nie ma drobnego druku. Szybki, przejrzysty i w 100% bezpieczny proces. Nasze szybkie kredyty charakteryzują się, oprócz zwinności w ich przetwarzaniu, prostotą w momencie składania wniosku.
                            </p>
                        </div>                                              
                    </Col>                     
                    <Col className="fourth-container-right justify-content-center align-items-center">  
                        <div>                            
                        </div>              
                    </Col>   
                </Row>                
            </Container>
        )
    }    
}

export default Home;