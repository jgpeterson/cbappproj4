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
                    <img src={album.name}/>
                    <a href={album.description}>Click Here to Purchase</a>
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