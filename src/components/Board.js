import Square from './Square.js';
import { questions } from '../Questions';
import './Board.css';

function Board() {
  const sizeOfGrid = 25;
  const squares = [];
  var shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  for (let i = 0; i < sizeOfGrid; i++) {
    squares.push(<Square key={i} question={shuffledQuestions[i]} />)
  }

  return (
    <div className="board">
      {squares}
    </div>
  );
}

export default Board;