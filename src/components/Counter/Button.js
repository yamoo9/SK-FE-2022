import styled from 'styled-components/macro';

const StyledButton = styled.button`
  user-select: none;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid currentColor;
  padding: 0.6em 1.2em;
  background: transparent;
  font-size: 1rem;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.6);
    background: transparent;
  }
`;

export const Button = ({ label, ...restProps }) => {
  return (
    <StyledButton
      type="button"
      aria-label={label}
      title={label}
      {...restProps}
    />
  );
};

Button.Group = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  gap: 8px;
`;
