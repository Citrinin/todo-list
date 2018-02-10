import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';
import { checkUserPassword } from '../utils/apiLogin';



export class LoginForm extends Component {

    login = (event) => {
        event.preventDefault();
        let user = [...event.target.querySelectorAll('[name]')]
            .reduce((hash, item) => ({ ...hash, [item.getAttribute('name')]: item.value }), {});
        checkUserPassword(user.username, user.password).then(() => {
            this.props.loginUser(user.username);
            this.props.onLogin();
        });
    }

    render() {

        return (
            <Form onSubmit={this.login}>
                <Form.Input type='text' placeholder='Username' name='username' />
                <Form.Input type='password' placeholder='Password' name='password' />
                <Form.Button color='green'>Login</Form.Button>
            </Form>
        )
    }
}




export default connect(undefined, { loginUser })(LoginForm); 