import styled from 'styled-components';

const designOfHand = {
  hour: {
    height: 100,
    width: 4,
  },
  minute: {
    height: 130,
    width: 2,
  },
  second: {
    height: 130,
    width: 1,
  },
};

export const Hand = styled.div<{
  type: 'hour' | 'minute' | 'second';
  angle: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%) rotate(${(props) => props.angle}deg);
  transform-origin: bottom;
  height: ${(props) => designOfHand[props.type].height}px;
  width: ${(props) => designOfHand[props.type].width}px;
  background: black;
`;
