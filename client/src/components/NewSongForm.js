import React, { Component } from 'react'
import axios from 'axios'

class NewSongForm extends Component {
  state = {
    title: '',
    description: ''
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
      name: this.state.title,
      description: this.state.description
    }
    await axios.post('/api/songs', payload)
    await this.props.getAllSongs()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input onChange={this.handleChange} type="text" name="description" value={this.state.description}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewSongForm