import { css } from '@emotion/css';
import { useState } from 'react';
import { useFetch } from 'hooks/useFetch';

const controlStyle = css``;

const initialNumbers = [3, 6, 9];
let initialNewInput = 0;

function AlbumList(props) {
  let [today] = useState(() => new Date().toISOString());
  const [newInput, setNewInput] = useState(initialNewInput);
  const [numbers, setNumbers] = useState(initialNumbers);

  /* fetch data (async action) ------------------------------------------------ */

  const { isLoading, hasError, error, data } = useFetch(
    'http://localhost:4000/beverage-menu'
  );

  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (hasError) {
    return <div role="alert">{error.message}</div>;
  }

  console.log({ beverages: data });

  /* -------------------------------------------------------------------------- */

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumbers([...numbers, newInput]);
    setNewInput(initialNewInput);
  };

  const handleInput = (e) => {
    let { value } = e.target;
    value = Number(value);
    setNewInput(value);
  };

  return (
    <div className="AlnumList">
      <h1>앨범 리스트 {today}</h1>
      <form onSubmit={handleSubmit}>
        <div className={controlStyle} lang="en">
          <label htmlFor="newNumber">new number</label>
          {/* uncontrolled */}
          <input
            id="newNumber"
            type="number"
            value={newInput}
            onChange={handleInput}
          />
        </div>
        <button type="submit">등록</button>
      </form>
      <ul>
        {numbers.map((n, i) => (
          <li key={n * i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
