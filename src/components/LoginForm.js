import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            emailValid: false,
            passwordValid: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        //form submission handling here
    }

    
    render () {
        return (
        <form className="login-form" onSubmit={this.handleSubmit}>
                <label className="item2">Email</label>
                <input
                    className=""
                    type="email"
                    name="email"
                    required="required"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email Address"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />

                <label className="">Password</label>
                <input
                    className="item5"
                    type="password"
                    name="password"
                    required="required"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                    minLength="8"
                />
                <a className="" href="">Forget Password?</a>
                <button className="btn selected-btn">Login</button>
            </form>
        )
    }

}
