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

const biconomyFowarder = "0x61456BF1715C1415730076BB79ae118E806E74d2";

const Dashboard: NextPage = () => {
  const [wallet, setWallet] = React.useState<string>();
  const [provider, setProvider] =
    React.useState<ethers.providers.Web3Provider>();
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
          apiKey: "vJF9CwK-3.e8cf391f-171a-4933-a2f1-e4d5102882c2",
          debug: false,
          contractAddresses: ["0x9eB16414f26A7580Ecf0425d6218D50cc7663B21"],
        }
      );

      await biconomy.init();

      var contractInstance = new ethers.Contract(
        subscriptionDomain.address,
        subscriptionDomain.abi,
        biconomy.ethersProvider
      );

      setBiconomy(biconomy);
      setContract(contractInstance);
    })();
  });

  const formik = Formik.useFormik<Subscription>({
    initialValues,
    onSubmit: async (values) => {
      console.log("values :", values);

      const amount = ethers.utils.parseUnits(values.price.toString());
      const getInterval = () => {
        return values.interval == 0
          ? 1
          : values.interval == 50
          ? 7
          : values.interval == 100
          ? 30
          : null;
      };
      const priceNum = () => {
        return Number(values.price);
      };
      console.log("amount :", amount);
      console.log("priceNum :", priceNum());
      console.log("interval :", getInterval());
      console.log("contract :", contract);
      let { data } = (await contract?.populateTransaction.createFoundation(
        values.tokenAddress,
        amount,
        getInterval(),
        biconomyFowarder
      )) as any;
      console.log("contract :", contract);

      let txParams = {
        data: data,
        to: subscriptionDomain.address,
        from: wallet,
        signatureType: "EIP712_SIGN",
      };
      await provider?.send("eth_sendTransaction", [txParams]);

      const successEvent = contract?.filters[
        "SuccessCreateSubscription"
      ] as any;

      if (successEvent !== undefined) {
        provider?.once("block", () => {
          contract?.on(successEvent(), (address: string) => {
            console.log("address :", address);
          });
        });
      }

      console.log("successEvent :", successEvent());
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
    setProvider(provider);
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
