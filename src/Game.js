import logo from './logo.svg';
import './Game.css';
import Board from './components/Board.js';

function Game() {
  return (
    <div className="game">
      <h1>Protege Bingo!</h1>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;
