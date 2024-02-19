import { TIME } from '@/constants/time';
import * as S from '@/styles/PointList.style';
import { v1 } from 'uuid';

export default function PointList() {
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return points.map((point, idx) => (
    <S.Wrapper key={v1()} angle={(360 / TIME.LENGTH) * (idx + 1)}>
      {point}
    </S.Wrapper>
  ));
}
