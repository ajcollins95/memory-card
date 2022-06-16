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
    const [fieldText, setFieldText] = useState('')
    const current = 3;
    const high = 5;
    const fieldName = props.fieldName


    return (
        <div className="board">
            <Card 
              clubName='AMP'
              city='Philadelphia, PA'
              img={AMP}
            />
           
        </div>
    )
}

export default Board;
