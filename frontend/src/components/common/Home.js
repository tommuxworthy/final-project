import React from 'react'
// import ReactDOM from 'react-dom'

class Home extends React.Component {
  constructor() {
    super()

    // this.state = {
    //   flights: [],
    //   search: ''
  }
  render() {
    return (
      <div>
        <h1>Calculate Carbon to Offset</h1>

        <div className="row">
          <div className="six columns">
            <label htmlFor="exampleFlightFrom">Departing from...</label>
            <input
              className="u-full-width"
              placeholder="Departure Airport Name"
              // onChange={this.handleChange}
            />
            <label htmlFor="exampleFlightTo">Arriving at...</label>
            <input
              className="u-full-width"
              placeholder="Arrival Airport Name"
              id="exampleAirport"
            />
          </div>
        </div>
        <input type="submit" value="submit input"></input>
        <div className="container">
          <h3>Total Distance:</h3>
          <h3>Total Carbon:</h3>
        </div>
      </div>
    )
  }
}


export default Home