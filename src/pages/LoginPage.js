import React from 'react';
import NavBar from '../components/Navbar'
import EventService from "./EventService";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', isAuthenticated: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        EventService.auth.userLogin(this.state, (authSuccess) => {
            this.setState({isAuthenticated: authSuccess});
            if(authSuccess){
                this.props.history.push('/admin', this.state);
            } else {
                window.location.reload(false);
            }
        })
    }

    render() {
        return (
            <section>
                <NavBar isLogin={this.state.isAuthenticated}/>
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit} method="POST">
                    <section>
                        <label>Email : </label>
                        <input onChange={this.onEmailChange} type='email' placeholder='example@email.com'/>
                    </section>
                    <section>
                        <label>Password : </label>
                        <input onChange={this.onPasswordChange} type='password' placeholder='*****'/>
                    </section>
                    <button type='submit'>Login</button>
                </form>
            </section>
        );
    };
}


export default LoginPage;