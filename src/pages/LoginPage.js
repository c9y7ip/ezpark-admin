import React from 'react';
import {Link} from "react-router-dom";

import NavBar from '../components/Navbar'

const LoginPage = () => {
    return (
        <section>
            <NavBar isLogin={false}/>
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
                <Link to="/admin">
                    <button>
                        Login
                    </button>
                </Link>
            </form>
        </section>
    );
};


export default LoginPage;