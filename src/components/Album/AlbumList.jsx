import { useState } from 'react';
import { css } from '@emotion/css';

const controlStyle = css``;

let initialNewInput = 0;

function AlbumList(props) {
  const [state, setState] = useState([3, 6, 9]);
  const [newInput, setNewInput] = useState(initialNewInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState([...state, newInput]);
    setNewInput(initialNewInput);
  };

  const handleInput = (e) => {
    let { value } = e.target;
    value = Number(value);
    setNewInput(value);
  };

  return (
    <div className="AlnumList">
      <h1>앨범 리스트</h1>
      <form onSubmit={handleSubmit}>
        <div className={controlStyle} lang="en">
          <label htmlFor="newNumber">new number</label>
          {/* uncontrolled */}
          <input
            id="newNumber"
            type="number"
            defaultValue={newInput}
            // value={newInput}
            // readOnly
            // onChange={handleInput}
          />
        </div>
        <button type="submit">등록</button>
      </form>
      <ul>
        {state.map((n, i) => (
          <li key={n * i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
