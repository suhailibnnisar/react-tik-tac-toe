import Square from './Square';

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board = (props) => {
  const { squares, handleClick } = props;

  return (
    <div style={style}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;
