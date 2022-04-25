import './style.css';

// @TODO agregar estilos y iconos a la celda
const colorCell = ({val, status}, gameStatus) => {
  if (val === -1 && gameStatus === 'gameover') return 'mine-cell'

  if (status === 'show') return 'show-cell'
  else return 'hidden-cell'
}

// <i className='fas fa-arrow-up'></i>

const Cell = ({gameStatus, box, position, click}) => {
  return (
    <div
      className={`board-cell ${colorCell(box,gameStatus)}`}
      onClick={() => {
        click(position[0], position[1]);
      }}
    >
      <p>{ 
        ((box.status === 'flag') && <i className="fa fa-flag"></i>) ||
        ((gameStatus === 'gameover' && box.val===-1) && <i className="fa fa-bomb"></i>) ||
        ((box.status === 'show' && box.val!==0) && box.val)
      }</p>
    </div>
  )
}

export default Cell;
