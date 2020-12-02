import Square from './Square.js';
import './Board.css';

function Board() {
  const sizeOfGrid = 25;
  const squares = [];
  
  for (let i = 0; i < sizeOfGrid; i++) {
    squares.push(<Square key={i}/>)
  }

  return (
    <div className="board">
      {squares}    
    </div>
  );
}

export default Board;