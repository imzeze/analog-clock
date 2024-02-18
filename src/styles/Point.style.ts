import styled from 'styled-components';

export const Wrapper = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(${(props) => props.angle}deg);
  width: calc(300px / 12);
  height: 150px;
  text-align: center;
`;
