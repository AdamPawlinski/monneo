import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from '../presentational/Navigation.component'
import Footer from '../presentational/Footer.component';
import Home from '../presentational/Home.component';
import QandA from '../presentational/QandA.component';
import AboutUs from '../presentational/AboutUs.component';
import Contact from '../presentational/Contact.component';
import Policy from '../presentational/Policy.component';
import Cookies from '../presentational/Cookies.component';

import {    
    Container, 
    Col,
    Row
    } from 'reactstrap';
import mainStyles from '../style/main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);       
    };
    
    render() {        
        return (
            <React.Fragment>                
                    <div>
                        <Navigation />
                        <Container className="content" fluid>                
                            <Row>
                                <Col xl={{size: 10, offset: 1}} sm="12">
                                    <Switch>
                                        <Route exact path="/" component={Home}/>
                                        <Route path="/QandA" component={QandA}/>
                                        <Route path="/AboutUs" component={AboutUs}/>
                                        <Route path="/Contact" component={Contact}/>
                                        <Route path="/Policy" component={Policy}/>
                                        <Route path="/Cookies" component={Cookies}/>                                        
                                    </Switch>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                <Container fluid>
                    <Row>
                        <Col xl="12" sm="12">
                            <Footer/>
                        </Col>
                    </Row>
                </Container>                
            </React.Fragment>            
        )
    }
}

export default Main;