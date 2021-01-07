import './Square.css';
import React, { useState } from 'react';

function Square(props) {
    const [selected, setSelected] = useState(false);

    function toggleSquareSelect() {
        if (selected) { setSelected(false) }
        else { setSelected(true) }
    }

    return (
        <div
            className={`${props.class} ${selected ? "selected" : ""}`}
            onClick={() => toggleSquareSelect()}
        >
            {props.question}
        </div>
    );
}

export default Square;