import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Start = ({ handleSelection }) => {
  const [selected, setSelected] = useState(8)
  const start = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();
    handleSelection(selected);
    start('/game')
  };

  const handleSelected = event => setSelected(Number(event.target.value))

  return (
    <div>
      <h2 className='startTitle'>select dificult</h2>
      <form onSubmit={handleSubmit}>
        <select className='selectInput' onChange={handleSelected}>
          <option value="8" defaultValue>
            8x8
          </option>
          <option value="16">16x16</option>
          <option value="20">20x20</option>
        </select>
        <button className='buttonSubmit'>Play</button>
      </form>
    </div>
  );
}

export default Start;
