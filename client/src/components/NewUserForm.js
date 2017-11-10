import React, { Component } from 'react'
import axios from 'axios'

class NewUserForm extends Component {
  state = {
    picture: '',
    name: '',
    favorite_album: '',
    favorite_song: '',
    fan_since: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    const newState = {...this.state}
    newState[name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      name: this.state.name,
      description: this.state.description
    }
    await axios.post('/api/users', payload)
    await this.props.getAllUsers()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        </div>
        <div>
          <label htmlFor="favorite_album">Favorite Album: </label>
          <input onChange={this.handleChange} type="text" name="favorite_album" value={this.state.favorite_album}/>
        </div>
        <div>
          <label htmlFor="favorite_song">Favorite Song: </label>
          <input onChange={this.handleChange} type="text" name="favorite_song" value={this.state.favorite_song}/>
        </div>
        <div>
          <label htmlFor="fan_since">Fan Since: </label>
          <input onChange={this.handleChange} type="text" name="fan_since" value={this.state.fan_since}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewUserForm