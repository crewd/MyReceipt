import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import BreakDownCard from '../components/common/BreakDownCard';
import { Items } from '../types/items';
import { assetState } from '../utils/recoils/asset';

const MainPage = ({ data }: { data: Items }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setBasicFunds(Number(value));
  };

  const changeBasicFunds = () => {
    if (basicFunds || basicFunds === 0) {
      setAsset((current) => ({ ...current, basicFunds: Number(basicFunds) }));
    }
    return setMenuOpened(false);
  };

  useEffect(() => {
    if (!menuOpened) {
      return setBasicFunds(asset.basicFunds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpened]);

  return (
    <div>
      <nav className="flex justify-between text-md px-[20px] py-[10px] border-b border-gray-400">
        <div>메뉴</div>
        <div>가격</div>
      </nav>
      <div>
        <button className="w-full" onClick={() => setMenuOpened(!menuOpened)}>
          <BreakDownCard title="기초 자금" price={asset.basicFunds} />
        </button>
        {menuOpened && (
          <div className="p-[20px] sm:flex justify-between bg-gray-100/80">
            <input
              className="px-[10px] sm:w-[300px] w-full py-[5px] text-regular border border-gray-300 rounded-md outline-none"
              type="number"
              min={0}
              value={basicFunds}
              placeholder="기초 자금 변경"
              onChange={inputNumber}
            />
            <div className="flex justify-end sm:justify-start sm:p-0 p-[10px]">
              <button onClick={changeBasicFunds}>수정</button>
              <button className="ml-[15px]" onClick={() => setMenuOpened(false)}>
                취소
              </button>
            </div>
          </div>
        )}

        {asset.consumption.map((consumption) => (
          <Link href={`/detail/${consumption.id}`} key={consumption.id}>
            <a>
              <BreakDownCard title={consumption.title} date={consumption.date} price={consumption.price} />
            </a>
          </Link>
        ))}
        <Link href="/write">
          <a>
            <div className="p-[10px] text-md text-center hover:bg-gray-100/80 w-full">내역 추가 </div>
          </a>
        </Link>
      </div>
      <div className="px-[20px] py-[40px] border-double border-t-4 border-gray-500 flex justify-between">
        <h2 className="text-lg font-bold">잔액</h2>
        <h2 className={`text-lg font-bold`}>{priceCalc().toLocaleString()}</h2>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    basicFunds: 100000,
    consumption: [
      {
        id: 1,
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
