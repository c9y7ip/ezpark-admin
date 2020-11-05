import React from 'react';
import {Link} from "react-router-dom";

import NavBar from '../components/Navbar'
import { login } from '../utils';

class Login extends React.Component {

    handleLogin() {
        login();
        this.props.history.push('/');
    }

    render() {
        return (
            <section>
                <h2>Login Page</h2>
                <form>
                    <section>
                        <label>Email : </label>
                        <input type='Email' placeholder='example@email.com'/>
                    </section>
                    <section>
                        <label>Password : </label>
                        <input type='password' placeholder='*****'/>
                    </section>
                    <button onClick={() => this.handleLogin()}>
                        Login
                    </button>
                </form>
            </section>
        );
    }

}


export default Login;