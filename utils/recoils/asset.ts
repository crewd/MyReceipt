import { atom } from 'recoil';
import { DetailItem, Items } from '../../types/items';

export const assetState = atom<Items>({
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

export const detailItemState = atom<DetailItem>({
  key: 'detailItemState',
  default: {
    title: '',
    date: '',
    totalPrice: 0,
    items: [
      {
        id: 0,
        subTitle: '',
        price: 0,
      },
    ],
  },
});
