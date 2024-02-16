import * as S from '@/styles/Point.style';
import { v1 } from 'uuid';

export default function Point() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return numbers.map((num, idx) => (
    <S.Wrapper key={v1()} angle={(360 / 12) * (idx + 1)}>
      {num}
    </S.Wrapper>
  ));
}
