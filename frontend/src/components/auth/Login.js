import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/flights')
      })
      .catch(() => this.setState({ error: 'Incorrect Credentials' }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Login</h2>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${this.state.error} ? : 'is-danger' : '' `}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${this.state.error} ? : 'is-danger' : '' `}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <button type="submit" className="button is-light is-fullwidth">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login