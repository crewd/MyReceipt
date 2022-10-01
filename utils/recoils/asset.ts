import { atom } from 'recoil';

export const assetState = atom({
  key: 'assetState',
  default: {
    basicFunds: 0,
    consumption: [
      {
        id: 0,
        title: '',
        date: '',
        price: 0,
      },
    ],
  },
});
