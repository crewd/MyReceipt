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
      className={`p-[20px] text-md ${
        deleteContent ? 'grid grid-cols-3' : 'hover:bg-gray-100/80 cursor-pointer flex justify-between'
      } `}>
      <div className="relative">
        <h3 className="text-left">{title}</h3>
        {date && <div className="absolute bottom-[25px] left-0 text-xs text-gray-500">{date}</div>}
      </div>
      <span className={`${price > 0 ? 'text-green-500' : 'text-red-500'} text-center`}>
        {price > 0 ? `+${price.toLocaleString()}` : price.toLocaleString()}
      </span>
      {deleteContent && (
        <button className="text-right hover:text-red-500" onClick={deleteContent}>
          삭제
        </button>
      )}
    </div>
  );
};

export default BreakDownCard;
