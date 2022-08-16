import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ethers } from "ethers";
import Header from "../components/organisms/header";

declare global {
  interface Window {
    ethereum: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
