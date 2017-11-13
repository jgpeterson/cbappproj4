import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Users from './Users'
import HomePage from './HomePage'
import Discography from './Discography'
import Songs from './Songs'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    align: center;
`
const ImgWrapper = styled.img`
width: 50%;
margin: 15px;
height: 50%;
`
class MainMenu extends Component {
  render() {
    return (
      <div>
    <Header />
    <FlexContainer>
    <p class="bio">Chester Charles Bennington (March 20, 1976 – July 20, 2017) was an American singer, songwriter, and actor. He was best known as the lead singer for the rock band Linkin Park, and also served as the frontman for Dead by Sunrise and Stone Temple Pilots.

Bennington first gained prominence as a vocalist following the release of Linkin Park's debut album, Hybrid Theory, in 2000, which became a commercial success. The album was certified Diamond by the Recording Industry Association of America in 2005, making it the best-selling debut album of the decade, as well as one of the few albums ever to hit that many sales. Linkin Park's following studio albums, from Meteora (2003) to One More Light (2017), continued the band's success. Linkin Park has sold over 65 million records worldwide.

Bennington formed his own band, Dead by Sunrise, as a side project in 2005. The band's debut album, Out of Ashes, was released on October 13, 2009. He became the lead singer of Stone Temple Pilots in 2013 to release the EP High Rise on October 8, 2013, via their own record label, Play Pen, but left in 2015 to focus solely on Linkin Park. He was widely regarded as one of the top rock vocalists of the 2000s. Hit Parader magazine placed him at #46 on their list of the "100 Metal Vocalists of All Time". He also appeared in cameo roles in several films, including Crank, Crank: High Voltage and Saw 3D.

On July 20, 2017, Bennington was found dead at his home in Palos Verdes Estates, California, having committed suicide by hanging.</p>
   
    <ImgWrapper src="https://i.imgur.com/NyG8ZJV.jpg"/>

    </FlexContainer>
    </div>
    );
  }
}
export default MainMenu
