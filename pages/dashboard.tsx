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
      const signer = provider.getSigner();
      const wallet = await signer.getAddress();
      if (wallet) {
        setWallet(wallet);
      }
    })();
  });

  const getValue = (formik: any, name: keyof Subscription) => {
    console.log("click", formik.values.tokenAddress);
    return {
      value: formik.values[name],
      error: formik.errors[name],
    };
  };

  const tokenAddress = React.useMemo(() => {
    return getValue(formik, "tokenAddress");
  }, [formik.values.tokenAddress]);

  const price = React.useMemo(() => {
    return getValue(formik, "price");
  }, [formik.values.price]);

  const interval = React.useMemo(() => {
    return getValue(formik, "interval");
  }, [formik.values.interval]);

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
  };

  return (
    <DashboardTemplate
      wallet={wallet}
      tokenAddress={tokenAddress}
      price={price}
      interval={interval}
      connectWallet={connectWallet}
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
    />
  );
};

export default Dashboard;
