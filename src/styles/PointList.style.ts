import { TIME } from '@/constants/time';
import styled from 'styled-components';

export const Wrapper = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(${(props) => props.angle}deg);
  width: calc(100% / ${TIME.LENGTH});
  height: 150px;
  text-align: center;
`;
