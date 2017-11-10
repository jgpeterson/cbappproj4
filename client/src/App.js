import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Users from './components/Users'
import HomePage from './components/HomePage'
import Discography from './components/Discography'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div className="container">
        <div className="item">
          <Link to="/">HomePage</Link>
        </div>
        <div className="item">
          <Link to="/user">UserPage</Link>
        </div>
        <div className="item">
        <Link to="/discography">Discography</Link>
        </div>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/discography" component={Discography} />
        </Switch>
        </div>
        </Router>
    );
  }
}



export default App