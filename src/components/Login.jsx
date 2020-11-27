import React from 'react';
import '../styles/Login.css'
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
        }, (authSuccess, name) => {
            this.setState({ isAuthenticated: authSuccess });

            // set the name in parent state
            this.props.onNameChange(name);
            if (authSuccess) {
                this.props.history.push('/', this.state);
            } else {
                window.location.reload(false);
            }
        })
    }

    render() {
        return (
            <section className="auth-wrapper">
                <section className="auth-inner">
                    <section className="container">
                        <form onSubmit={this.handleSubmit} method="POST">
                            <h3>Login</h3>
                            <section className="form-group">
                                <label>Email : </label>
                                <input onChange={this.onEmailChange} className="form-control" type='email' placeholder='example@email.com' />
                            </section>
                            <section className="form-group">
                                <label>Password : </label>
                                <input onChange={this.onPasswordChange} className="form-control" type='password' placeholder='*****' />
                            </section>
                            <button className="btn btn-primary btn-block" type='submit'>Sign in</button>
                        </form>
                    </section>
                </section>
            </section>
        );
    };
}


export default Login;

