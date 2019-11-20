import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'


class MyFlights extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null,
      totals: {}
    }
  }

  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .then(() => this.makeTotalDistance())
      .then(() => this.makeTotalCarbon())
      .catch(err => console.log('errors', err))
  }

  makeTotalDistance() {
    let sum = 0
    this.state.data.flights.forEach(function (obj) {
      sum += obj.distance
    })
    const totals = { ...this.state.totals, totalDistance: sum }
    this.setState({ totals })
  }


  makeTotalCarbon() {
    let sum = 0
    this.state.data.flights.forEach(function (obj) {
      sum += obj.carbon
    })
    const totals = { ...this.state.totals, totalCarbon: sum }
    this.setState({ totals })
  }

  render() {
    console.log('myflights state', this.state)
    if (!this.state.data) return null
    return (
      <div>
        <h1 className="table-title">Flight Emissions Summary</h1>
        <div className="columns is-centered has-text-centered">
          <table className="table is-bordered has-background-white-ter">
            <thead>
              <tr>
                <th>Departure Airport</th>
                <th>Arrival Airport</th>
                <th>Distance (km)</th>
                <th>Carbon (tonnes)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.flights.map((flight, index) => {
                console.log('I have happened')
                const { departure, arrival, distance, carbon } = flight
                return (
                  <tr key={index}>
                    <td className="has-text-weight-medium">{departure}</td>
                    <td className="has-text-weight-medium">{arrival}</td>
                    <td className="has-text-grey">{distance}</td>
                    <td className="has-text-grey">{carbon}</td>
                  </tr>
                )
              })
              }
            </tbody>
            <tfoot>
              <tr>
                <td className="has-text-weight-bold">Total</td>
                <td>n/a</td>
                <td>{this.state.totals.totalDistance}</td>
                <td>{this.state.totals.totalCarbon}</td>
              </tr>
            </tfoot>
          </table>
        </div >
        <a href="https://www.worldlandtrust.org/carbon-calculator/individual/flights/flights-quick-offset/">
          <button className="button button-link">
          Offset Emissions
          </button></a>
      </div>
    )
  }
}


export default MyFlights
