import logo from './logo.svg';
import './Game.css';
import Board from './components/Board.js';

function Game() {
  return (
    <div className="Game">
      <h1>Protege Bingo!</h1>
        <div className="game-board">
          <Board />
        </div>
    </div>
  );
}

export default Game;
