import React from 'react';
import ReactStrap, {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,       
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Container, 
    Col,
    Row
    } from 'reactstrap';

    import CareerStyles from "../style/Career.css";

    const Career = () => {
        return (
            <Container> 
                <Row className="head-career">
                    <Col>
                        Kariera
                    </Col>
                </Row>
            </Container> 
        )
    }

    export default Career;