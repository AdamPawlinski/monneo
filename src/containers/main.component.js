import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from '../presentational/Navigation.component'
import Footer from '../presentational/Footer.component';
import Home from '../presentational/Home.component';
import QandA from '../presentational/QandA.component';
import AboutUs from '../presentational/AboutUs.component';
import Career from '../presentational/Career.component';
import Loan from '../presentational/Loan.component';
import Contact from '../presentational/Contact.component';
import Policy from '../presentational/Policy.component';
import Cookies from '../presentational/Cookies.component';
import NotFound from '../presentational/NotFound.component';

import {    
    Container, 
    Col,
    Row,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button
} from 'reactstrap';
import '../style/Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cookiesShow: true  
        }     
    };

    cookiesShowHandler = () => {        
        this.setState({
            cookiesShow: false
        })
    }
    
    render() {        
        return (
            <React.Fragment> 
                <Container fluid>                
                    <Navigation/>
                </Container>
                <Container className="content" fluid>                
                    <Row>
                        <Col className="content-container">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/QandA" component={QandA}/>
                                <Route exact path="/AboutUs" component={AboutUs}/>
                                <Route exact path="/Career" component={Career}/>
                                <Route exact path="/Loan" component={Loan}/>
                                <Route exact path="/Contact" component={Contact}/>
                                <Route exact path="/Policy" component={Policy}/>
                                <Route exact path="/Cookies" component={Cookies}/>
                                <Route path="*" component={NotFound}/>                                     
                            </Switch>
                            <Modal isOpen={this.state.cookiesShow} toggle={this.cookiesShowHandler} className={this.props.className} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                                <ModalHeader toggle={this.cookiesShowHandler}>Cookies</ModalHeader>
                                <ModalBody>
                                    Uprzejmie informujemy, że w ramach naszej witryny używamy plików cookies w celu świadczenia usług na najwyższym poziomie oraz w sposób dostosowany do Twoich indywidualnych preferencji. Korzystanie z witryny bez zmiany ustawień oznacza, że akceptujesz otrzymywanie plików cookies. Zmiany ustawień dla plików cookies możesz dokonać w każdym momencie użytkowania serwisu.
                                </ModalBody>
                                <ModalFooter>                        
                                    <Button color="secondary" onClick={this.cookiesShowHandler}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>                    
                    <Row>
                        <Col xl="12" sm="12" id="footer-container">
                            <Footer/>
                        </Col>
                    </Row>
                </Container>                
            </React.Fragment>            
        )
    }
}

export default Main;