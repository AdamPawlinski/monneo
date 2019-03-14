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

import '../style/QandAItem.css';

class QandAItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false
        };
        this.toggle = this.toggle.bind(this);
    };

    toggle(e) {
        this.setState({
            fadeIn: !this.state.fadeIn
        })        
    };       

    render() {
        return (                            
            <ListGroupItem className="qAndA-item" key={this.props.item.id}>
                <header className="qAndA-header" onClick={this.toggle}>                    
                    <ListGroupItemHeading className="qAndA-open-btn"> {this.props.item.itemHead}</ListGroupItemHeading>                     
                </header>
                <Fade in={this.state.fadeIn} timeout={300}>
                    <ListGroupItemText className="qAndA-text">
                        {this.props.item.itemText}                
                    </ListGroupItemText>
                </Fade>
            </ListGroupItem>
        )                
    }                    
}

export default QandAItem;