import { Fragment, useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const style = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (!newBoard[index] && !winner) {
      newBoard[index] = xIsNext ? 'O' : 'X';
      setXIsNext(!xIsNext);
      setBoard(newBoard);
    }
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(false);
  };

  return (
    <Fragment>
      <Board squares={board} handleClick={handleClick} />
      <div style={style}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'O' : 'X')}
        </p>
        <button onClick={restartGame}>Restart</button>
      </div>
    </Fragment>
  );
};

export default Game;
