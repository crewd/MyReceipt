import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { DetailItem } from '../../types/items';
import { detailItemState } from '../../utils/recoils/asset';

const Detail = ({ data }: { data: DetailItem }) => {
  const [asset, setAsset] = useRecoilState(detailItemState);

  useEffect(() => {
    if (data) {
      setAsset(data);
    }
  }, []);

  return (
    <div className="flex justify-center py-[20px]">
      <div>
        <h1></h1>
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
