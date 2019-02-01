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

    import LoanStyles from "../style/Loan.css";

    const Loan = () => {
        return (
            <Container> 
                <Row className="head-loan">
                    <Col>
                        Pożyczke możesz wziąć w nastepujących punktach:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.195136041195!2d17.02484591530453!3d51.139892687723126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe98e7423d09d%3A0xd844fb946e90c5f4!2sObornicka+78%2C+51-001+Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1548975962361" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container> 
        )
    }

    export default Loan;