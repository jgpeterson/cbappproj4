import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Users from './Users'
import HomePage from './HomePage'
import Discography from './Discography'
import Songs from './Songs'
import styled from 'styled-components'


class MainMenu extends Component {
  render() {
    return (
      <Router>
        <div>
        <div className="container">
        <div className="item">
          <Link to="/MainMenu">HomePage</Link>
        </div>
        <div className="item">
          <Link to="/user">UserPage</Link>
        </div>
        <div className="item">
        <Link to="/discography">Discography</Link>
        </div>
        <div className="item">
        <Link to="/songs">Remixes</Link>
        </div>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/discography" component={Discography} />
          <Route exact path="/songs" component={Songs} />
        </Switch>
        </div>
        </Router>
        
    );
  }
}
export default MainMenu
