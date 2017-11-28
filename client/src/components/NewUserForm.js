import React, { Component } from 'react'
import axios from 'axios'
import DropZone from 'react-dropzone'
import styled from 'styled-components'


class NewUserForm extends Component {
    state = {
        picture: '',
        name: '',
        favorite_album: '',
        favorite_song: '',
        fan_since: '',
        profile_picture: ''
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    uploadWidget = () => {
        window.cloudinary.openUploadWidget({ cloud_name: 'dvxweknce', upload_preset: 'i8c4rkri'},
            (error, result) => {
                console.log(result);
                this.setState({profile_picture: result[0].url})
            });
    }
    handleDrop = (files) => {
        console.log(files)
        this.setState({profile_picture: files[0]})
    }

    changeFile = (e) => {
        var reader = new FileReader();
        var file = e.currentTarget.files[0];
        console.log(file)
        var that = this;

        reader.onloadend = function () {
            that.setState({ profile_picture: reader.result, imageFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ profile_picture: "", imageFile: null });
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name,
            favorite_album: this.state.favorite_album,
            favorite_song: this.state.favorite_song,
            fan_since: this.state.fan_since,
            profile_picture: this.state.profile_picture
        }


        await axios.post('/api/users', payload)
        await this.setState({
            name: "",
        favorite_album: "",
        favorite_song: "",
        fan_since: "",
        profile_picture: ""
    })
        await this.props.getAllUsers()
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <div class="new">
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                </div>
                <div class="new">
                    <label htmlFor="favorite_album">Favorite Album: </label>
                    <input onChange={this.handleChange} type="text" name="favorite_album" value={this.state.favorite_album} />
                </div>
                <div class="new">
                    <label htmlFor="favorite_song">Favorite Song: </label>
                    <input onChange={this.handleChange} type="text" name="favorite_song" value={this.state.favorite_song} />
                </div>
                <div class="new">
                    <label htmlFor="fan_since">Fan Since: </label>
                    <input onChange={this.handleChange} type="text" name="fan_since" value={this.state.fan_since} />
                </div>
                <div onClick={this.uploadWidget}><button>Upload Profile Pic</button></div>
                {/* <DropZone onDrop={this.handleDrop}>
                    <p>Click or Drag an image to upload</p>
                </DropZone> */}
                {/* <div>
                    <label htmlFor="profile_picture" />
                    <input type="file" onChange={this.changeFile} name="profile_picture" value={this.state.profile_picture} />
                </div> */}
                <button>Submit</button>
            </form>
             
        )
    }
}

export default NewUserForm