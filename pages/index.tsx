import * as React from "react";
import type { NextPage } from "next";
import { Home as HomeTemplate } from "../components/template/index";
import { ethers } from "ethers";
import keccak256 from "keccak256";
import abi from "../config/abi.json";
import { contractAddress } from "../config";

const Home: NextPage = () => {
  React.useEffect(() => {
    async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
    };
  }, []);

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
  };
  return <HomeTemplate connectWallet={connectWallet} />;
};
export default Home;
