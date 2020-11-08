import {React, Component} from 'react';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  

import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
// import NavBar from './Navbar'
// import EventService from "../services/EventService";


import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link,
  // Redirect
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path='/' component={Home} />
                </Router>
            </div>
        )
    }
}

export default App