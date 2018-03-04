import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './register.css';


class Register extends React.Component{
    render() {
        return(
            <div className="register-container">
                <h1>Create account</h1>
                <Form>
                    <FormGroup>
                        <Label for="name">Your name</Label>
                        <Input type="email" name="email" id="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="reEnterPassword">Re-enter Password</Label>
                        <Input type="password" name="password" id="reEnterPassword"/>
                    </FormGroup>
                    <Button>Create account</Button>
                </Form>
               
            </div>
        )
    }
}

export default Register;
