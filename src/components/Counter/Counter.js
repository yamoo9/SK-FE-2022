import React from 'react';
import styled from 'styled-components/macro';
import { Button } from './Button';
import { Output } from './Output';

const StyledCounter = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 8px;
`;

export const Counter = ({ count: initialCount, step, min, max }) => {
  const [count, setCount] = React.useState(initialCount);

  // useCallback 훅 (useMemo 사용)
  // JavaScript의 함수 값을 기억
  const incrementCount = React.useCallback(() => {
    setCount((count) => {
      let updateCountValue = count + step;
      updateCountValue = updateCountValue > max ? max : updateCountValue;
      return updateCountValue;
    });
  }, [max, step]);

  // useMemo 훅
  // JavaScript의 모든 값을 기억
  const decrementCount = React.useMemo(
    () => () => {
      setCount((count) => {
        let updateCountValue = count - step;
        updateCountValue = updateCountValue < min ? min : updateCountValue;
        return updateCountValue;
      });
    },
    [min, step]
  );

  return (
    <StyledCounter>
      <Output>{count}</Output>
      <Button.Group>
        <Button
          label="카운트 증가"
          disabled={count === max}
          onClick={incrementCount}
        >
          +
        </Button>
        <Button
          label="카운트 감사"
          disabled={count === min}
          onClick={decrementCount}
        >
          -
        </Button>
      </Button.Group>
    </StyledCounter>
  );
};

Counter.defaultProps = {
  count: 0,
  step: 1,
  min: 0,
  max: 100,
};
