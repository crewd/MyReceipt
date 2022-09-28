import { GetServerSideProps } from 'next';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import BreakDownCard from '../components/common/BreakDownCard';
import { assetState } from '../utils/recoils/asset';

type Data = {
  basicFunds: number;
  consumption: {
    title: string;
    date: string;
    price: number;
  }[];
};

const MainPage = ({ data }: { data: Data }) => {
  // 기초자금 수정 메뉴
  const [menuOpened, setMenuOpened] = useState(false);
  // 기초 자금
  const [basicFunds, setBasicFunds] = useState(0);
  // 내역 recoil
  const [asset, setAsset] = useRecoilState(assetState);

  useEffect(() => {
    if (data) {
      setAsset(data);
    }
  }, []);

  useEffect(() => {
    if (asset) {
      setBasicFunds(asset.basicFunds);
    }
  }, [asset]);

  const priceCalc = () => {
    let consumption = 0;

    asset.consumption.map((value) => {
      consumption += value.price;
    });

    const result = asset.basicFunds + consumption;
    return result;
  };

  const inputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setBasicFunds(Number(onlyNumber));
  };

  const changeBasicFunds = () => {
    if (basicFunds) {
      setAsset((current) => ({ ...current, basicFunds: Number(basicFunds) }));
    }
    return setMenuOpened(false);
  };

  useEffect(() => {
    if (!menuOpened) {
      setBasicFunds(asset.basicFunds);
    }
  }, [menuOpened]);

  return (
    <div>
      <nav className="flex justify-between text-md px-[20px] py-[10px] border-b border-gray-400">
        <div>메뉴</div>
        <div>가격</div>
      </nav>
      <div>
        <button className="w-full" onClick={() => setMenuOpened(!menuOpened)}>
          <BreakDownCard title="기초자금" price={asset.basicFunds} />
        </button>
        {menuOpened && (
          <div className="p-[20px] flex justify-between bg-gray-100/80">
            <input
              className="px-[10px] py-[5px] text-regular border border-gray-300 rounded-md outline-none"
              type="text"
              value={basicFunds || ''}
              placeholder="기초 자금 변경"
              onChange={inputNumber}
            />
            <div className="flex">
              <button onClick={changeBasicFunds}>수정</button>
              <button className="ml-[15px]" onClick={() => setMenuOpened(false)}>
                취소
              </button>
            </div>
          </div>
        )}

        {asset.consumption.map((consumption) => (
          <BreakDownCard
            key={consumption.title}
            title={consumption.title}
            date={consumption.date}
            price={consumption.price}
          />
        ))}
      </div>
      <div className="px-[20px] py-[40px] border-double border-t-4 border-gray-500 flex justify-between">
        <h2 className="text-lg font-bold">잔액</h2>
        <div className={`text-lg font-bold`}>{priceCalc().toLocaleString()}</div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    basicFunds: 100000,
    consumption: [
      {
        title: '이마트',
        date: '2022/09/22',
        price: -75000,
      },
    ],
  };
  return {
    props: {
      data,
    },
  };
};

export default MainPage;
