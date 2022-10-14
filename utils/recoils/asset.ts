import { atom, selector } from 'recoil';
import { getList } from '../../api';
import { DetailItem, ItemList } from '../../types/items';

export const getAssetListSelector = selector<ItemList>({
  key: 'getAssetList',
  get: async () => {
    const data = await getList();
    return data;
  },
});

export const detailItemState = atom<DetailItem>({
  key: 'detailItemState',
  default: {
    title: '',
    date: '',
    totalPrice: 0,
    items: [],
  },
});
