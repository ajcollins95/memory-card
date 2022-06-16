import React, { useState } from 'react';
import Card from './Card'
import '../styles/Board.css';

import img_AMP from '../assets/PhiladelphiaAMP.png'
import img_BFG from '../assets/BFG_Logo.jpg'
import img_DnT from '../assets/DragnThrustLogo.jpg'
import img_Mis from '../assets/MischiefLogo.png'
import img_Mix from '../assets/Mixtape_Logo.jpg'
import img_MD from '../assets/Moondog_Logo.jpg'
import img_PB from '../assets/PolarBearsLogo.jpg'
import img_PE from '../assets/PublicEnemy_Logo.jpg'
import img_Shm from '../assets/shame.Logo_.jpg'
import img_SW from '../assets/SlowWhiteLogo.jpg'
import img_SC from '../assets/SnakeCountryLogo.png'
import img_CC from '../assets/2018TCT_ColumbusCocktails-1.jpg'
import img_SH from '../assets/SpaceHeaterLogo.jpg'
import img_SL from '../assets/SuperlameLogo.png'
import img_Toro from '../assets/ToroLogo.jpg'
import img_WC from '../assets/WildCardLogo_Color.jpg'

const Board = (props) => {
    //metadata for teams
    const teamData = [
      {
        name: 'Philadelphia AMP',
        city: 'Philadelphia, PA',
        img: img_AMP
      },
      {
        name: 'Seattle BFG',
        city: 'Seattle, Washington',
        img: img_BFG
      },
      {
        name: 'Columbus Cocktails',
        city: 'Columbus, OH',
        img: img_CC
      },
      {
        name: "Minneapolis Drag'n Thrust",
        city: 'Minneapolis, MN',
        img: img_DnT
      },
      {
        name: 'San Francisco Mischief',
        city: 'San Francisco, CA',
        img: img_Mis
      },
      {
        name: 'Seattle Mixtape',
        city: 'Seattle, WA',
        img: img_Mix
      },
      {
        name: 'Montana Moondog',
        city: 'Montana, MT',
        img: img_MD
      },
      {
        name: 'San Francisco Polar Bears',
        city: 'San Francisco, CA',
        img: img_PB
      },
      {
        name: 'Dallas Public Enemy',
        city: 'Dallas, TX',
        img: img_PE
      },
      {
        name: 'Fort Collins shame.',
        city: 'Fort Collins, CO',
        img: img_Shm
      },
      {
        name: 'Boston Slow White',
        city: 'Boston, MA',
        img: img_SW
      },
      {
        name: 'Boston Snake Country',
        city: 'Boston, MA',
        img: img_SC
      },
      {
        name: 'DC Space Heater',
        city: 'Washington, DC',
        img: img_SH
      },
      {
        name: 'Asheville Superlame',
        city: 'Asheville, NC',
        img: img_SL
      },
      {
        name: 'Durham Toro',
        city: 'Durham, NC',
        img: img_Toro
      },
      {
        name: 'Boston Wild Card',
        city: 'Boston, MA',
        img: img_WC
      }
    ]

    const [teams, setTeams] = useState(teamData)

    const createCards = () => {
      let cardRows = []
      for (var i = 0; i < teams.length; i++) {
          //console.log(props.fields[i])
          let team = teams[i]
          cardRows.push(<Card 
                          clubName={team.name} 
                          key={i} 
                          city={team.city}
                          img={team.img}
                          />)
      }
      return cardRows
  }


    return (
        <div className="board">
            {createCards()}
           
        </div>
    )
}

export default Board;
