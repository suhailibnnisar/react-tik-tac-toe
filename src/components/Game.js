import { Fragment, useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const style = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(false);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (index) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    if (winner || squares[index]) return;

    squares[index] = xIsNext ? 'O' : 'X';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (index) => {
    setStepNumber(index);
    setXIsNext(index % 2 === 0);
  };

  return (
    <Fragment>
      <Board squares={history[stepNumber]} handleClick={handleClick} />
      <div style={style}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'O' : 'X')}
        </p>
        {history.map((_, index) => {
          const destination = index ? `Go to move #${index}` : 'Restart';
          return (
            <li>
              <button onClick={() => jumpTo(index)}>{destination}</button>
            </li>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Game;
