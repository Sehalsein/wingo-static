import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import fetcher from "@/src/lib/swr";
import { NextPageWithLayout } from "@/src/types/app/next";
import { ReactElement } from "react";

type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return getLayout(
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        refreshInterval: 0,
        fetcher: (url: string) => fetcher(url),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
