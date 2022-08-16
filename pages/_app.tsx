import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ethers } from "ethers";
import Header from "../components/organisms/header";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare global {
  interface Window {
    ethereum: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pathName, setPathName] = React.useState<string>();

  useEffect(() => {
    setPathName(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <Header pathName={pathName} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
