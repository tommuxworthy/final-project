import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  constructor() {
    super()
  }

  // 

  render() {
    // this.getUserName()
    return (
      <section >
        <div className="hero is-success is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Emissions Calculator</h1>
              <div><Link to="/login">Log in</Link> or <Link to="/register">Register</Link> to offset your flights
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Home
