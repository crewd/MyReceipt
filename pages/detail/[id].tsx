import { GetServerSideProps } from 'next';

type Data = {
  title: string;
  date: string;
  totalPrice: number;
  items: {
    id: number;
    subTitle: string;
    price: number;
  }[];
};

const Detail = ({ data }: { data: Data }) => {
  console.log(data);
  return (
    <div>
      <p>상세 페이지</p>
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
