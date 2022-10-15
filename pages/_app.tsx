import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '../components/layout/AppLayout';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppLayout>
        <Suspense fallback={<svg className="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24" />}>
          <Component {...pageProps} />
        </Suspense>
      </AppLayout>
    </RecoilRoot>
  );
}

export default MyApp;
