import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Header extends Component {
    render() {
        return (
        
            <div>
            <div className="container">
            <div className="item">
              <Link to="/MainMenu">Main Menu</Link>
            </div>
            <div className="item">
              <Link to="/user">Street Team</Link>
            </div>
            <div className="item">
            <Link to="/discography">Discography</Link>
            </div>
            <div className="item">
            <Link to="/songs">Singles</Link>
            </div>
            <div className="item">
            <Link to="/fans">Fans</Link>
            </div>
            </div>
            </div>
            
        );
    }
}

export default Header;