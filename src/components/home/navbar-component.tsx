import React from 'react';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import classes from '*.module.css';

export class NavBarComponent extends React.Component<any,any> {
    
    constructor(props: any) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/home">
                   Home </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link to="/aboutme">
                        <Link to="/aboutme">
                        About Me
                        </Link>
                        </Nav.Link>
                    <Nav.Link>
                        <Link to="/music">
                        Music
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contact-me">
                        Contact Me
                        </Link>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }   
}