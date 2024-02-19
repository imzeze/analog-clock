import { nowState } from '@/recoil/date';
import { positionState } from '@/recoil/tooltip';
import * as S from '@/styles/Tooltip.style';
import { useRecoilValue } from 'recoil';

export default function Tooltip() {
  const now = useRecoilValue(nowState);
  const position = useRecoilValue(positionState);

  return <S.Wrapper position={position}>{now.toLocaleTimeString()}</S.Wrapper>;
}
