import * as S from '@/styles/Clock.style';
import { useTime } from '@/hooks/useTime';

import HandList from '@/components/HandList';
import PointList from '@/components/PointList';
import Tooltip from '@/components/Tooltip';
import { useSetRecoilState } from 'recoil';
import { positionState } from '@/recoil/tooltip';

export default function Clock() {
  useTime();
  const setPosition = useSetRecoilState(positionState);

  const showTooltip: React.MouseEventHandler = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const hideTooltip: React.MouseEventHandler = (e) => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <>
      <S.Wrapper onMouseMove={showTooltip} onMouseLeave={hideTooltip}>
        <PointList />
        <HandList />
      </S.Wrapper>
      <Tooltip />
    </>
  );
}
