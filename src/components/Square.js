const Square = (props) => {
  const { value, handleClick } = props;

  return <button onClick={handleClick}>{value}</button>;
};

export default Square;
