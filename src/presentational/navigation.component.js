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
import navigationStyles from '../style/navigation.css';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
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

    render() {
        return (
            <header>
                {/* <Container>
                <Row> */}
                <Navbar className="navbar" color="light" expand="md" fixed="top" light>
                    {/* <Col lg={{size: 2, offset: 1}} sm={{size: 8, offset: 2}}> */}
                    <NavbarBrand href={<NavLink to="/"/>}>
                        <img src={logo} alt="logo" />
                    </NavbarBrand>
                    {/* </Col> */}
                    {/* <Col lg={{size: 6, offset: 2}} sm={{size: 4, offset: 4}}> */}
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/QandA" className="nav-link">Pytania i odpowiedzi</NavLink>
                            </NavItem>
                            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                <DropdownToggle className="nav-link" nav caret>
                                    O nas
                                </DropdownToggle>
                                <DropdownMenu>                                                            
                                    <DropdownItem><NavLink to="/AboutUs" className="nav-link">Zarząd</NavLink></DropdownItem>                                
                                    <DropdownItem><NavLink to="/Career" className="nav-link">Kariera</NavLink></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink to="/Loan" className="nav-link">Jak wziąć pożyczke?</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Contact" className="nav-link">Kontakt</NavLink>
                            </NavItem>                    
                        </Nav> 
                    </ Collapse> 
                    {/* </Col> */}
                </Navbar>                
                    {/* </Row> 
                </Container>                 */}
            </header>
        )
    }
}
export default Navigation;