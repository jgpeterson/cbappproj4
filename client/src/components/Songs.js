import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewSongForm from './NewSongForm'

class Songs extends Component {
  state = {
    songs: [],
    showNewForm: false
  }
  componentWillMount () {
    this.getAllSongs()
  }

  getAllSongs = async () => {
    const res = await axios.get('/api/songs')
    this.setState({users: res.data})
  }
  toggleShowNewForm = () => {
    this.setState({showNewForm: !this.state.showNewForm})
  }

  render () {
    return (
      <div>
        <h1>Remix Playlist</h1>
        {this.state.songs.map(song => (
          <Link key={song._id} to={`/${song._id}`}>
            <img src={song.picture}/>
            <p>Title: {song.name}</p>
            <p>Description: {song.description}</p>
          </Link>
        ))}
        <button onClick={this.toggleShowNewForm}>Create New</button>

        {this.state.showNewForm ? <NewSongForm getAllSongs={this.getAllSongs}/> : null}
      </div>
    )
  }
}

export default Songs