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
                        <img src="../resources/monneo-logo.png" alt="logo" />
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
                                <DropdownToggle nav caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>                                
                                <DropdownItem>Another Action</DropdownItem>                                
                                <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink to="/AboutUs" className="nav-link">O nas</NavLink>
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