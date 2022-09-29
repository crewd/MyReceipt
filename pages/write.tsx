import { useEffect, useState } from 'react';
import BreakDownCard from '../components/common/BreakDownCard';

type Content = {
  subTitle: string;
  price: number | string;
  id: number;
};

const WritePage = () => {
  const [mainTitle, setMainTitle] = useState('');
  const [date, setDate] = useState({ year: '', month: '', day: '' });
  const { year, month, day } = date;

  const [contents, setContents] = useState<Content[]>([]);
  const [content, setContent] = useState<Content>({ subTitle: '', price: '', id: 0 });
  const { subTitle, price } = content;

  const [income, setIncome] = useState(true);
  const [expenditure, setExpenditure] = useState(false);

  const [idCount, setIdCount] = useState(1);

  useEffect(() => {
    if (income) {
      return setExpenditure(false);
    }
  }, [income]);

  useEffect(() => {
    if (expenditure) {
      return setIncome(false);
    }
  }, [expenditure]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMainTitle(value);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDate((current) => ({ ...current, [name]: value }));
  };

  const addContent = () => {
    if (!subTitle || !price) {
      return;
    }
    if (expenditure) {
      setContents([...contents, { subTitle: content.subTitle, price: -content.price, id: idCount }]);
    }
    if (income) {
      setContents([...contents, { subTitle: content.subTitle, price: content.price, id: idCount }]);
    }
    setIdCount(idCount + 1);
  };

  useEffect(() => {
    if (contents) {
      setContent({ subTitle: '', price: '', id: 0 });
    }
  }, [contents]);

  const deleteContent = (id: number) => {
    setContents(contents.filter((data) => data.id !== id));
  };

  const submitData = () => {
    if (!mainTitle || !date || !contents) {
      return;
    }
    const data = {
      title: mainTitle,
      date: date,
      consumption: contents,
    };
    console.log(data);
  };

  return (
    <div className="pb-[20px]">
      <div className="p-[20px] w-full sm:flex sm:justify-between">
        <h3 className="text-md pb-[10px]">날짜 선택</h3>
        <div className="flex">
          <div className="border-b border-gray-400 px-[10px] py-[5px] sm:w-[55px] w-full">
            <input
              className="w-full text-center outline-none"
              name="year"
              type="number"
              placeholder="년"
              value={year}
              maxLength={4}
              onChange={onChangeDate}
            />
          </div>
          <div className="border-b border-gray-400 px-[10px] py-[5px] sm:w-[55px] w-full ml-[10px]">
            <input
              className="w-full text-center outline-none"
              name="month"
              type="number"
              placeholder="월"
              value={month}
              onChange={onChangeDate}
            />
          </div>
          <div className="border-b border-gray-400 px-[10px] py-[5px] sm:w-[55px] w-full ml-[10px]">
            <input
              className="w-full text-center outline-none"
              name="day"
              type="number"
              placeholder="일"
              value={day}
              onChange={onChangeDate}
            />
          </div>
        </div>
      </div>
      <div className="p-[20px] sm:flex sm:justify-between">
        <h3 className="text-md pb-[10px]">제목</h3>
        <input
          className="px-[10px] py-[5px] sm:w-[300px] w-full text-regular border border-gray-300 rounded-md outline-none"
          type="text"
          value={mainTitle}
          placeholder="제목"
          onChange={onChangeTitle}
        />
      </div>
      <div className="border-gray-400 border-t p-[20px]">
        <div className="flex justify-between pb-[20px]">
          <button
            className={`${
              income ? 'bg-primary text-white' : 'bg-white'
            } shadow-md w-full p-[10px]  rounded-tl-md rounded-bl-md`}
            onClick={() => setIncome(true)}>
            소득
          </button>
          <button
            className={`${
              expenditure ? 'bg-primary text-white' : 'bg-white'
            } shadow-md w-full p-[10px] rounded-tr-md rounded-br-md`}
            onClick={() => setExpenditure(true)}>
            지출
          </button>
        </div>
        <div className="py-[20px] sm:flex sm:justify-between">
          <h3 className="text-md pb-[10px]">세부 항목</h3>
          <input
            name="subTitle"
            className="px-[10px] py-[5px] sm:w-[300px] w-full text-regular border border-gray-300 rounded-md outline-none"
            type="text"
            value={subTitle}
            placeholder="세부 항목 명"
            onChange={onChangeHandler}
          />
        </div>
        <div className="py-[20px] sm:flex sm:justify-between">
          <h3 className="text-md pb-[10px]">가격</h3>
          <input
            name="price"
            className="px-[10px] py-[5px] sm:w-[300px] w-full text-regular border border-gray-300 rounded-md outline-none"
            type="number"
            value={price}
            placeholder="세부 항목 가격"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mt-[20px]">
          <button className="w-full p-[10px] shadow-md rounded-md border" onClick={addContent}>
            추가
          </button>
        </div>
      </div>
      {contents.length > 0 && (
        <div className="py-[20px] border-gray-400 border-double border-y-4">
          <nav className="flex justify-between text-md pb-[10px] px-[20px] border-b border-gray-400">
            <div>메뉴</div>
            <div>가격</div>
            <div>삭제</div>
          </nav>
          {contents.map((content) => {
            return (
              <div key={content.id}>
                <BreakDownCard
                  title={content.subTitle}
                  price={Number(content.price)}
                  deleteContent={() => deleteContent(content.id)}
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="my-[20px] flex justify-between">
        <button
          className="w-full p-[10px] shadow-md rounded-md border hover:bg-primary hover:text-white"
          onClick={submitData}>
          확인
        </button>
        <button className="w-full p-[10px] shadow-md rounded-md border hover:bg-red-500 hover:text-white">취소</button>
      </div>
    </div>
  );
};

export default WritePage;
