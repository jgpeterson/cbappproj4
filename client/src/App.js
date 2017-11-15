import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import HomePage from './components/HomePage'
import Users from './components/Users'
import Discography from './components/Discography'
import Songs from './components/Songs'
import Fans from './components/Fans'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MainMenu" component={MainMenu} />

        <Route exact path="/user" component={Users} />
        <Route exact path="/discography" component={Discography} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/fans" component={Fans} />
        </Switch>
        </div>
        </Router>
    );
  }
}



export default App