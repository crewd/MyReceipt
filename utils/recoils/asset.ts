import { atom, selector } from 'recoil';
import { getList } from '../../api';
import { DetailItem, ItemList } from '../../types/items';

export const getAssetListSelector = selector<ItemList>({
  key: 'getAssetList',
  get: () => {
    const data = getList();
    return data;
  },
});

// export const detailItemState = selector<DetailItem>({
//   key: 'detailItemState',
//   get: () => {

//   }
// });
