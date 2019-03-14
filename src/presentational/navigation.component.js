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
import '../style/Navigation.css';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
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
        const navBarHeight = document.documentElement.clientHeight / 100 * 8;
        if (window.scrollY > 0) {
            document.querySelector('#header').classList.add('scroll');
        } else if (window.scrollY <=  navBarHeight) {
            document.querySelector('#header').classList.remove('scroll');
        }
    }

    render() {
        return (
            <header className="header-whole w-100" id="header">
                <Container fluid>
                    <Row className="top-header justify-content-between w-100">
                        <NavbarBrand className="align-items-middle logo-container" href={window.location.hostname}>
                            <img className="logo" src={logo} alt="logo" />
                        </NavbarBrand>
                        <Nav className="navbar-nav flex-row">
                            <NavItem  className="navbar-item navbar-item-header "><NavLink to="/Contact" className="nav-link nav-link-header align-items-middle">Kontakt</NavLink></NavItem>
                            <NavItem  className="navbar-item navbar-item-header"><NavLink to="/QandA" className="nav-link nav-link-header align-items-middle">Pytania i odpowiedzi</NavLink></NavItem>
                            <NavItem className="navbar-item navbar-item-header navContact">
                                <i className="fas fa-phone-volume"></i>
                                <span>123 123 123</span>
                            </NavItem>
                        </Nav>
                    </Row>
                    <Navbar className="navbar-nav bottom-header-menu sticky-top justify-content-between w-100" color="light" expand="md" light>    
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="bottom-nav" navbar >
                                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                    <DropdownToggle className="nav-link-header" nav caret>
                                        O nas
                                    </DropdownToggle>
                                    <DropdownMenu>                                                            
                                        <DropdownItem className="bg-transparent"><NavLink to="/AboutUs" className="nav-link nav-link-header">Zarząd</NavLink></DropdownItem>                                
                                        <DropdownItem className="bg-transparent"><NavLink to="/Career" className="nav-link nav-link-header">Kariera</NavLink></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <NavItem>
                                    <NavLink to="/Loan" className="nav-link nav-link-header">Jak wziąć pożyczke?</NavLink>
                                </NavItem>                                                
                            </Nav> 
                        </Collapse>                     
                    </Navbar>  
                </Container>                 
            </header>
        )
    }
}
export default Navigation;