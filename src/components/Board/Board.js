import Square from '../Square/Square.js';
// import { questions } from '../../data/Questions.js';
import './Board.css';

function Board(questions) {
  console.log(questions.data);
  // questions.data.forEach(question => {
  //   console.log(question);

  // });

  const sizeOfGrid = 25;
  const centerPosition = 12;
  const squares = [];
  // var shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  for (let i = 0; i < sizeOfGrid; i++) {
    squares.push(
      <Square
        key={i}
        question={i === centerPosition ? <p className="middle-square">&#x2731;</p> : questions[i]}
        class={i === centerPosition ? "square selected" : "square"}
      />)
  }

  return (
    <div className="board">
      {squares}
    </div>
  );
}

export default Board;