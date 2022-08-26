import styled from 'styled-components';

export const StyledA11yHidden = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  ${({ focusable }) => {
    return focusable
      ? /* css */ `
      &:focus {
        overflow: auto;
        position: static;
        clip: unset;
        clip-path: none;
        width: initial;
        height: initial;
        marget: auto;
        border: initial;
        padding: initial;
        white-space: wrap;
      }
      `
      : '';
  }}
`;

StyledA11yHidden.displayName = 'StyledA11yHidden';
