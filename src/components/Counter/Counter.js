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

  const incrementCount = React.useCallback(() => {
    setCount((count) => {
      let updateCountValue = count + step;
      updateCountValue = updateCountValue > max ? max : updateCountValue;
      return updateCountValue;
    });
  }, [max, step]);

  const decrementCount = React.useCallback(() => {
    setCount((count) => {
      let updateCountValue = count - step;
      updateCountValue = updateCountValue < min ? min : updateCountValue;
      return updateCountValue;
    });
  }, [min, step]);

  // 파생 상태
  let isMin = count === min;
  let isMax = count === max;

  // + 버튼 렌더링 된 값을 메모
  const memoizedIncButton = React.useMemo(
    () => (
      <Button label="카운트 증가" disabled={isMax} onClick={incrementCount}>
        +
      </Button>
    ),
    [isMax, incrementCount]
  );

  const memoizedDecButton = React.useMemo(
    () => (
      <Button label="카운트 감사" disabled={isMin} onClick={decrementCount}>
        -
      </Button>
    ),
    [isMin, decrementCount]
  );

  return (
    <StyledCounter>
      <Output>{count}</Output>
      <Button.Group>
        {memoizedIncButton}
        {memoizedDecButton}
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
