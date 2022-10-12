import Link from 'next/link';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[768px] sm:w-[calc(100%-80px)] w-full m-auto bg-white px-[40px] sm:my-[40px] sm:min-h-[calc(100vh-80px)] min-h-screen">
      <header className="py-[20px] px-[20px] border-double border-b-4 border-gray-400">
        <h1 className="font-bold text-xxl">
          <Link href="/">
            <a>MyReceipt</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
