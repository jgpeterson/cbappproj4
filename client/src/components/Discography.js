import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`
display: inline-block;
text-align: center;
padding: 40px;
margin: 20px;
`

class Discography extends Component {
    state = {
        discography: [],
       
    }

    componentWillMount() {
        this.getAllDiscography()
    }

    getAllDiscography = async () => {
        const res = await axios.get('/api/discography')
        this.setState({ discography: res.data })
    }

    render() {

        const albums = this.state.discography.map((album) => {
            return (
                <FlexContainer>
                <div class="photo">
                    <img src={album.name}/>
                    <div>
                    <a href={album.description}>Click Here to Purchase</a>
                    </div>
                </div>
                </FlexContainer>
            )
        })

        return (
            <div>
                <Header />
                {albums}
            </div>
        )
    }
}
            
export default Discography;