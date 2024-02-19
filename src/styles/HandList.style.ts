import styled from 'styled-components';

const Hand = styled.div<{
  angle: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%) rotate(${(props) => props.angle}deg);
  transform-origin: bottom;
  background: black;
`;

export const HourHand = styled(Hand)`
  height: 100px;
  width: 4px;
`;

export const MinuteHand = styled(Hand)`
  height: 130px;
  width: 2px;
`;

export const SecondHand = styled(Hand)`
  height: 130px;
  width: 1px;
`;
