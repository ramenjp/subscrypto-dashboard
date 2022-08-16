import * as React from "react";
import type { NextPage } from "next";
import { Dashboard as DashboardTemplate } from "../components/template/dashboard";
import { ethers } from "ethers";

const Dashboard: NextPage = () => {
  const [wallet, setWallet] = React.useState<string>();
  React.useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      console.log("provider2 :", provider);
      const signer = provider.getSigner();
      const wallet = await signer.getAddress();
      if (wallet) {
        console.log("signer :", signer);
        console.log("wallet :", wallet);
        setWallet(wallet);
      }
    })();
  });

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
  };
  return <DashboardTemplate connectWallet={connectWallet} wallet={wallet} />;
};

export default Dashboard;
