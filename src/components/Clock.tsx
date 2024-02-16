import HandList from '@/components/HandList';
import Point from '@/components/Point';
import * as S from '@/styles/Clock.style';
import { useTime } from '@/hooks/useTime';

export default function Clock() {
  useTime();

  return (
    <S.Wrapper>
      <Point />
      <HandList />
    </S.Wrapper>
  );
}
