import { nowState } from '@/recoil/date';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

export const useTime = () => {
  const timerRef = useRef(0);
  const setNow = useSetRecoilState(nowState);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
};
