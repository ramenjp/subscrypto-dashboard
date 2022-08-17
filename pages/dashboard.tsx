import * as React from "react";
import type { NextPage } from "next";
import { Dashboard as DashboardTemplate } from "../components/template/dashboard";
import { ethers } from "ethers";
import * as Formik from "formik";
import { Subscription } from "../application/subscription";
import { contractAddress } from "../config";
import * as Yup from "yup";

const initialValues: Subscription = {
  tokenAddress: "",
  price: 0,
  interval: 0,
};

const Dashboard: NextPage = () => {
  const [wallet, setWallet] = React.useState<string>();
  const formik = Formik.useFormik<Subscription>({
    initialValues,
    onSubmit: async (values) => {
      // contractAddress.createSubscription(value);
    },
    validationSchema: () => {
      return Yup.object().shape({
        tokenAddress: Yup.string().required("Please select a token"),
        price: Yup.number(),
        interval: Yup.number(),
      });
    },
  });

  React.useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      console.log("provider2 :", provider);
      const signer = provider.getSigner();
      const wallet = await signer.getAddress();
      if (wallet) {
        setWallet(wallet);
      }
    })();
  });

  const getValue = (formik: any, name: keyof Subscription) => {
    return formik.values[name];
  };

  const tokenAddress = React.useMemo(() => {
    return getValue(formik, "tokenAddress");
  }, []);
  const price = React.useMemo(() => {
    return getValue(formik, "price");
  }, []);
  const interval = React.useMemo(() => {
    return getValue(formik, "interval");
  }, []);

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
  };

  return (
    <DashboardTemplate
      connectWallet={connectWallet}
      wallet={wallet}
      tokenAddress={tokenAddress}
      price={price}
      interval={interval}
    />
  );
};

export default Dashboard;
