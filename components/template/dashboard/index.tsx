import * as React from "react";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import NotConnected from "../../organisms/NotConnected";
import Button from "../../atoms/button";
import Link from "next/link";
import { ReceiveToken } from "../../organisms/ReceiveToken";
import { Period } from "../../organisms/Period";
import { Amount } from "../../organisms/Amount";
import { ReceiveAddress } from "../../organisms/ReceiveAddress";

type Field<T> = {
  value: T;
  error: boolean;
};

type Props = {
  wallet: string | undefined;
  tokenReceiveAddress: Field<string>;
  tokenAddress: Field<string>;
  price: Field<number>;
  interval: Field<number>;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  connectWallet: () => void;
};

export const Dashboard: React.FC<Props> = (props) => {
  const [progress, setProgress] = React.useState<number>(1);
  const [token, setToken] = React.useState<number>(0);
  return (
    <div className={styles["content"]}>
      {props.wallet ? (
        <div className={styles["content__wrap"]}>
          <div className={styles["content__left"]}>
            <ul className={styles["content__left-list"]}>
              <Link href="/">
                <li className={styles["content__left-item"]}>Dashboard</li>
              </Link>
              <li
                className={`${styles["content__left-item"]} ${styles["disabled"]}`}
              >
                Plans
              </li>
              <li
                className={`${styles["content__left-item"]} ${styles["disabled"]}`}
              >
                Document
              </li>
            </ul>
          </div>
          <div className={styles["content__right"]}>
            <div className={styles["title"]}>
              Let’s Create Your Subscription Plan
            </div>
            <div className={styles["progress"]}>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 1 && styles["progress__box-active"]
                }`}
              >
                Receive token
              </div>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 2 && styles["progress__box-active"]
                }`}
              >
                period
              </div>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 3 && styles["progress__box-active"]
                }`}
              >
                Amount
              </div>
              <div
                className={`${styles["progress__box"]} ${
                  progress == 4 && styles["progress__box-active"]
                }`}
              >
                Receive Address
              </div>
            </div>
            <div className={styles["box"]}>
              {progress == 1 ? (
                <ReceiveToken
                  tokenAddress={props.tokenAddress}
                  setToken={setToken}
                  token={token}
                  setProgress={setProgress}
                  handleChange={props.handleChange}
                />
              ) : progress == 2 ? (
                <Period
                  interval={props.interval}
                  setProgress={setProgress}
                  handleChange={props.handleChange}
                />
              ) : progress == 3 ? (
                <Amount
                  tokenAddress={props.tokenAddress}
                  setProgress={setProgress}
                  handleChange={props.handleChange}
                />
              ) : progress == 4 ? (
                <ReceiveAddress
                  tokenReceiveAddress={props.tokenReceiveAddress}
                  setProgress={setProgress}
                  handleChange={props.handleChange}
                  handleSubmit={props.handleSubmit}
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <NotConnected connectWallet={props.connectWallet} />
      )}
    </div>
  );
};

export default Dashboard;
