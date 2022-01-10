import "../styles/globals.css";
import type { AppProps } from "next/app";
import fetcher from "../src/lib/swr";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
