import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const FlexContainer = styled.div`
display: center;
justify-content: space-around;
text-align: center;
padding: 150px

`


class HomePage extends Component {
    render() {
        return (

      
        <FlexContainer>
                <iframe width="420" height="315"
            src="https://www.youtube.com/embed/Tm8LGxTLtQk">
                </iframe>
                <div class="enter">
                <Link to="/MainMenu">Click to Enter</Link>
                </div>
            </FlexContainer>
        

        )
    }
}

export default HomePage;