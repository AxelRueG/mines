import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Start = ({ handleSelection }) => {
  const [selected, setSelected] = useState(10)
  const start = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();
    handleSelection(selected);
    start('/mines/game')
  };

  const handleSelected = event => {
    console.log(typeof(event.target.value), event.target.value)
    setSelected(Number(event.target.value))
  };

  return (
    <div>
      <h2 className='startTitle'>select dificult</h2>
      <form onSubmit={handleSubmit}>
        <select className='selectInput' onChange={handleSelected}>
          <option value="10" defaultValue>
            10x10
          </option>
          <option value="15">15x15</option>
          <option value="20">20x20</option>
        </select>
        <button className='buttonSubmit'>Play</button>
      </form>
    </div>
  );
}

export default Start;
