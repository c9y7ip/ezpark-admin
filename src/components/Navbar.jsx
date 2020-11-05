import React from 'react';

// import './styles/navbar.css'

import {Navbar, Nav} from 'react-bootstrap';
import { logout } from '../utils';

function handleLogout() {
    logout();
    //TODO: set state to logged out
};

const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/" className="align-center">
            <img
                alt="logo"
                src="/images/logo-small.png"
                width="100"
                className="d-inline-block"
            />{' '}
            EZ PARK
            </Navbar.Brand>
            
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            {
                props.isLogin 
                ?
                <Nav>
                    <Navbar.Text>
                        Signed in as: <b style={{color:"white"}}>Bobby</b>
                    </Navbar.Text>
                    <Nav.Link href="/" onClick={handleLogout}>logout</Nav.Link>
                </Nav>
                :
                <Nav>
                    <Nav.Link href="/">login</Nav.Link>
                </Nav>   
            }   
            </Navbar.Collapse> 
            
        </Navbar>
    );
};

export default NavBar;