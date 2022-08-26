import { useState } from 'react';
import { css } from '@emotion/css';

const controlStyle = css``;

const initialNumbers = [3, 6, 9];
let initialNewInput = 0;

function AlbumList(props) {
  // const [state, setState] = useState({
  //   today: new Date().toISOString(),
  //   lastNumber: initialNewInput,
  //   numbers: [3, 6, 9],
  // });

  let [today] = useState(() => new Date().toISOString());
  const [numbers, setNumbers] = useState(initialNumbers);
  const [newInput, setNewInput] = useState(initialNewInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setState([...state, newInput]);
    // setState({
    //   ...state,
    //   numbers: [...state.numbers, newInput],
    //   lastNumber: newInput,
    // });
    setNumbers([...numbers, newInput]); // update
    // 코드 작성 시, 업데이트 함수 바로 아래에서 업데이트 된 상태를 기대해서는 안된다.
    // console.log(`updated numbers: ${numbers}`); // [3, 6, 9, value]
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
