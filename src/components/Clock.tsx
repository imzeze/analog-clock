import * as S from '@/styles/Clock.style';
import { useTime } from '@/hooks/useTime';

import HandList from '@/components/HandList';
import Point from '@/components/Point';
import Tooltip from '@/components/Tooltip';
import { useSetRecoilState } from 'recoil';
import { positionState } from '@/recoil/tooltip';

export default function Clock() {
  useTime();
  const setPosition = useSetRecoilState(positionState);

  const showTooltip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const hideTooltip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <>
      <S.Wrapper onMouseMove={showTooltip} onMouseLeave={hideTooltip}>
        <Point />
        <HandList />
      </S.Wrapper>
      <Tooltip />
    </>
  );
}
