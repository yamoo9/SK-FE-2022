import styled from 'styled-components/macro';

export const Output = styled.output`
  font-size: 140px;
  font-weight: 900;
  color: ${(props) => {
    return props.theme.color ?? ' #fff';
  }};
`;
