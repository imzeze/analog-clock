import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 12px;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: bottom;
  }
`;
