import Square from './Square';

const Board = (props) => {
  const { handleClick } = props;

  return (
    <div>
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
