import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUserForm from './NewUserForm'

class Users extends Component {
  state = {
    users: [],
    showNewForm: false
  }
  componentWillMount () {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    const res = await axios.get('/api/users')
    this.setState({users: res.data})
  }
  toggleShowNewForm = () => {
    this.setState({showNewForm: !this.state.showNewForm})
  }

  render () {
    return (
      <div>
        <h1>Linkin Park Street Team</h1>
        {this.state.users.map(user => (
          <Link key={user._id} to={`/${user._id}`}>
            <img src={user.picture}/>
            <p>Name: {user.name}</p>
            <p>Favorite Album: {user.favorite_album}</p>
            <p>Favorite Song: {user.favorite_song}</p>
            <p>Fan Since: {user.fan_since}</p>
          </Link>
        ))}
        <button onClick={this.toggleShowNewForm}>Create New</button>

        {this.state.showNewForm ? <NewUserForm getAllUsers={this.getAllUsers}/> : null}
      </div>
    )
  }
}

export default Users