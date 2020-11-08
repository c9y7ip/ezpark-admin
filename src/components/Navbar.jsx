import {React, Component} from 'react';

// import './styles/navbar.css'

import {Navbar, Nav} from 'react-bootstrap';
import EventService from "../services/EventService"

// function handleLogout() {
//     EventService.auth.userLogout();
//     // this.props.history.push('/login', this.state);
// };

class NavBar extends Component {
    constructor(props) {
        super(props);
        // this.state = {isLogin: false};
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        EventService.auth.userLogout();
        this.props.history.push('/login', this.state);
        // this.setState({isLogin  : false})
    };

    render() {
        return (
            <Navbar bg="dark" variant="dark" >
                {
                    this.props.isLogin
                    ? 
                        <Navbar.Brand href="/" className="align-center">
                        <img
                            alt="logo"
                            src="/images/logo-small.png"
                            width="100"
                            className="d-inline-block"
                        />{' '}
                        EZ PARK
                        </Navbar.Brand>
                    :
                        <Navbar.Brand href="/login" className="align-center"> 
                        <img
                            alt="logo"
                            src="/images/logo-small.png"
                            width="100"
                            className="d-inline-block"
                        />{' '}
                        EZ PARK
                        </Navbar.Brand>
                }
            
                
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                {
                    this.props.isLogin
                    ? 
                    <Nav>
                        <Navbar.Text>
                            Signed in as: <b style={{color:"white"}}>Bobby</b>
                        </Navbar.Text>
                        <Nav.Link href="/login" onClick={this.handleLogout}>logout</Nav.Link>
                    </Nav>
                    :
                    <Nav>
                        <Nav.Link href="/login">login</Nav.Link>
                    </Nav>   
                }   
                </Navbar.Collapse> 
                
            </Navbar>
        )
    }
}

export default NavBar