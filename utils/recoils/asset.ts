import { selector, selectorFamily } from 'recoil';
import { getDetailItem, getList } from '../../api';
import { DetailItem, ItemList } from '../../types/items';

export const getAssetListSelector = selector<ItemList>({
  key: 'getAssetListSelector',
  get: () => {
    const data = getList();
    return data;
  },
});

export const getDetailItemSelector = selectorFamily<DetailItem, number>({
  key: 'getDetailItemSelector',
  get: (id: number) => () => {
    const detailItem = getDetailItem(id);
    return detailItem;
  },
});
