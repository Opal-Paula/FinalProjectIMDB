import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './login.css';


class Login extends React.Component{
    render() {
        return(
            <div className="login-container">
                <h1>Sign in</h1>
            
                <Form>
                
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password"/>
                    </FormGroup>
                    <Button>Sign in</Button>
                </Form>
            </div>
        );
    }
}

export default Login;