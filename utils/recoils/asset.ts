import { atom } from 'recoil';

export const assetState = atom({
  key: 'assetState',
  default: {
    basicFunds: 0,
    consumption: [
      {
        title: '',
        date: '',
        price: 0,
      },
    ],
  },
});
