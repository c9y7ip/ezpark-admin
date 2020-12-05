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
        this.getLots = this.getLots.bind(this)
    }

    deleteLot = (id) => {
        const allParkingMap = Object.assign({}, this.state.allParkingMap)
        delete allParkingMap[id]
        this.setState(
            { allParkingMap })
    }

    updateLot = (id, name, number, rate, address) => {
        this.setState(prevState => ({
            ...prevState,
            allParkingMap: {
                ...prevState.allParkingMap,
                [id]: {
                    ...prevState.allParkingMap[id],
                    name,
                    number,
                    rate,
                    address
                }
            }

        }))
    }

    addLot = (id, parkingLot) => {
        this.setState(prevState => ({
            ...prevState,
            allParkingMap: {
                ...prevState.allParkingMap,
                [id]: parkingLot
            }
        }))
    }

    componentDidMount = () => {
        this.getLots();
    }

    onNameChange(name) {
        this.setState({
            name: name
        })
    }

    getLots() {
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
                                getLots={this.getLots}
                            />
                        )} />
                    <PrivateRoute exact path='/' component={Home} allParkingMap={this.state.allParkingMap} deleteLot={this.deleteLot} />
                    <PrivateRoute exact path='/editor' component={ParkingEditor} updateLot={this.updateLot} addLot={this.addLot} />
                    <PrivateRoute path='/users/:email' component={UserDetail} />
                    <PrivateRoute path='/parking/:id' component={ParkingDetail} allParkingMap={this.state.allParkingMap} />
                </Router>
            </div>
        )
    }
}

export default App