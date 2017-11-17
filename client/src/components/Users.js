import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUserForm from './NewUserForm'
import styled from 'styled-components'
import Header from './Header'


const Img = styled.div`
   text-align: center;
   display: inline-block;
   width: 85%;
   background: rgba(0, 0, 0, 0.5);
   border: 1px solid;
   margin-bottom: 8px;
   margin-right: 8px;
   margin-left: 170px;
   border-radius: 50px;
   padding: 15em;
   position: relative;
   min-width: 340px;
   max-width: 850px;
   `

const Back = styled.div`
background-image: url("https://i.imgur.com/e9Yki5E.jpg");


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
    <Back>
     <Img>
     <Header />
      <div>
    <div class="logo">
      <img src="https://i.imgur.com/dINfRRP.jpg"/>
      </div>
        {this.state.users.map(user => (
          <div class="stuff" key={user.id}>
          <div class="photo">
            <img src={user.profile_picture}/>
         </div>
         <div class="info">
         <div class="favorite">
            <p>Name: {user.name}</p>
            <p>Favorite Album: {user.favorite_album}</p>
            <p>Favorite Song: {user.favorite_song}</p>
            <p>Fan Since: {user.fan_since}</p>
            </div>
            <div class="delete">
            <button onClick={() => this.deleteUser(user.id)}>Delete Soldier</button>
            </div>
            </div>
          </div>
        ))}
        <div class="create">
        <button onClick={this.toggleShowNewForm}>Create New Soldier</button>
        </div>
        {this.state.showNewForm ? <NewUserForm getAllUsers={this.getAllUsers}/> : null}
      </div>
      </Img>
      </Back>
    )
  }
}

export default Users