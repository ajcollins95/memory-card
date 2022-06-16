import React, { useState } from 'react';
//import '../styles/Board.css';

//import '../styles/App.css';

const Board = (props) => {
    const [fieldText, setFieldText] = useState('')
    const current = 3;
    const high = 5;
    const fieldName = props.fieldName

    return (
        <div className="board">
            <h1>Mixed Ultimate Memory Game</h1>
            <div className="scoreboard">
                <p>Current Score: {current} </p>
                <p>High Score: {high} </p>
            </div>
           
        </div>
    )
}

export default Board;
