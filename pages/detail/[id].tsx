import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import BreakDownCard from '../../components/common/BreakDownCard';
import { DetailItem } from '../../types/items';
import { detailItemState } from '../../utils/recoils/asset';

const Detail = ({ data }: { data: DetailItem }) => {
  const [detailItem, setDetailItem] = useRecoilState(detailItemState);

  useEffect(() => {
    if (data) {
      setDetailItem(data);
    }
  }, []);

  return (
    <div>
      <div className="py-[15px] border-b w-full border-gray-400">
        <h2 className="text-xl font-bold text-center">{detailItem.title}</h2>
      </div>
      <nav className="flex justify-between text-md px-[20px] py-[10px] border-b border-gray-400">
        <div>메뉴</div>
        <div>가격</div>
      </nav>
      <div className="border-b-4 border-gray-400 border-double">
        {detailItem.items.map((data) => {
          return <BreakDownCard key={data.id} title={data.subTitle} price={data.price} />;
        })}
      </div>
      <div className="px-[20px] py-[40px] border-double border-t-4 border-gray-500 flex justify-between">
        <h2 className="text-lg font-bold">Total</h2>
        <h2 className={`text-lg font-bold`}>{detailItem.totalPrice}</h2>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    title: '이마트',
    date: '2022/09/22',
    totalPrice: -75000,
    items: [
      {
        id: 1,
        subTitle: '쌀 20kg',
        price: -55000,
      },
      {
        id: 2,
        subTitle: '만두',
        price: -9000,
      },
      {
        id: 3,
        subTitle: '삼겹살',
        price: -12000,
      },
      {
        id: 4,
        subTitle: '할인',
        price: 1000,
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
};

export default Detail;
