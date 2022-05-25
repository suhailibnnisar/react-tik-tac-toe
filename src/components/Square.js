const style = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

const Square = (props) => {
  const { value, handleClick } = props;

  return (
    <button style={style} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
