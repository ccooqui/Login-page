import React, {Component} from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPage extends Component {

    render () {
        return (
            <section className="login-container">
                <h2 className="">Welcome!</h2>
                <p>Please Login</p>
                <LoginForm />
                <button className="btn">Sign Up</button>
            </section>
        )
    }
}