import { React, Component } from 'react';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import NavBar from './Navbar'
import UserDetail from './UserDetail'
import ParkingDetail from './ParkingDetail'
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
        this.state = { name: '', allParkingMap: {} }
        this.onNameChange = this.onNameChange.bind(this);
    }

    componentDidMount = () => {
        this.getLists();
    }

    onNameChange(name) {
        this.setState({
            name: name
        })
    }

    getLists() {
        EventService.apiClient.get(
            '/parking/all')
            .then((res) => {
                this.setState({ allParkingMap: res.data });
                console.log(this.state.allParkingMap)
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <Router>
                    <NavBar isLogin={EventService.auth.isLogin()} user={this.state.name} />
                    <Route
                        exact path="/login"
                        render={(props) => (
                            <Login {...props}
                                onNameChange={this.onNameChange}
                            />
                        )} />
                    <PrivateRoute exact path='/' component={Home} allParkingMap={this.state.allParkingMap} />
                    <PrivateRoute exact path='/editor' component={ParkingEditor} />
                    <PrivateRoute path='/users/:email' component={UserDetail} />
                    <PrivateRoute path='/parking/:id' component={ParkingDetail} allParkingMap={this.state.allParkingMap} />
                </Router>
            </div>
        )
    }
}

export default App