import styled from 'styled-components';

export const Wrapper = styled.div<{ angle: number }>`
  width: calc(300px / 12);
  height: 150px;
  transform: translate(-50%, -100%) rotate(${(props) => props.angle}deg);
  text-align: center;
`;
