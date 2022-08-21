import * as React from "react";
import type { NextPage } from "next";
import { Dashboard as DashboardTemplate } from "../components/template/dashboard";
import { ethers } from "ethers";
import * as Formik from "formik";
import { Subscription } from "../application/subscription";
import * as Yup from "yup";
import { Biconomy } from "@biconomy/mexa";
import * as subscriptionDomain from "../application/subscription";

const initialValues: Subscription = {
  tokenAddress: "",
  price: 0,
  interval: 0,
  walletAddress: "",
};

const biconomyFowarder = "0xfd4973feb2031d4409fb57afee5df2051b171104";

const Dashboard: NextPage = () => {
  const [wallet, setWallet] = React.useState<string>();
  const [biconomy, setBiconomy] = React.useState<Biconomy>();
  const [contract, setContract] = React.useState<ethers.Contract>();

  const formik = Formik.useFormik<Subscription>({
    initialValues,
    onSubmit: async (values) => {
      await biconomy?.init();
      console.log("onSubmit");
      contract?.createFoundation(
        values.tokenAddress,
        values.price,
        values.interval,
        biconomyFowarder
      );
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
      const biconomy = new Biconomy(
        window.ethereum as subscriptionDomain.ExternalProvider,
        {
          apiKey: process.env["BICONOMY_API_KEY"] ?? "",
          debug: true,
          contractAddresses: ["0x5fbdb2315678afecb367f032d93f642f64180aa3"],
        }
      );
      setBiconomy(biconomy);

      const contractInstance = new ethers.Contract(
        subscriptionDomain.address,
        subscriptionDomain.abi,
        biconomy.ethersProvider
      );
      setContract(contractInstance);
    })();
  });

  const getValue = (formik: any, name: keyof Subscription) => {
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

  const walletAddress = React.useMemo(() => {
    return getValue(formik, "walletAddress");
  }, [formik.values.walletAddress]);

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    setWallet(walletAddress);
  };

  return (
    <DashboardTemplate
      wallet={wallet}
      tokenReceiveAddress={walletAddress}
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
