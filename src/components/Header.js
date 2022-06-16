import React, { useState } from 'react';
import '../styles/Header.css';

//import '../styles/App.css';

const Header = (props) => {
    const [fieldText, setFieldText] = useState('')
    const current = 3;
    const high = 5;
    const fieldName = props.fieldName

    return (
        <div className="header">
            <h1>Mixed Ultimate Memory Game</h1>
            <div className="scoreboard">
                <p>Current Score: {current} </p>
                <p>High Score: {high} </p>
            </div>
           
        </div>
    )
}

export default Header;
