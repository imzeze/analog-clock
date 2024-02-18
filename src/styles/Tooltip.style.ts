import styled from 'styled-components';

export const Wrapper = styled.div<{ position: { x: number; y: number } }>`
  position: fixed;
  top: -60px;
  width: 100px;
  padding: 12px;
  border: 1px solid black;
  background: white;
  visibility: ${(props) =>
    props.position.x || props.position.y ? 'visible' : 'hidden'};
  transform: translate(
    ${(props) => `${props.position.x}px, ${props.position.y}px`}
  );
`;
