import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewFanForm from './NewFanForm'
import styled from 'styled-components'
import Header from './Header'

class Fans extends Component {
    state = {
        fans: [],
        showNewForm: false
      }
      componentWillMount () {
        this.getAllFans()
      }
    
      getAllFans = async () => {
        const res = await axios.get('/api/fans')
        console.log(res.data)
        this.setState({fans: res.data})
      }
      deleteFan = async (fanId) => {        
        const res = await axios.delete(`/api/fans/${fanId}`)
        this.setState({fans: res.data})
      }
      toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
      }
    
    render() {
        return (
            <div>
                <Header />
               {this.state.fans.map((fan) => {
         return ( <div key={fan.id}>
         <div>
            <img src={fan.picture}/>
            <div class="name">
            <p>Description: {fan.description}</p>
            </div>
            <div>
            <button onClick={() => this.deleteFan(fan.id)}>Delete Post</button>
            </div>
            </div>
         </div> )
               })}
        <div>
        <button onClick={this.toggleShowNewForm}>Create New Post</button>
        </div>
        {this.state.showNewForm ? <NewFanForm getAllFans={this.getAllFans}/> : null} 
            </div>
        );
    }
}

export default Fans;