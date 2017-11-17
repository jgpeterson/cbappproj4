import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 150px;
align-items: center;
height: 50vh;
flex-direction: column;
text-align: center;
`

class HomePage extends Component {
    render() {
        return (

      
        <FlexContainer>
                <iframe width="420" height="315"
            src="https://www.youtube.com/embed/Tm8LGxTLtQk">
                </iframe>
               <button><Link to="/MainMenu">ENTER</Link></button>
                
            </FlexContainer>
        

        )
    }
}

export default HomePage;