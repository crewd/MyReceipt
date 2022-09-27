const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[768px] w-full m-auto bg-white px-[40px] md:my-[40px] ">
      <header className="py-[20px] border-double border-b-4 border-gray-400">
        <h1 className="font-bold text-xxl">MyReceipt</h1>
        <p className="flex justify-end w-full text-gray-500">닉네임 님</p>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
