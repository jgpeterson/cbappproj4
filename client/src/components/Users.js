import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUserForm from './NewUserForm'
import styled from 'styled-components'



const Img = styled.div`
text-align: center;
   display: inline-block;
   width:85%;
   background: white;
   border: 1px solid #B9D6C2 ;
   margin-bottom: 8px;
   margin-right: 8px;
   margin-left: 170px;
   border-radius: 50px;
   padding: 2em;
   position: relative;
   min-width: 340px;
   max-width:800px;
   `


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
     <Img>
      <div>
        <h1>Linkin Park Street Team</h1>
        {this.state.users.map(user => (
          <Link key={user._id} to={`/${user._id}`}>
          <div class="photo">
            <img src={user.picture}/>
         </div>
            <p>Name: {user.name}</p>
            <p>Favorite Album: {user.favorite_album}</p>
            <p>Favorite Song: {user.favorite_song}</p>
            <p>Fan Since: {user.fan_since}</p>
          </Link>
        ))}
        <button onClick={this.toggleShowNewForm}>Create New</button>

        {this.state.showNewForm ? <NewUserForm getAllUsers={this.getAllUsers}/> : null}
      </div>
      </Img>
    )
  }
}

export default Users