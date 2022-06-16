import React, { useState } from 'react';
//import '../styles/Card.css';


const Card = (props) => {
    const [fieldText, setFieldText] = useState('')
    const clubName = props.clubName;
    const city = props.city;
    const img = props.img;

    return (
        <div className="board">
            <h2>cards here</h2>
           
        </div>
    )
}

export default Card;
