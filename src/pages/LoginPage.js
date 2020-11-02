import React from 'react';

const LoginPage = () => {
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
                <button>Login</button>
            </form>
        </section>
    );
};


export default LoginPage;