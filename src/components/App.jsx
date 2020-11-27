import { React, Component } from 'react';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import NavBar from './Navbar'
import UserDetail from './UserDetail'
import ParkingDetail from './ParkingLotDetail'
import EventService from "../services/EventService";
import ParkingEditor from "./ParkingEditor"

import {
    BrowserRouter as Router,
    Route,
    // Switch,
    // Link,
    // Redirect
} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '' }
        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(name) {
        this.setState({
            name: name
        })
    }
    
    render() {
        return (
            <div>
                <NavBar isLogin={EventService.auth.isLogin()} user={this.state.name} />
                <Router>
                    <Route
                        exact path="/login"
                        render={(props) => (
                            <Login {...props}
                                onNameChange={this.onNameChange}
                            />
                        )} />
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute exact path='/editor' component={ParkingEditor} />
                    <PrivateRoute exact path='/user/:id' component={UserDetail}/>
                    {/* <PrivateRoute path='/parking/:num' component={Tutorial}/> */}
                </Router>
            </div>
        )
    }
}

export default App