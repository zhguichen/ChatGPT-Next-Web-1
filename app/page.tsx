import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}

export default MyApp;
