import Square from './Square.js';
import './Board.css';

function Board() {
    return (
      <div className="board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
      </div>
    );
  }

export default Board;