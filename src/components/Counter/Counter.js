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

  const incrementCount = () => {
    setCount((count) => {
      let updateCountValue = count + step;
      updateCountValue = updateCountValue > max ? max : updateCountValue;
      return updateCountValue;
    });
  };

  const decrementCount = () => {
    setCount((count) => {
      let updateCountValue = count - step;
      updateCountValue = updateCountValue < min ? min : updateCountValue;
      return updateCountValue;
    });
  };

  return (
    <StyledCounter>
      <Output>{count}</Output>
      <Button.Group>
        <Button
          disabled={count === max}
          label="카운트 증가"
          onClick={incrementCount}
        >
          +
        </Button>
        <Button
          disabled={count === min}
          label="카운트 감사"
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
