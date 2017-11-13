import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
const FlexContainer = styled.div`
display: inline-block;
padding: 10px;
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
                    <a href={album.description}>Click Here to Purchase</a>
                </div>
                </FlexContainer>
            )
        })

        return (
            <div>
                {albums}
            </div>
        )
    }
}
            
export default Discography;