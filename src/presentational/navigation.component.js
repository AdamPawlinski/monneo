import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
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
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen 
        });
    }

    render() {
        return (
            <header>
                {/* <Container>
                <Row> */}
                <Navbar style={navigationStyles.navbar} color="light" expand="md" fixed="top" light>
                    {/* <Col lg={{size: 2, offset: 1}} sm={{size: 8, offset: 2}}> */}
                    <NavbarBrand href="#">
                        <img src="../resources/monneo-logo.png" alt="logo"/>
                    </NavbarBrand>
                    {/* </Col> */}
                    {/* <Col lg={{size: 6, offset: 2}} sm={{size: 4, offset: 4}}> */}
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Pytania i odpowiedzi</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">O nas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Kontakt</NavLink>
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