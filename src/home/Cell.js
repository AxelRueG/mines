import './style.css';

// @TODO agregar estilos y iconos a la celda
const colorCell = status => {
  switch (status) {
    case 'show':
      return 'show-cell'
    case 'flag':
      return 'flag-cell'
    default:
      return 'hidden-cell'
  }
};

const Cell = ({box, position, click}) => {
  return (
    <div
      className={`board-cell ${colorCell(box.status)}`}
      onClick={() => {
        click(position[0], position[1]);
      }}
    >
      <p>{ box.val }</p>
    </div>
  );
};

export default Cell;
