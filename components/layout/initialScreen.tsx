const InitialScreen = ({
  basicFunds,
  onChangeHandler,
  addBasicFunds,
}: {
  basicFunds: number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addBasicFunds: () => void;
}) => {
  return (
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
  );
};

export default InitialScreen;
