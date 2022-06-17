import React, { useState } from 'react';
import '../styles/Header.css';

//import '../styles/App.css';

const Header = (props) => {
    const [fieldText, setFieldText] = useState('')
    const fieldName = props.fieldName

    return (
        <div className="header">
            <h1>Mixed Ultimate Memory Game</h1>
            <div className="scoreboard">
                <p>Current Score: {props.score} </p>
                <p>High Score: {props.highScore} </p>
            </div>
           
        </div>
    )
}

export default Header;
