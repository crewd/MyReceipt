import { atom, selector } from 'recoil';
import { getList } from '../../api';
import { DetailItem, ItemList } from '../../types/items';

export const assetState = atom<ItemList>({
  key: 'assetState',
  default: {
    basicFunds: 0,
    items: [
      {
        id: 0,
        title: '',
        date: '',
        totalPrice: 0,
      },
    ],
  },
});

export const getAssetListSelector = selector<ItemList>({
  key: 'getAssetList',
  get: async ({ get }) => {
    get(assetState);
    const data = await getList();
    return data;
  },
  set: ({ set }, newValue) => {
    set(assetState, newValue);
  },
});

export const detailItemState = atom<DetailItem>({
  key: 'detailItemState',
  default: {
    id: 0,
    title: '',
    date: '',
    totalPrice: 0,
    items: [],
  },
});
