const BreakDownCard = ({
  title,
  date,
  price,
  deleteContent,
}: {
  title: string;
  date?: string;
  price: number;
  deleteContent?: () => void;
}) => {
  return (
    <div
      className={`p-[20px] flex justify-between text-md ${
        deleteContent ? '' : 'hover:bg-gray-100/80 cursor-pointer'
      } `}>
      <div className="relative">
        <h3>{title}</h3>
        {date && <div className="absolute bottom-[25px] left-0 text-xs text-gray-500">{date}</div>}
      </div>
      <span className={`${price > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {price > 0 ? `+${price.toLocaleString()}` : price.toLocaleString()}
      </span>
      {deleteContent && (
        <button className="hover:text-red-500" onClick={deleteContent}>
          삭제
        </button>
      )}
    </div>
  );
};

export default BreakDownCard;
