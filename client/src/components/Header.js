import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
           
            <div>
            <div className="container">
            <div className="item">
              <Link to="/MainMenu">HomePage</Link>
            </div>
            <div className="item">
              <Link to="/user">UserPage</Link>
            </div>
            <div className="item">
            <Link to="/discography">Discography</Link>
            </div>
            <div className="item">
            <Link to="/songs">Remixes</Link>
            </div>
            </div>
            </div>
            
        );
    }
}

export default Header;