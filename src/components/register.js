import React from 'react';

import './register.css';


class Register extends React.Component{
    render() {
        return(
            <div className="container-for-login">
                <form>
                    <h1>Create account</h1>
                    <div className="first-row">
                        <label htmlFor="name-field">Your name</label>
                        <input type="text" maxLength="50" id="name-field" tabIndex="1"/>
                    </div>
                    <div className="second-row">
                        <label htmlFor="email-field">Email</label>
                        <input type="text" maxLength="50" id="email-field" tabIndex="2"/>
                    </div>
                    <div className="third-row">
                        <label htmlFor="password-field">Password</label>
                        <input type="text" maxLength="50" id="password-field" tabIndex="3"/>
                    </div>
                    <div className="fourth-row">
                        <label htmlFor="re-enter-password-field">Re-enter password</label>
                        <input type="text" maxLength="50" id="re-enter-password-field" tabIndex="4"/>
                    </div>
                    <div className="fifth-row">
                        <button tabIndex="5">Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
