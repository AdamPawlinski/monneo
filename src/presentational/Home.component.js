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
    CardTitle, 
    CardSubtitle,
    Jumbotron,
    Button,
    Form    
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
        this.state = { activeIndex: 0 };
        // this.next = this.next.bind(this);
        // this.previous = this.previous.bind(this);
        // this.goToIndex = this.goToIndex.bind(this);
        // this.onExiting = this.onExiting.bind(this);
        // this.onExited = this.onExited.bind(this);        
    };

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
                <Jumbotron className="jumbotron">
                    <Row>
                        <Col className="jumbotron-left-container" lg={{size:5, offset:1}}> 
                            <p>Jeśli potrzebujesz pieniędzy </p>
                            <h1>Monneo</h1>
                            <div>
                                <div>
                                    0%
                                    <i></i>
                                    <span></span>
                                </div>
                                <div>                                                                 
                                    <span>do</span>
                                    3000
                                    <i>PLN</i>
                                </div>
                                <div>
                                    bez                                
                                    <span>zbędnych formalności</span>
                                </div>
                            </div>                            
                        </Col>
                        <Col className="jumbotron-right-container">
                            <div>
                                <Form>
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
                <Row className="second-container">
                    <Col className="second-container-left justify-content-start align-items-center" lg="6">
                        <div>
                            <span>___</span>
                            <h3>Lorem ipsum dolor sit amet consectetur</h3>
                        </div>                                              
                    </Col>                     
                    <Col className="second-container-right justify-content-center align-items-center" lg="6">  
                        <div className="text-left">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor.
                            </p>
                        </div>              
                    </Col>   
                </Row>                
                <Container fluid className="third-container align-content-center">
                    <Row>
                        <Col className="justify-content-center text-center" lg={{size: 4, offset: 4}}>
                            <h4 className="h4">Twój kredyt</h4>
                            <h3 className="h3">W 3 prostych krokach</h3>
                        </Col>
                    </Row>
                    <Row className="">                    
                        <Col className="" lg="4">
                            <Card>
                                <CardImg className="third-container-card-image" top width="100%" src={application} alt="wniosek" />
                                <CardBody>
                                    <CardTitle className="third-container-card-title">Złóż wniosek</CardTitle>
                                    <CardSubtitle>Monneo S.A.</CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                      
                                </CardBody>
                            </Card>                                          
                        </Col>
                        <Col className="" lg="4">  
                            <Card>
                                <CardImg className="third-container-card-image" top width="100%" src={verification} alt="weryfikacja" />
                                <CardBody>
                                    <CardTitle className="third-container-card-title">Zweryfikuj swoją tożsamość</CardTitle>
                                    <CardSubtitle>Monneo S.A.</CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                    
                                </CardBody>
                            </Card>                   
                        </Col> 
                        <Col className="" lg="4">  
                            <Card>
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
                <Row className="fourth-container">
                    <Col className="fourth-container-left align-content-center" lg="6">
                        <div  className="">                            
                            <h3 className="h3 text-right">Szybkie i łatwe &nbsp; pożyczki online</h3>
                            <p className="text-right">
                                W Monneo szybko zrozumieliśmy, że nasi klienci zasługują na całe nasze zaufanie, dlatego skupiamy się na prostocie i przejrzystości jako dwóch naszych podstawowych cechach. W Monneo nie ma czasu oczekiwania, nie ma drobnego druku. Szybki, przejrzysty i w 100% bezpieczny proces. Nasze szybkie kredyty charakteryzują się, oprócz zwinności w ich przetwarzaniu, prostotą w momencie składania wniosku.
                            </p>
                        </div>                                              
                    </Col>                     
                    <Col className="fourth-container-right justify-content-center align-items-center" lg="6">  
                        <div>                            
                        </div>              
                    </Col>   
                </Row>                
            </Container>
        )
    }    
}

export default Home;