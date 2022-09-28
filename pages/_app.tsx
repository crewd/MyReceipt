import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '../components/layout/AppLayout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </RecoilRoot>
  );
}

export default MyApp;
