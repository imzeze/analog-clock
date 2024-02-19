import { nowState } from '@/recoil/date';
import { useRecoilValue } from 'recoil';
import * as S from '@/styles/HandList.style';
import { TIME } from '@/constants/time';

export default function HandList() {
  const now = useRecoilValue(nowState);
  const hour =
    (now.getHours() % TIME.LENGTH) * TIME.HOUR_ANGLE +
    Math.floor(now.getMinutes() / TIME.LENGTH) * TIME.MINUTE_ANGLE;
  const minute = now.getMinutes() * TIME.MINUTE_ANGLE;
  const second = now.getSeconds() * TIME.MINUTE_ANGLE;

  return (
    <div>
      <S.HourHand angle={hour} />
      <S.MinuteHand angle={minute} />
      <S.SecondHand angle={second} />
    </div>
  );
}
