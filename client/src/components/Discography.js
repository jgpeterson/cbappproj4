import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
                <div>
                    <h2>Name: {album.name}</h2>
                    <p>Description: {album.description}</p>
                </div>
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