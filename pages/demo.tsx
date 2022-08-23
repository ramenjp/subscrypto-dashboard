import * as React from "react";
import type { NextPage } from "next";
import { Demo as DemoTemplate } from "../components/template/demo";
import { ethers } from "ethers";
import { abi } from "../application/demo";
import { ConstructorFragment } from "ethers/lib/utils";

const Home: NextPage = () => {
  React.useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();

      //   const contract = await new ethers.Contract("", abi, signer);

      //   const tx = await contract.subscribe();
    })();
  });

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
  };

  const onClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = await new ethers.Contract("", abi, signer);

    const approveTx = contract.approve("USDC", 10);
    await approveTx.wait();

    const subscribeTx = await contract.subscribe();
  };
  return <DemoTemplate connectWallet={connectWallet} onClick={onClick} />;
};
export default Home;
