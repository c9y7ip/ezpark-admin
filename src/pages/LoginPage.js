import React from 'react';

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
        console.log(this.state);
        fetch('http://localhost:5000/auth/login', {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((resp)=>{ return resp.text() }).then((text)=>{ console.log(text) });
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