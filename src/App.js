import {React, Component} from 'react';
import './App.css'

import Navbar from './components/Navbar'

import MainPage from './pages/MainAdmin'
import LoginPage from './pages/LoginPage'


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
            <Router>
                <Navbar />
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/admin' component={MainPage} />
            </Router>
        )
    }
}

export default App