import React from 'react';
import EventService from "./EventService";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    onPasswordChange(e){
        this.setState({password: e.target.value});
    }

    onEmailChange(e){
        this.setState({email: e.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        EventService.auth.userLogin(this.state);
    }

    render(){
        return (
            <section>
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <section>
                        <label>Email : </label>
                        <input onChange={this.onEmailChange.bind(this)} type='email' placeholder='example@email.com'/><br />
                        <label>Password : </label>
                        <input onChange={this.onPasswordChange.bind(this)} type='password' placeholder='*****'/>
                    </section>
                    <button type="submit">Login</button>
                </form>
            </section>
        );
    }
}


export default LoginPage;