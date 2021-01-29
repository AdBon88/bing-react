import './Game.css';
import Board from './components/Board/Board.js';

function Game(questions) {
  return (
    <div className="game">
      <div className="titles">
        <h2 className="sub-title">All about me...</h2>
        <h1 className="main-title">BINGO!</h1>
      </div>
      <div className="game-board">
        <Board data={questions} />
      </div>
    </div>
  );
}

export default Game;
