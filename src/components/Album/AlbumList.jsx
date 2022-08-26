import { useState, useEffect } from 'react';
import { css } from '@emotion/css';

const controlStyle = css``;

const initialNumbers = [3, 6, 9];
let initialNewInput = 0;

function AlbumList(props) {
  let [today] = useState(() => new Date().toISOString());

  (() => {
    // 함수 컴포넌트가 렌더링 될 때 바로 실행
    console.log(
      '0: 함수 컴포넌트가 초기 또는 다시 렌더링 될 때 마다 실행되는 콜백 함수',
      document.querySelector(`.${controlStyle}`)
    );
  })();

  useEffect(() => {
    // 함수 컴포넌트가 렌더링 되어 실제 DOM 노드에 반영된 이후 실행
    console.log(
      '1: 함수 컴포넌트가 초기 또는 다시 렌더링 될 때 마다 실행되는 콜백 함수',
      document.querySelector(`.${controlStyle}`)
    );
  });

  useEffect(
    // 이펙트 함수(콜백)
    () => {
      // console.log('componentDidMount'); // [x] 1회만 처리
      // console.log('componentDidUpdate'); // [x] 업데이트 때마다 처리
      // console.log('componentWillUnmount'); // [x] 컴포넌트 제거 전에 처리

      const updateMousePosition = (e) => {
        console.log('x', e.pageX);
        console.log('y', e.pageY);
        console.log('----------');
      };

      // 이벤트 구독
      window.addEventListener('mousemove', updateMousePosition);
      // 이벤트 구독 취소
      return () => window.removeEventListener('mousemove', updateMousePosition);

      // 클린업 함수
      // return function cleanup() {
      // return () => {
      // 이벤트 구독 취소
      // window.removeEventListener('mousemove', updateMousePosition);
      // };
    }
    // 종속(의존)성 배열
    // []
  );

  // 관심사: newInput 상태가 업데이트 되면 OOO 한다.
  const [newInput, setNewInput] = useState(initialNewInput);
  useEffect(() => {
    console.log(`newInput = ${newInput}`);
  }, [newInput]);

  // 관심사: numbers 상태가 업데이트 되면 OOO 한다.
  const [numbers, setNumbers] = useState(initialNumbers);
  useEffect(
    // 이펙트 함수(콜백)
    () => {
      // console.log('componentDidMount'); // [x] 1회만 처리
      console.log('componentDidUpdate'); // [x] 업데이트 때마다 처리
      // console.log('componentWillUnmount'); // [ ] 컴포넌트 제거 전에 처리
    },
    // 종속(의존)성 배열
    // 배열에 추가된 선언된 상태가 업데이트 되면, 이펙트 함수(콜백) 실행
    [numbers]
  );

  /* 
    this.setState({
      numbers: [...numbers, newInput],
      anotherState: anotherState + 1
    }, () => {
      console.log(this.state.numbers);
    })
  */

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
