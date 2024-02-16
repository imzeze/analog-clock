import { atom } from 'recoil';

export const nowState = atom({
  key: 'nowState',
  default: new Date(),
});
