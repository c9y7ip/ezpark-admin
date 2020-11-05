import React from 'react';

// import './styles/navbar.css'

import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {
    
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="admin" className="align-center">
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
                    <Nav.Link href="/">logout</Nav.Link>
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