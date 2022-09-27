import BreakDownCard from '../components/common/BreakDownCard';

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

const MainPage = () => {
  const priceCalc = () => {
    let consumption = 0;

    data.consumption.map((value) => {
      consumption += value.price;
    });

    const result = data.basicFunds + consumption;
    return result;
  };

  return (
    <div>
      <nav className="flex justify-between text-md px-[20px] py-[10px] border-b border-gray-400">
        <div>메뉴</div>
        <div>가격</div>
      </nav>
      <div>
        <BreakDownCard title="기초자금" price={data.basicFunds} />
        {data.consumption.map((consumption) => (
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

export default MainPage;
