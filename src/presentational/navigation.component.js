import React from 'react';
import {Link, NavLink} from 'react-router-dom';
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
import logo from "../resources/monneo-logo.png";
import phone from "../resources/phone-volume-solid.svg";
import '../style/navigation.css';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            visible: 0
        };
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen 
        });
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen 
        });
    }

    handleScroll() {
        if (window.scrollY > 0) {
            this.setState({
                visible: '-8vh'
            });
            document.querySelector('#header').classList.add('scroll');
        } else {
            this.setState({
                visible: 0
            });
            document.querySelector('#header').classList.remove('scroll');
        }
    }

    render() {
        return (
            <header className="header-whole" id="header" style={{transform: `translate(0, ${this.state.visible})`, transition: 'transform .2 linear'}}>
                <div>
                    <Container>
                        <Row className="top-header justify-content-between align-content-center">
                            <NavbarBrand className="align-content-center logo-container" href={window.location.hostname}>
                                <img className="logo" src={logo} alt="logo" />
                            </NavbarBrand>
                            <Nav className="navbar-nav align-content-center flex-row">
                                <NavItem  className="navbar-item navbar-item-header align-content-center"><NavLink to="/Contact" className="nav-link nav-link-header">Kontakt</NavLink></NavItem>
                                <NavItem  className="navbar-item navbar-item-header align-content-center"><NavLink to="/QandA" className="nav-link nav-link-header">Pytania i odpowiedzi</NavLink></NavItem>
                                <NavItem className="navbar-item navbar-item-header align-content-center navContact">
                                    <i className="fas fa-phone-volume"></i>
                                    <span>123 123 123</span>
                                </NavItem>
                            </Nav>
                        </Row>
                    </Container>
                </div>
                <Navbar className="navbar bottom-header-menu sticky-top" color="light" expand="md" light>    
                    <Container>             
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="bottom-nav justify-content-between" navbar >
                                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                    <DropdownToggle className="nav-link nav-link-header" nav caret>
                                        O nas
                                    </DropdownToggle>
                                    <DropdownMenu>                                                            
                                        <DropdownItem><NavLink to="/AboutUs" className="nav-link nav-link-header">Zarząd</NavLink></DropdownItem>                                
                                        <DropdownItem><NavLink to="/Career" className="nav-link nav-link-header">Kariera</NavLink></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <NavItem>
                                    <NavLink to="/Loan" className="nav-link nav-link-header">Jak wziąć pożyczke?</NavLink>
                                </NavItem>                                                
                            </Nav> 
                        </ Collapse>
                    </Container>    
                </Navbar>                
            </header>
        )
    }
}
export default Navigation;