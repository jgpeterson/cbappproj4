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

   const Back = styled.div`
   background: black;

   @media screen and (max-width:450px) {
    .banner img {
        font-size: 1.25rem;
        max-width: 800px;
        justify-content: space-between;
        align: center;
        margin-left: -200%;
        
    }

    @media screen and (max-width:450px) {
        .fanphoto img {
            max-width: 150px;
            margin-left: -600%;
        }
    
        }
`
   const FanPost = styled.div `
   @media screen and (max-width:450px) {
    .des {
        font-size: 10px;
        width: 60%;
        margin-left: -300%; 
        
    }
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
            <Back>
                <Header />
            <Img>

            <div class="name">
                <div class="banner">
                <img src="https://i.imgur.com/nRryQNF.jpg"/>
                </div>
               {this.state.fans.map((fan) => {
         return ( <div key={fan.id}>
         <div class="fanphoto">
            <img src={fan.picture}/>
            <FanPost>
            <p class="des">Description: {fan.description}</p>
            </FanPost>
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
            </Back>
        );
    }
}

export default Fans;