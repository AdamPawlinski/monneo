import React from 'react';
import {    
    Container, 
    Col,
    Row,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Button,
    Fade
    } from 'reactstrap';

import QandAItemStyles from '../style/QandAItem.css';

class QandAItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false
        };
        this.toggle = this.toggle.bind(this);
    };

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        })
    };       

    render() {
        return (                            
            <ListGroupItem key={this.props.item.id}>
                <header className="qAndA-header">
                    <Button className="qAndA-open-btn" color="light" onClick={this.toggle}>></Button>
                    <ListGroupItemHeading>{this.props.item.itemHead}</ListGroupItemHeading>                     
                </header>
                <Fade in={this.state.fadeIn}>
                    <ListGroupItemText className="qAndA-text">
                        {this.props.item.itemText}                      
                    </ListGroupItemText>
                </Fade>
            </ListGroupItem>
        )                
    }                    
}

export default QandAItem;