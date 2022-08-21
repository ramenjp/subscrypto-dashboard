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
          apiKey: "UKImVu1mg.1b65c436-0524-4989-b99d-1ef74f680d90",
          debug: false,
          contractAddresses: ["0x5fbdb2315678afecb367f032d93f642f64180aa3"],
        }
      );

      await biconomy.init();

      var contractInstance = new ethers.Contract(
        subscriptionDomain.address,
        subscriptionDomain.abi,
        biconomy.ethersProvider
      );

      console.log("biconomy.ethersProvider : ", biconomy.ethersProvider);
      console.log("biconomy : ", biconomy);
      console.log("contractInstance : ", contractInstance);

      setBiconomy(biconomy);
      setContract(contractInstance);
    })();
  });

  const formik = Formik.useFormik<Subscription>({
    initialValues,
    onSubmit: async (values) => {
      console.log("onSubmit");
      console.log("values :", values);
      console.log("contract :", contract);
      const amount = ethers.utils.parseUnits(values.price.toString());
      console.log("amount :", amount);
      const transaction = await contract?.populateTransaction.createFoundation(
        values.tokenAddress,
        values.price,
        values.interval,
        biconomyFowarder
      );
      console.log("transaction :", transaction);
    },
    validationSchema: () => {
      return Yup.object().shape({
        tokenAddress: Yup.string().required("Please select a token"),
        price: Yup.number(),
        interval: Yup.number(),
      });
    },
  });

  const getValue = (formik: any, name: keyof Subscription) => {
    return {
      value: formik.values[name],
      error: formik.errors[name],
    };
  };

  const tokenAddress = React.useMemo(() => {
    console.log(getValue(formik, "tokenAddress"));
    return getValue(formik, "tokenAddress");
  }, [formik.values.tokenAddress]);

  const price = React.useMemo(() => {
    return getValue(formik, "price");
  }, [formik.values.price]);

  const interval = React.useMemo(() => {
    console.log("interval :", getValue(formik, "interval"));
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
