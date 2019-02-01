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
                <Navigation />
                <Container className="content" fluid>                
                    <Row>
                        <Col lg="12" sm="12">
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
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" autohide="false">
                        <div className="toast-header">
                            <img src="..." className="rounded mr-2" alt="..."/>
                            <strong className="mr-auto">Bootstrap</strong>
                            <small className="text-muted">11 mins ago</small>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
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