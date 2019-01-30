import React from 'react';
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
    Button
} from 'reactstrap';
import faker from 'faker';
import HomeStyles from '../style/HomeStyles.css';
// import items from './imageCarousel.json';

const items = [
    {
      id: 1,
      src: faker.image.people(),
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      id: 2,
      src: faker.image.people(),
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      id: 3,
      src: faker.image.people(),
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);        
    };

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }    

    render() {
        const { activeIndex } = this.state;  
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Container fluid>
                <Row>
                    <Col lg="12">                      
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Card>
                            <CardImg top width="100%" src={faker.image.people()} alt="management" />
                            <CardBody>
                                <CardTitle>Zarząd</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                      
                            </CardBody>
                        </Card>                                          
                    </Col>
                    <Col lg="4">  
                        <Card>
                            <CardImg top width="100%" src={faker.image.people()} alt="management" />
                            <CardBody>
                                <CardTitle>Zarząd</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                    
                            </CardBody>
                        </Card>                   
                    </Col> 
                    <Col lg="4">  
                        <Card>
                            <CardImg top width="100%" src={faker.image.people()} alt="management" />
                            <CardBody>
                                <CardTitle>Zarząd</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                       
                            </CardBody>
                        </Card>                   
                    </Col>   
                </Row>
                <Row>
                    <Col lg="12">
                        <Jumbotron fluid>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p className="lead">
                            <Button color="primary">Learn More</Button>
                            </p>
                        </Jumbotron>                   
                    </Col>   
                </Row>
                <Row>
                    <Col lg="4">
                        <Card>
                            <CardImg top width="100%" src={faker.image.people()} alt="management" />
                            <CardBody>
                                <CardTitle>Zarząd</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                      
                            </CardBody>
                        </Card>                                          
                    </Col>
                    <Col lg="4">  
                        <Card>
                            <CardImg top width="100%" src={faker.image.people()} alt="management" />
                            <CardBody>
                                <CardTitle>Zarząd</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                    
                            </CardBody>
                        </Card>                   
                    </Col> 
                    <Col lg="4">  
                        <Card>
                            <CardImg top width="100%" src={faker.image.people()} alt="management" />
                            <CardBody>
                                <CardTitle>Zarząd</CardTitle>
                                <CardSubtitle>Monneo S.A.</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam Lorem ipsum dolor</CardText>                                       
                            </CardBody>
                        </Card>                   
                    </Col>   
                </Row>
            </Container>
        )
    }    
}

export default Home;