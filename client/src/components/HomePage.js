import React, { Component } from 'react';
import styled from 'styled-components'

const FlexContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 150px;
float: center;
`


class HomePage extends Component {
    render() {
        return (

            <FlexContainer> 
            <div>
                <iframe width="420" height="315"
            src="https://www.youtube.com/embed/Tm8LGxTLtQk">
                </iframe>
            </div>
        </FlexContainer>

        )
    }
}

export default HomePage;