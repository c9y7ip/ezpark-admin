import {React, Component} from 'react';
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  

import Home from './Home'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Navbar from './Navbar'
import { isLogin } from '../utils'


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
                <Navbar isLogin={isLogin()}/>
                <Router>
                    <Route exact path ='/login' component={Login}/>
                    <PrivateRoute exact path='/' component={Home} />
                </Router>
            </div>
        )
    }
}

export default App