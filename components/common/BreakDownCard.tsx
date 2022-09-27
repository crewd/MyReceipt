const BreakDownCard = ({ title, date, price }: { title: string; date?: string; price: number }) => {
  return (
    <div className="p-[20px] flex justify-between text-md hover:bg-gray-100/80 cursor-pointer">
      <div className="relative">
        <span>{title}</span>
        <span className="absolute bottom-[25px] left-0 text-xs text-gray-500">{date}</span>
      </div>
      <span className={`${price > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {price > 0 ? `+${price.toLocaleString()}` : price.toLocaleString()}
      </span>
    </div>
  );
};

export default BreakDownCard;
