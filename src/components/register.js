import React from 'react';

import './register.css';

class Register extends React.Component{
    render() {
        return(
            <div class="container-for-login">
                <form>
                    <h1>Create account</h1>
                    <div class="first-row">
                        <label for="name-field">Your name</label>
                        <input type="text" maxlength="50" id="name-field" tabindex="1"/>
                    </div>
                    <div class="second-row">
                        <label for="email-field">Email</label>
                        <input type="text" maxlength="50" id="email-field" tabindex="2"/>
                    </div>
                    <div class="third-row">
                        <label for="password-field">Password</label>
                        <input type="text" maxlength="50" id="password-field" tabindex="3"/>
                    </div>
                    <div class="fourth-row">
                        <label for="re-enter-password-field">Re-enter password</label>
                        <input type="text" maxlength="50" id="re-enter-password-field" tabindex="4"/>
                    </div>
                    <div class="fifth-row">
                        <button tabindex="5">Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;