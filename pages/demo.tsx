import * as React from "react";
import type { NextPage } from "next";
import { Demo as DemoTemplate } from "../components/template/demo";
import { ethers } from "ethers";
import { abi, contractAddress } from "../application/demo";
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

    const subscriptionContract = await new ethers.Contract(
      contractAddress,
      abi,
      signer
    );
    const tokenContract = await new ethers.Contract(
      "0xe11A86849d99F524cAC3E7A0Ec1241828e332C62",
      [
        "function approve(address spender, uint amount) public returns(bool)",
        "function allowance(address owner, address spender) external view returns (uint)",
      ],
      signer
    );

    const approveTx = await tokenContract.approve(
      "0xf8f9a522d43d77Ab7E1c44cECBB296BCD17e14DD",
      ethers.constants.MaxUint256
    );

    await approveTx.wait();

    const subscribeTx = await subscriptionContract.subscribe();
  };
  const cancelSubscription = async (address: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    const subscriptionContract = await new ethers.Contract(
      contractAddress,
      abi,
      signer
    );
    await subscriptionContract.cancelSubscription(address);
  };

  return (
    <DemoTemplate
      connectWallet={connectWallet}
      onClick={onClick}
      cancelSubscription={cancelSubscription}
    />
  );
};
export default Home;
