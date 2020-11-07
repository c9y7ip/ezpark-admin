import React from 'react';
import NavBar from '../components/Navbar'
import EventService from "../services/EventService";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', isAuthenticated: false }; // NOTE: user should always be intended to be
        // de-authenticated when they redirect to login page
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        var password = this.state.password
        var email = this.state.email

        EventService.auth.userLogin({ // include only what you need in the payload
            email,
            password
        }, (authSuccess) => {
            this.setState({ isAuthenticated: authSuccess });
            if (authSuccess) {
                this.props.history.push('/', this.state);
            } else {
                window.location.reload(false);
            }
        })
    }

    render() {
        return (
            <section>
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit} method="POST">
                    <section>
                        <label>Email : </label>
                        <input id="email" type='email' placeholder='example@email.com' />
                    </section>
                    <section>
                        <label>Password : </label>
                        <input id="password" type='password' placeholder='*****' />
                    </section>
                    <button type='submit'>Login</button>
                </form>
            </section>
        );
    };
}


export default Login;