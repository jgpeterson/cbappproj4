import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUserForm from './NewUserForm'
import styled from 'styled-components'
import Header from './Header'


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
   padding: 15em;
   position: relative;
   min-width: 340px;
   max-width: 850px;
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
  deleteUser = async (userId) => {        
    const res = await axios.delete(`/api/users/${userId}`)
    this.setState({users: res.data})
  }
  toggleShowNewForm = () => {
    this.setState({showNewForm: !this.state.showNewForm})
  }

  render () {
    return (
     <Img>
     <Header />
      <div>
    <div class="logo">
      <img src="https://i.imgur.com/dINfRRP.jpg"/>
      </div>
        {this.state.users.map(user => (
          <div key={user.id}>
          <div class="photo">
            <img src={user.picture}/>
         </div>
            <p>Name: {user.name}</p>
            <p>Favorite Album: {user.favorite_album}</p>
            <p>Favorite Song: {user.favorite_song}</p>
            <p>Fan Since: {user.fan_since}</p>
            <button onClick={() => this.deleteUser(user.id)}>Delete User</button>
          </div>
        ))}
        <div class="create">
        <button onClick={this.toggleShowNewForm}>Create New Soldier</button>
        </div>
        {this.state.showNewForm ? <NewUserForm getAllUsers={this.getAllUsers}/> : null}
      </div>
      </Img>
    )
  }
}

export default Users