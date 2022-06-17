import React, { useState } from 'react';
import '../styles/Card.css';


const Card = (props) => {
    const [fieldText, setFieldText] = useState('')
    const clubName = props.clubName;
    const city = props.city;
    const img = props.img;

    const handleClick = () => {
        alert(props.clubName)
    }

    return (
        <div className="card" onClick={props.onClick} >
            <div className='logo'>
                <img src={img}></img>
            </div>
            <div className="name">
                <h4>{clubName}</h4>
            </div>
            <div className='city'>
                <p>{city}</p>
            </div>           
        </div>
    )
}

export default Card;
