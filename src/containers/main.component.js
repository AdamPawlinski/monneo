import React from 'react';
import Content from '../presentational/content.component';
import Footer from '../presentational/footer.component';
import {    
    Container, 
    Col,
    Row
    } from 'reactstrap';
import mainStyles from '../style/main.css'
class Main extends React.Component {
    constructor(props) {
        super(props);        
    };
    
    render() {
        return (
            <Container className="content" fluid>
                <Row>
                    <Col xl={{size: 10, offset: 1}} sm="12">
                        <Content />
                    </Col>
                </Row>
                <Row>
                <Col xl="12" sm="12">
                    <Footer/>
                </Col>
                </Row>
            </Container>            
        )
    }
}

export default Main;