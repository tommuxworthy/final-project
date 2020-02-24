import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class FlightCalculator extends React.Component {
  constructor() {
    super()

    this.state = {
      departure: '',
      arrival: '',
      distance: '',
      carbon: ''
    }

    this.handleChangeFrom = this.handleChangeFrom.bind(this)
    this.handleChangeTo = this.handleChangeTo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddFlight = this.handleAddFlight.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`https://api.skypicker.com/flights?flyFrom=${this.state.departure}&to=${this.state.arrival}&partner=picky`)
      .then(res => this.setState({ distance: res.data.data[0].distance, carbon: res.data.data[0].distance * 0.000115  }))
      .catch(err => console.log('errors', err))
  }

  handleChangeFrom(e) {
    this.setState({ departure: e.target.value })
  }

  handleChangeTo(e) {
    this.setState({ arrival: e.target.value })
  }

  handleAddFlight() {
    console.log('state in add flight: ', this.state)
    const flightData = this.state
    axios.post('/api/flights', flightData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.setState())
      .catch(err => console.log(err))
  }





  render() {
    console.log(this.state)
    return (
      <div className="columns is-centered has-text-centered">
        <div className="column is-four-fifths">
          <h1 className="title-main title is-1">Calculate Carbon to Offset</h1>
          <form onSubmit={this.handleSubmit}>
            <h3 className="subtitle is-3">Departing from...</h3>
            <input className="input"
              type="text"
              placeholder="Departure Airport Code"
              onChange={this.handleChangeFrom}
            />
            <h3 className="subtitle is-3">Arriving at...</h3>
            <input className="input"
              type="text"
              placeholder="Arrival Airport Code"
              onChange={this.handleChangeTo}
            />
            <button className="button-main button is-active is-light" type="submit">Calculate</button>
          </form>
          <div className="container">
            <h4 className="subtitle is-4">Total Distance: {this.state.distance} km</h4>
            <h4 className="subtitle is-4">Total Carbon: {this.state.carbon} tonnes</h4>
            <button className="button is-active is-light"
              type="submit"
              onClick={this.handleAddFlight}>
              Add Flight</button>
          </div>
        </div>
      </div>
    )
  }
}


export default FlightCalculator


