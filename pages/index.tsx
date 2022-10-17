import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from 'recoil';
import { addPrice, changePrice } from '../api';
import BreakDownCard from '../components/common/BreakDownCard';
import { ItemList } from '../types/items';
import { getAssetListSelector } from '../utils/recoils/asset';

const MainPage = () => {
  // 기초자금 수정 메뉴
  const [menuOpened, setMenuOpened] = useState(false);
  // 기초 자금
  const [basicFunds, setBasicFunds] = useState<number>(0);

  // 내역 리스트 recoil selector 비동기
  const assetList = useRecoilValueLoadable(getAssetListSelector);
  const assetListValue: ItemList = assetList.contents;
  const refresh = useRecoilRefresher_UNSTABLE(getAssetListSelector);

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (assetListValue) {
      setBasicFunds(assetListValue.basicFunds);
    }
  }, [assetListValue]);

  const priceCalc = () => {
    let consumption = 0;

    if (assetList.state === 'loading') {
      return consumption;
    }

    if (!assetListValue.items) {
      return consumption;
    }

    assetListValue.items.map((value) => {
      consumption += value.totalPrice;
    });

    const result = assetListValue.basicFunds + consumption;
    return result;
  };

  // onChange 함수
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBasicFunds(Number(value));
  };

  // 기초 자금 추가
  const addBasicFunds = async () => {
    await addPrice(Number(basicFunds));
    refresh();
  };

  // 기초 자금 변경
  const changeBasicFunds = async () => {
    if (basicFunds === assetListValue.basicFunds) {
      return setMenuOpened(false);
    }
    if (basicFunds || basicFunds === 0) {
      await changePrice(Number(basicFunds));
      refresh();
    }
    return setMenuOpened(false);
  };

  // 메뉴 닫히면 기초 자금 input 초기화
  useEffect(() => {
    if (!menuOpened) {
      return setBasicFunds(assetListValue.basicFunds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpened]);

  return (
    <>
      {!assetListValue.basicFunds && !assetListValue.items ? (
        <div>
          <div className="p-[20px] border-b-4 border-double border-gray-400">
            <h3 className="font-bold text-md">기초 자금을 입력해 주세요</h3>
          </div>
          <div className="p-[20px] flex flex-col gap-[20px]">
            <input
              className="px-[10px] w-full py-[10px] text-regular border border-gray-300 rounded-md outline-none"
              type="number"
              value={basicFunds ? basicFunds : ''}
              placeholder="기초 자금"
              onChange={onChangeHandler}
            />
            <button
              className="w-full p-[10px] shadow-md rounded-md border hover:bg-primary hover:text-white"
              onClick={addBasicFunds}>
              입력
            </button>
          </div>
        </div>
      ) : (
        <div>
          <nav className="flex justify-between text-md px-[20px] py-[10px] border-b border-gray-400">
            <div>메뉴</div>
            <div>가격</div>
          </nav>
          <div>
            <button className="w-full" onClick={() => setMenuOpened(!menuOpened)}>
              <BreakDownCard title="기초 자금" price={assetListValue.basicFunds} />
            </button>
            {menuOpened && (
              <div className="p-[20px] sm:flex justify-between bg-gray-100/80">
                <input
                  className="px-[10px] sm:w-[300px] w-full py-[5px] text-regular border border-gray-300 rounded-md outline-none"
                  type="number"
                  min={0}
                  value={basicFunds ? basicFunds : ''}
                  placeholder="기초 자금 변경"
                  onChange={onChangeHandler}
                />
                <div className="flex justify-end sm:justify-start sm:p-0 p-[10px]">
                  <button onClick={changeBasicFunds}>수정</button>
                  <button className="ml-[15px]" onClick={() => setMenuOpened(false)}>
                    취소
                  </button>
                </div>
              </div>
            )}

            {assetListValue.items &&
              assetListValue.items.map((consumption, index) => (
                <Link href={`/detail?id=${index + 1}`} key={consumption.title}>
                  <a>
                    <BreakDownCard title={consumption.title} date={consumption.date} price={consumption.totalPrice} />
                  </a>
                </Link>
              ))}
            <Link href="/write" replace>
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
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    basicFunds: 0,
    items: [],
  };
  return {
    props: {
      data,
    },
  };
};

export default MainPage;
