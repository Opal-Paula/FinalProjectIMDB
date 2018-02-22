import React from 'react';



class Login extends React.Component{
    render() {
        return(
            <div class="container-for-login">
                <form>
                    <h1>Sign in</h1>
                    <div class="first-row">
                        <label for="email-field">Email</label>
                        <input type="text" maxlength="50" id="email-field" tabindex="1"/>
                    </div>
                    <div class="second-row">
                        <label for="password-field">Password</label>
                        <input type="text" maxlength="50" id="password-field" tabindex="2"/>
                    </div>
                    <div class="third-row">
                        <button tabindex="3">Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;