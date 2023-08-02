import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Tic Tac Toe</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
