import React, { useState } from 'react';
import '../styles/Board.css';


const Board = (props) => {
    const [fieldText, setFieldText] = useState('')
    const current = 3;
    const high = 5;
    const fieldName = props.fieldName


    return (
        <div className="board">
            <h2>cards here</h2>
           
        </div>
    )
}

export default Board;
