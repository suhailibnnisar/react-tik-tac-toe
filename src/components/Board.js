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
  const { handleClick } = props;

  return (
    <div style={style}>
      <Square value="1" onClick={handleClick} />
      <Square value="2" onClick={handleClick} />
      <Square value="3" onClick={handleClick} />
      <Square value="4" onClick={handleClick} />
      <Square value="5" onClick={handleClick} />
      <Square value="6" onClick={handleClick} />
      <Square value="7" onClick={handleClick} />
      <Square value="8" onClick={handleClick} />
      <Square value="9" onClick={handleClick} />
    </div>
  );
};

export default Board;
