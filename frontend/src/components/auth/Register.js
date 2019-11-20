import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.data, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input 
                  className={`input ${this.state.errors.username} ? : 'is-danger' : '' `}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input 
                  className={`input ${this.state.errors.email} ? : 'is-danger' : '' `}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input 
                  className={`input ${this.state.errors.password} ? : 'is-danger' : '' `}
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input 
                  className={`input ${this.state.errors.passwordConfirmation} ? : 'is-danger' : '' `}
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
            </div>
            <button type="submit" className="button is-light is-fullwidth">Register</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register