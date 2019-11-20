import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'
import 'bulma'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import FlightCalculator from './components/flights/FlightCalculator'
import MyFlights from './components/flights/MyFlights'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={FlightCalculator} />
        <Route exact path="/flights" component={MyFlights} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

