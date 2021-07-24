import './style.css';

const colorCell = status => {
  switch (status) {
    case 1:
      return { backgroundColor: '#b1b1b1' };
    case 4:
      return { backgroundColor: '#933' };
    default:
      return { backgroundColor: '#666' };
  }
};

const Cell = props => {
  return (
    <div
      className="board-cell"
      style={colorCell(props.status)}
      onClick={() => {
        props.click(props.position[0], props.position[1]);
      }}
    >
      {props.status === 1 ? props.value : props.status === 2 ? 'X' : ''}
    </div>
  );
};

export default Cell;
