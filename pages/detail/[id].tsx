import { useRouter } from 'next/router';
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from 'recoil';
import { deleteItem } from '../../api';
import BreakDownCard from '../../components/common/BreakDownCard';
import { DetailItem } from '../../types/items';
import { getAssetListSelector, getDetailItemSelector } from '../../utils/recoils/asset';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const detailItem = useRecoilValueLoadable(getDetailItemSelector(Number(id)));
  const detailItemData: DetailItem = detailItem.contents;
  const refresh = useRecoilRefresher_UNSTABLE(getAssetListSelector);
  // const detailItemData = {
  //   title: '이마트',
  //   date: '2022/09/22',
  //   totalPrice: -75000,
  //   items: [
  //     {
  //       id: 1,
  //       subTitle: '쌀 20kg',
  //       price: -55000,
  //     },
  //     {
  //       id: 2,
  //       subTitle: '만두',
  //       price: -9000,
  //     },
  //     {
  //       id: 3,
  //       subTitle: '삼겹살',
  //       price: -12000,
  //     },
  //     {
  //       id: 4,
  //       subTitle: '할인',
  //       price: 1000,
  //     },
  //   ],
  // };

  const deleteDetailItem = async () => {
    await deleteItem(Number(id));
    refresh();
    return router.replace('/');
  };

  return (
    <>
      {detailItem.state === 'hasValue' && detailItemData && (
        <div>
          <div className="py-[15px] border-b w-full border-gray-400">
            <h2 className="text-xl font-semibold text-center">{detailItemData.title}</h2>
          </div>
          <nav className="flex justify-between text-md px-[20px] py-[10px] border-b border-gray-400">
            <div>메뉴</div>
            <div>가격</div>
          </nav>
          <div className="border-b-4 border-gray-400 border-double">
            {detailItemData.items.map((data) => {
              return <BreakDownCard key={data.id} title={data.subTitle} price={data.price} />;
            })}
          </div>
          <div className="px-[20px] py-[40px] border-double border-t-4 border-gray-500 flex justify-between">
            <h2 className="text-lg font-bold">Total</h2>
            <h2 className={`text-lg font-bold`}>{detailItemData.totalPrice.toLocaleString()}</h2>
          </div>
          <div className="py-[20px]">
            <button
              className="w-full p-[10px] shadow-md rounded-md border hover:bg-red-500 hover:text-white"
              onClick={deleteDetailItem}>
              삭제
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
