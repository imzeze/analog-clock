import { atom } from 'recoil';

export const positionState = atom({
  key: 'positionState',
  default: {
    x: 0,
    y: 0,
  },
});
