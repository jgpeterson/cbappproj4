import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewFanForm from './NewFanForm'
import styled from 'styled-components'
import Header from './Header'




const Img = styled.div`
text-align: center;
   display: inline-block;
   width:85%;
   
   margin-bottom: 8px;
   margin-right: 8px;
   margin-left: 170px;
   border-radius: 50px;
   padding: 15em;
   position: relative;
   min-width: 340px;
   max-width: 850px;
   `

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
            <Img>
            <div class="name">
                <Header />
               {this.state.fans.map((fan) => {
         return ( <div key={fan.id}>
         <div>
            <img src={fan.picture}/>
            <p>Description: {fan.description}</p>
            
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
            </Img>
        );
    }
}

export default Fans;