import { nowState } from '@/recoil/date';
import { useRecoilValue } from 'recoil';
import * as S from '@/styles/HandList.style';

export default function HandList() {
  const time = useRecoilValue(nowState);
  const hour =
    (time.getHours() % 12) * 30 + Math.floor(time.getMinutes() / 12) * 6;
  const minute = time.getMinutes() * 6;
  const second = time.getSeconds() * 6;

  return (
    <>
      <S.Hand type="hour" angle={hour} />
      <S.Hand type="minute" angle={minute} />
      <S.Hand type="second" angle={second} />
    </>
  );
}
